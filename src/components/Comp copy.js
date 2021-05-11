import React, { Component } from 'react'

export default class Comp extends Component {
    state = {
        n: 0
    }
    handleClick = () => {
        this.setState({
            n: this.state.n + 1,
        },()=>{
            console.log('回调：',this.state.n)   //状态完成改变之后触发，该回调运行在render之后
        })
        console.log('状态未改变：',this.state.n)
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.state.n}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
