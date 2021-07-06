import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './asset/errorPic.jpg'
const a = 1234,b = 4312;
const obj = {
  a:1,
  b:3
}

const Reactobj = <span>This is a span element</span>
const arr = [2,null,false,undefined,3];

const numbers = new Array(30);
numbers.fill(0);
var list = numbers.map((item,index)=>(<li key={index}>{index}</li>));
// console.log(list)
const content = '<h1>this is a h1 element</h1>'
const div = (
  <div dangerouslySetInnerHTML={{
    __html:content
  }}> 


    {123}*{456} = {123*456}
    <p>
      {null}
      {undefined}
      {false}
    </p>
    
    <p>
      {Reactobj}
      {/* {obj} */}
    </p>
    <p>{arr}</p>
    <p>
      {list}
    </p>
    <img src={src1} alt="pic" />
  </div>
)
ReactDOM.render(div,document.getElementById('root'))