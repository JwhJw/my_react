import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropTypes from 'prop-types'

export default class index extends Component {
    static defaultProps = {
        choise: [],
        value:''
    }
    static propTypes = {
        choise:types.groupDatas.isRequired,
        changeChoise:PropTypes.func,
        name:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired
    }
    getOptions = () => {
        return this.props.choise.map(item => <option key={item.value} value={item.value}>{item.text}</option>)
    }
    handleChange = (e) => {
        this.props.changeChoise && this.props.changeChoise(e.target.value, this.props.name, e)
    }
    render() {
        // console.log(this.props)
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
