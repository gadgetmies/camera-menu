import {JSX, useState, useEffect} from 'react'
import './App.css'
import SonyCss from './Sony.css?url'
import CanonCss from './Canon.css?url'
import PanasonicCss from './Panasonic.css?url'

const csvModules = import.meta.glob('./data/*.csv', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const cssFileMap: Record<string, string> = {
    'Sony': SonyCss,
    'Canon': CanonCss,
    'Panasonic': PanasonicCss
}

const cameraCsvs: Record<string, string> = {}
const cameraDisplayNames: Record<string, string> = {}
const cameraCssFiles: Record<string, string> = {}

Object.keys(csvModules).forEach((path) => {
    const fileName = path.replace('./data/', '').replace('.csv', '')
    const key = fileName
    const csvContent = csvModules[path] as string
    cameraCsvs[key] = csvContent
    
    const configIndex = csvContent.indexOf('camera_menu_config')
    if (configIndex !== -1) {
        const configLines = csvContent.substring(configIndex).split('\n')
        for (const line of configLines) {
            if (line.startsWith('display_name,')) {
                cameraDisplayNames[key] = line.substring('display_name,'.length)
            } else if (line.startsWith('css_file,')) {
                cameraCssFiles[key] = line.substring('css_file,'.length)
            }
        }
    }
    
    if (!cameraDisplayNames[key]) {
        cameraDisplayNames[key] = fileName
    }
    if (!cameraCssFiles[key]) {
        cameraCssFiles[key] = 'Sony'
    }
})

const process = (acc: Record<string, any>, value: string): void => {
    const commaPosition = value.indexOf(',');
    if (commaPosition !== -1) {
        const key = value.substring(0, commaPosition)
        if (key === '') {
            return
        }
        if (!acc[key]) {
            acc[key] = {}
        }
        process(acc[key], value.substring(commaPosition + 1))
    } else {
        acc[value] = ''
    }
}

type SetSelectedFn = (level: number, index: number) => void


const render = (config: Record<string, any>, node: Record<string, any>, level: number, selected: Array<number>, setSelected: SetSelectedFn, classNames: string = ''): JSX.Element => {
    return <>
        <div className={`level-${level} container ${classNames}`} key={`level-${level}-container`}>
            {Object.keys(node).map((key, i) => {
                const parts = key.match(/(<i name="(.*)"\/>)?(.*)/)
                return <div 
                            className={`${selected[level] === i ? 'selected' : ''} item-${i} item`}
                            key={key}
                            onClick={() => setSelected(level, i)}>
                    <span className={'index'}>{i + 1}</span>
                    {parts![2] &&
                        <span className={'icon'}>
                            <img alt={parts![2]} src={`data:image/png;base64, ${config.icons[parts![2]]}`}/>
                        </span>}
                    <span className={'label'}>{parts![3]}</span>
                </div>;
            })
            }
        </div>
        {Object.values(node)
            .map((value, index) => value instanceof Object && selected[level] === index ?
                render(config, value, level + 1, selected, setSelected, `${classNames} ${level === 0 ? `category-${index}` : ''}`) :
                null)}
    </>
}

const setSelected = (update: UpdateFn, memo: Array<number>) => (level: number, index: number) => {
    let updated = memo.slice()
    updated.splice(level, updated.length - level, index)
    update(updated)
}

type UpdateFn = (memo: Array<number>) => void

const crumbPath = (structure: Record<string, any>, selected: Array<number>) => {
    const res = selected.reduce(([result, current]: [Array<JSX.Element>, Record<string, any>], index: number): [Array<JSX.Element>, Record<string, any>] => {
        const currentKey = Object.keys(current)[index];
        if (!currentKey) {
            return [result, current]
        }
        const parts = currentKey.match(/(<i name="(.*)"\/>)?(.*)/)
        return [[...result, <div className={'crumb'} key={currentKey}>{parts![3]}</div>], current[currentKey]];
    }, [[], structure]);
    return <div className={'crumb-path'}>{res[0]}</div>
}

const search = (structure: Record<string, any>, searchString: string, path: Array<number>, keys: Array<string>, select: UpdateFn): JSX.Element[] => {
    return [...Object.keys(structure)
        .map((key, index) =>
            key.toLowerCase().includes(searchString.toLowerCase()) ?
                <div key={key} onClick={() => select([...path, index])}>{[...keys, key].join(' > ')}</div> : null
        ),
        ...Object.entries(structure).map(([key, value], i) => value instanceof Object ? search(value, searchString, [...path, i], [...keys, key], select) : [])
    ].filter(Boolean) as JSX.Element[]
}

function App() {
    const cameraSettings = ((camera: string) => {
        if (!camera) return {data: {}, config: {icons: {}}}

        let data = {}

        let config: {icons: Record<string, string>, displayName?: string, cssFile?: string} = {icons: {}}
        const [_, ...rest] = cameraCsvs[camera].split("\n")
        const menuLines = rest.slice(0, rest.indexOf('camera_menu_config'))
        for (const line of menuLines) {
            if (line.startsWith('camera_menu_config')) {
                break
            }
            process(data, line)
        }

        const configStartIndex = rest.findIndex(line => line.startsWith('camera_menu_config'))
        if (configStartIndex !== -1) {
            for (const line of rest.slice(configStartIndex + 1)) {
                if (line.startsWith('display_name,')) {
                    config.displayName = line.substring('display_name,'.length)
                } else if (line.startsWith('css_file,')) {
                    config.cssFile = line.substring('css_file,'.length)
                } else if (line.startsWith('icon')) {
                    const commaIndex = line.indexOf(',')
                    if (commaIndex !== -1) {
                        config.icons[line.substring(5, commaIndex)] = line.substring(commaIndex + 1)
                    }
                }
            }
        }

        return {data, config}
    })

    const [selectedCamera, _setSelectedCamera] = useState(Object.keys(cameraCsvs)[0] || '')
    const [cameraData, _setCameraData] = useState(cameraSettings(selectedCamera))
    const data = cameraData.data
    const config = cameraData.config
    const [selected, _setSelected] = useState([0, 0])
    const [searchString, setSearchString] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    const handleSearchBlur = () => {
        setTimeout(() => {
            const activeElement = document.activeElement
            if (!activeElement || !activeElement.closest('.search-group')) {
                setIsSearchFocused(false)
            }
        }, 200)
    }

    useEffect(() => {
        const cssFile = config.cssFile || cameraCssFiles[selectedCamera] || 'Sony'
        const linkId = 'camera-specific-css'
        
        let link = document.getElementById(linkId) as HTMLLinkElement
        
        if (!link) {
            link = document.createElement('link')
            link.id = linkId
            link.rel = 'stylesheet'
            document.head.appendChild(link)
        }
        
        const cssUrl = cssFileMap[cssFile]
        if (cssUrl) {
            link.href = cssUrl
        }
    }, [selectedCamera, config.cssFile])

    const select = setSelected(_setSelected, selected)

    return <div className={'root'}>
        <div className={'controls-header'}>
            <div className={`control-group camera-select-group ${isSearchFocused ? 'hidden' : ''}`}>
                <select 
                    className={'camera-select'}
                    value={selectedCamera} 
                    onChange={({target: {value}}) => {
                        _setSelectedCamera(value)
                        _setCameraData(cameraSettings(value))
                    }}>
                    {Object.keys(cameraCsvs).map(key => (
                        <option key={key} value={key}>{cameraDisplayNames[key]}</option>
                    ))}
                </select>
            </div>
            <div className={`control-group search-group ${isSearchFocused ? 'expanded' : ''}`}>
                <div className={'search-container'}>
                    <svg className={'search-icon'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 10.5L9.5 8.5M10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input 
                        className={'search-input'}
                        type="text"
                        placeholder="Search menu items..."
                        value={searchString} 
                        onChange={e => setSearchString(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={handleSearchBlur}
                    />
                    {searchString !== '' && (
                        <button 
                            className={'search-clear'}
                            onClick={() => setSearchString('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>
                {searchString !== '' && (
                    <div className={'search-results'}>
                        {search(data, searchString, [], [], _setSelected)}
                    </div>
                )}
            </div>
        </div>
        <div className={'wrapper'}>
            <div className={'menu'}>
                {crumbPath(data, selected)}
                {render(config, data, 0, selected, select)}
                <div className={'nav-buttons'}>
                    <div className={'back-button'} onClick={() => _setSelected(selected.slice(0, -1))}></div>
                </div>
            </div>
        </div>
    </div>
}

export default App
