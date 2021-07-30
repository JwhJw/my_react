import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../hoc/withDataGroup'

class Option extends Component {
    static propTypes = {
        info: types.singleData
    }
    render() {
        return <option
            value={this.props.info.value}>
            {this.props.info.text}
        </option>
    }
}
const OptionGroup = withDataGroup(Option);
// console.log(OptionGroup)
export default class Select extends Component {
    static defaultProps = {
        choise: [],
        value: ''
    }
    static propTypes = {
        info: types.singleData
    }
    static propTypes = {
        choise: types.groupDatas.isRequired,
        changeChoise: PropTypes.func,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }
    handleChange = (e) => {
        console.log(e.target.value, this.props.name)
        this.props.changeChoise && this.props.changeChoise(e.target.value, this.props.name, e)
    }
    render() {
        return (
            <select value={this.props.value} name={this.props.name} onChange={this.handleChange}>
                <OptionGroup {...this.props} />
            </select>
        )
    }
}