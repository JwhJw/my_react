import React, { Component } from 'react'

export default class NumberForm extends Component {
    state = {
        val: ''
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入电话" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val: e.target.value.replace(/\D/g, '')
                    })
                }} />
            </div>
        )
    }
}
