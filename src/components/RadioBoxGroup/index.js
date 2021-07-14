import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../utils/commonTypes'

export default class index extends Component {
    static defaultProps = {
        choise:[],
        value:''
    }
    static propTypes = {
        choise:types.groupDatas.isRequired,
        changeChoise:PropTypes.func,
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired
    }
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
        // console.log(this.props)
        const choise = this.getChoise();
        return (
            <div>
                {choise}
            </div>
        )
    }
}
