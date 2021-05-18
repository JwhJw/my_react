import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './components/Comp'

const container = document.getElementById('root')
const content = <div>content</div>
ReactDOM.render(<Comp content={content}>
</Comp>, container)