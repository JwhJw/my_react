import React, { Component } from 'react'
export default class Comp extends Component {
    state = {
        n: 0,
        a: 1
    }
    handleClick = () => {
        this.setState(cur => {
            return {
                n: cur.n + 1
            }
        }, () => {
            console.log('callback:', this.state.n)
        })
        this.setState(cur => {
            return {
                n: cur.n + 1
            }
        })
        this.setState(cur => {
            return {
                n: cur.n + 1
            }
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.state.n} {this.state.a}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
