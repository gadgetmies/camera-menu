import {JSX, useState} from 'react'
import './Sony.css'
//import './Canon.css'

import csv from './sonyA7iv.csv?raw'
//import csv from './canon5Div.csv?raw'

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

let data = {}
const [_, ...rest] = csv.split("\n")
for (const line of rest) {
    process(data, line)
}

console.log({data})

type SetSelectedFn = (level: number, index: number) => void


const render = (node: Record<string, any>, level: number, selected: Array<number>, setSelected: SetSelectedFn, classNames: string = ''): JSX.Element => {
    return <>
        <div className={`level-${level} container ${classNames}`}>
            {Object.keys(node).map((key, i) =>
                <div className={`${selected[level] === i ? 'selected' : ''} item-${i} item`}
                     onClick={() => setSelected(level, i)}>
                    <span className={'index'}>{i + 1}</span>
                    <span className={'label'}>{key}</span>
                </div>)
            }
        </div>
        {Object.values(node)
            .map((value, index) => value instanceof Object && selected[level] === index ?
                render(value, level + 1, selected, setSelected, `${classNames} ${level === 0 ? `category-${index}` : ''}`) :
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
        console.log({currentKey})
        if (!currentKey) {
            return [result, current]
        }
        return [[...result, <div className={'crumb'}>{currentKey}</div>], current[currentKey]];
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
    const [selected, _setSelected] = useState([0, 0])
    const [searchString, setSearchString] = useState('')
    const select = setSelected(_setSelected, selected)
    return <div className={'root'}>
        <div className={'wrapper'}>
            <div className={'menu'}>
                {crumbPath(data, selected)}
                {render(data, 0, selected, select)}
                <div className={'nav-buttons'}>
                    <div className={'back-button'} onClick={() => _setSelected(selected.slice(0, -1))}></div>
                </div>
            </div>
        </div>
        <div className={'search'}>
            <label>Search: <input value={searchString} onChange={e => setSearchString(e.target.value)}/></label>
            <button onClick={() => setSearchString('')}>Clear</button>
            {searchString !== '' && search(data, searchString, [], [], _setSelected)}
        </div>
    </div>
}

export default App
