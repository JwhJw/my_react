import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assest/u=1277958337,3281567864&fm=26&gp=0.jpeg"
import src2 from "./assest/u=1577629086,1023767695&fm=26&gp=0.jpeg"
import src3 from "./assest/u=161718715,342072046&fm=26&gp=0.jpeg"
import src4 from "./assest/u=1934026169,3083804955&fm=26&gp=0.jpeg"
import src5 from "./assest/1.jpeg"
import "./index.css"

const srcList = [src1, src2, src3, src4, src5];
const container = document.getElementById('root');
let index = 0;
let timer;

function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % srcList.length;
    ReactDOM.render(<img src={srcList[index]} alt=""></img>, container);
  }, 1000);
}
function stop() {
  clearInterval(timer)
}
start();
container.onmouseenter = function () {
  stop();
}
container.onmouseleave = function () {
  start()
}