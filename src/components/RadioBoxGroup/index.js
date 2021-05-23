import React, { Component } from 'react'

export default class index extends Component {
    handleChange=(e)=>{
        // console.log()
        let val = e.target.value;
        this.props.changeChoise&&this.props.changeChoise(val,this.props.name,e)
    }
    getChoise = () => {
        return this.props.choise.map(item => (<label style={{ display: 'block' }} key={item.value} >
            <input type="radio" name={this.props.name} value={item.value} checked={this.props.value === item.value} onChange={this.handleChange}/>{item.text}</label>))
    }
    render() {
        const choise = this.getChoise();
        return (
            <div>
                {choise}
            </div>
        )
    }
}
