//字符串ref
//⚠️⚠️⚠️ 已弃用
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
    // constructor()
    handleClick = () => {
        console.log(this.refs)
        this.refs.txt.focus()
        this.refs.CompA.method()
    }
    render() {
        return (
            <>
                <input ref='txt' type="text" />
                <button onClick={this.handleClick}>focus</button>
                <A ref='CompA'/>
            </>
        )
    }
}
export default Comp;