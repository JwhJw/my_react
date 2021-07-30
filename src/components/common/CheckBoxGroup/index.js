import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../hoc/withDataGroup'

class Comp extends Component {

    // 属性默认值
    static defaultProps = {
        data: [],
        choose: []
    }
    static propTypes = {
        data: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        choose: types.chooseDatas,
        getChoise: PropTypes.func
    }
    handleChange = e => {
        let val;
        if (e.target.checked) {
            val = [...this.props.choose, e.target.value]
        } else {
            val = this.props.choose.filter(item => item !== e.target.value)
        }
        this.props.changeChoise && this.props.changeChoise(val, this.props.name, e)
    }
    render() {
        console.log(this.props)
        return (
            <label>
                <input type="checkbox"
                name={this.props.info.text}
                value={this.props.info.value}
                checked={this.props.choose.includes(this.props.info.value)}
                onChange={this.handleChange}
            />
            {this.props.info.text}
            </label>
        )
    }
}
export default withDataGroup(Comp)