import React, { Component } from 'react'

export default class index extends Component {
    getOptions=()=>{
        return this.props.choise.map(item=><option key={item.value} value={item.value}>{item.text}</option>)
    }
    handleChange=(e)=>{
        this.props.changeChoise&&this.props.changeChoise(e.target.value,this.props.name,e)
    }
    render() {
        const option = this.getOptions()
        return (
            <div>
                <select value={this.props.value} name={this.props.name} onChange={this.handleChange}>
                    {option}
                </select>
            </div>
        )
    }
}
