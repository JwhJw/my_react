import React, { Component } from 'react'
const ctx = React.createContext();
console.log(ctx)
class ChildClass extends Component {
    render() {
        return <div>
            <h1>类子组件</h1>
            <ctx.Consumer>
                {value => <><p>a:{value.a}</p><p>b:{value.b}</p></>}
            </ctx.Consumer>
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
                    <ChildClass />
                    <ChildFunc />
                </ctx.Provider>
            </div>
        )
    }
}
