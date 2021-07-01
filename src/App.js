import React from 'react'
import ValidationComp,{ A } from './components/ValidationComp'
import FunctionDefalut from './components/FunctionDefault'
export default function App() {
    return (
        <div>
            <ValidationComp 
            a={10}
            handleClick={()=>{
                console.log("It is a function")
            }}
            F = {FunctionDefalut}
            g = {new A()}
            score={100}
            />
        </div>
    )
}
