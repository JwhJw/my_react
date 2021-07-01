import React, { Component } from 'react'

export default class ClassDefault extends Component {
    static defaultProps ={
        a:10,
        b:20
    }
    render() {
        return (
            <div>
                a:{this.props.a}
                b:{this.props.b}
            </div>
        )
    }
}