import React, { Component } from 'react'

export default class index extends Component {
    handleChange = e => {
        let val;
        if (e.target.checked) {
            val = [...this.props.choose,e.target.value]
        }else{
            val = this.props.choose.filter(item=>item!==e.target.value)
        }
        this.props.changeChoise&&this.props.changeChoise(val,this.props.name,e)
    }
    getChoise() {
        return this.props.data.map(item => (<label key={item.value} style={{ display: 'block' }}><input type="checkbox" value={item.value} checked={this.props.choose.includes(item.value)} onChange={this.handleChange} />{item.text}</label>))
    }

    render() {
        const choise = this.getChoise()
        return (
            <div>
                {choise}
            </div>
        )
    }
}
