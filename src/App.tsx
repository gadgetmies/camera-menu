import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as csvjson from 'csvjson'
import * as fs from 'fs'
import * as path from 'path'

const csv = (await import(`./a7iv.csv?raw`)).default;

const menu = [
    {
        title: "Photo",
        children: [
            {
                title: "Exposure",
            }
        ]
    }
]

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
const [headers, ...rest] = csv.split("\n")
for (const line of rest) {
    process(data, line)
}

console.log({data})

const render = (node: object, level: number) => {
    console.log({node})
    return Object.entries(node).map(([key, value], i) =>
        <>
            <div className={`level-${level} container`}>
                {key}
            </div>
            <div style={{position: 'absolute', top: 0}}>
                {value instanceof Object ? render(value, level + 1) : null}
            </div>
        </>
    )

}

function App() {
    const [count, setCount] = useState(0)

    return <div className={'root'}>{render(data, 0)}</div>
}

export default App
