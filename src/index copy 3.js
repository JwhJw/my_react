import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './components/Comp'

const container = document.getElementById('root')
const content1 = <div>content1</div>
const content2 = <div>content2</div>
const content3 = <div>content3</div>
ReactDOM.render(<Comp content1={content1} children={content2}>
    {/* content2会被覆盖 */}
    {content3}
</Comp>, container)