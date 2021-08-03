import React, { Component } from 'react'
const ctx = React.createContext();
console.log(ctx)
class ChildClass extends Component {
    static contextType = ctx;
    render() {
        console.log(this.context)
        return <div>
            <h1>类子组件</h1>
            <p>a:{this.context.a}</p>
            <p>b:{this.context.b}</p>
        </div>
    }
}
function ChildFunc() {
    return <div>
        <h1>函数子组件</h1>
        <div>
    <ctx.Consumer>
        {value => <><p>a:{value.a}</p><p>b:{value.b}</p></>}
    </ctx.Consumer>
        </div>
        <ChildClass />
    </div>
}
export default class NewContext extends Component {
    state = {
        a: 10,
        b: 'context'
    }
    render() {
        return (
            <div>
<ctx.Provider value={this.state}>
    <ChildFunc />
</ctx.Provider>
            </div>
        )
    }
}
