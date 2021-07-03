//对象创建ref
import React, { Component } from 'react'
class A extends Component {
    method(){
        console.log('调用了组件A的方法')
    }
    render(){
        return <h1>A组件</h1>
    }
}
class Comp extends Component {
    constructor(){
        super()
        this.txt = React.createRef();
        this.CompA = React.createRef();
    }
    handleClick = () => {
        console.log(this.txt.current.focus())
        this.CompA.current.method()
    }
    render() {
        return (
            <>
                <input ref={this.txt} type="text" />
                <button onClick={this.handleClick}>focus</button>
                <A ref={this.CompA}/>
            </>
        )
    }
}
export default Comp;