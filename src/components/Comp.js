import React, { Component } from 'react'
export default class Comp extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* {this.props.content} */}
                {this.props.children}
                {this.props.content1}
            </div>
        )
    }
}
