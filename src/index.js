import React from 'react';
import ReactDOM from 'react-dom';
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';
const container = document.getElementById('root')
const comp = <FuncComp />
console.log(comp)
ReactDOM.render(
  <div>
    <FuncComp number={1} />
    <FuncComp number={2} />
    <FuncComp number={3} />
    <ClassComp number={1}/>
    <ClassComp number={2}/>
    <ClassComp number={3}/>
  </div>,
  container
)