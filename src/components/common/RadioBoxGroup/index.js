import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class Comp extends Component {
    static defaultProps = {
        choise: [],
        value: ''
    }
    static propTypes = {
        choise: types.groupDatas.isRequired,
        changeChoise: PropTypes.func,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }
    handleChange = (e) => {
        let val = e.target.value;
        this.props.changeChoise && this.props.changeChoise(val, this.props.name, e)
    }
    render() {
        return (
            <label>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value }
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}
export default withDataGroup(Comp)