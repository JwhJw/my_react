import { div } from 'prelude-ls';
import React from 'react';
import ReactDOM from 'react-dom';

const content = '<h1>This is a h1 element</h1>'
const odiv = (
  <div dangerouslySetInnerHTML={{
    __html:content
  }}> 
  </div>
  // <div>
  //   {content}
  // </div>
)
ReactDOM.render(odiv,document.getElementById('root'))