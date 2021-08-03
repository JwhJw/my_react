import React, { Component } from 'react'
import PropTypes from 'prop-types'
const types = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    onChangeA: PropTypes.func.isRequired
}
function ChildFunc(props, context) {
    console.log(context);
    return (
        <div>
            <h1>函数子组件</h1>
            <p>a:{context.a}</p>
            <p>b:{context.b}</p>
            <ChildClass />
        </div>
    )
}
ChildFunc.contextTypes = types;
class ChildClass extends Component {
    static contextTypes = types;
    render() {
        console.log(this.context)
        return <div>
            <h1>类子组件</h1>
            <p>{this.context.a}</p>
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 1)
            }}>click me to add a</button>
        </div>
    }
}
export default class OldContext extends Component {
    state = {
        a: 100,
        b: 'context'
    }
    static childContextTypes = types;
    getChildContext() {
        console.log('get context');
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: newA => {
                this.setState({
                    a: newA
                })
            }
        }
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <p>a:{this.state.a}</p>
                <ChildFunc />
            </div>
        )
    }
}
