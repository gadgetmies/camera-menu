import {JSX, useState} from 'react'
import './Sony.css'
//import './Canon.css'

import sA7iv from './sonyA7iv.csv?raw'
import sA7Riii from './sonyA7Riii.csv?raw'
import c5Div from './canon5Div.csv?raw'

const cameraCsvs: Record<string, string> = {
    sA7iv,
    sA7Riii,
    c5Div
}

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
        <div className={`level-${level} container ${classNames}`}>
            {Object.keys(node).map((key, i) => {
                const parts = key.match(/(<i name="(.*)"\/>)?(.*)/)
                console.log({parts})
                return <div className={`${selected[level] === i ? 'selected' : ''} item-${i} item`}
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
        return [[...result, <div className={'crumb'}>{parts![3]}</div>], current[currentKey]];
    }, [[], structure]);
    console.log({res})
    return <div className={'crumb-path'}>{res[0]}</div>
}

const search = (structure: Record<string, any>, searchString: string, path: Array<number>, keys: Array<string>, select: UpdateFn): JSX.Element[] => {
    return [...Object.keys(structure)
        .map((key, index) =>
            key.toLowerCase().includes(searchString.toLowerCase()) ?
                <div onClick={() => select([...path, index])}>{[...keys, key].join(' > ')}</div> : null
        ),
        ...Object.entries(structure).map(([key, value], i) => value instanceof Object ? search(value, searchString, [...path, i], [...keys, key], select) : [])
    ].filter(Boolean) as JSX.Element[]
}

function App() {
    const cameraSettings = ((camera: string) => {
        if (!camera) return {data: {}, config: {icons: {}}}

        let data = {}

        let config: {icons: Record<string, string>} = {icons: {}}
        const [_, ...rest] = cameraCsvs[camera].split("\n")
        const menuLines = rest.slice(0, rest.indexOf('camera_menu_config'))
        for (const line of menuLines) {
            if (line.startsWith('camera_menu_config')) {
                break
            }
            process(data, line)
        }

        for (const line of rest.slice(1)) {
            if (line.startsWith('icon')) {
                const commaIndex = line.indexOf(',')
                if (commaIndex !== -1) {
                    config.icons[line.substring(5, commaIndex)] = line.substring(commaIndex + 1)
                }
            }
        }

        return {data, config}
    })

    const [selectedCamera, _setSelectedCamera] = useState('sA7iv')
    const [cameraData, _setCameraData] = useState(cameraSettings(selectedCamera))
    const data = cameraData.data
    const config = cameraData.config
    const [selected, _setSelected] = useState([0, 0])
    const [searchString, setSearchString] = useState('')

    const select = setSelected(_setSelected, selected)

    return <div className={'root'}>
        <div className={'wrapper'}>
            <div className={'menu'}>
                {crumbPath(data, selected)}
                {render(config, data, 0, selected, select)}
                <div className={'nav-buttons'}>
                    <div className={'back-button'} onClick={() => _setSelected(selected.slice(0, -1))}></div>
                </div>
            </div>
        </div>
        <div>
            <label>
                Camera Model:
                <select onChange={({target: {value}}) => {
                    _setSelectedCamera(value)
                    _setCameraData(cameraSettings(value))
                }}>
                    <option value={"sA7iv"}>Sony A7iv</option>
                    <option value={"sA7Riii"}>Sony A7Riii</option>
                    <option value={"c5Div"}>Canon 5Div</option>
                </select>
            </label>
        </div>
        <div className={'search'}>
            <label>Search: <input value={searchString} onChange={e => setSearchString(e.target.value)}/></label>
            <button onClick={() => setSearchString('')}>Clear</button>
            {searchString !== '' && search(data, searchString, [], [], _setSelected)}
        </div>
    </div>
}

export default App
