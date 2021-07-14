import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropTypes from 'prop-types'
// import { type } from 'language-tags'

export default class index extends Component {

    // 属性默认值
    static defaultProps = {
        data:[],
        choose:[]
    }
    static propTypes = {
        data: types.groupDatas.isRequired,
        name:PropTypes.string.isRequired,
        choose:types.chooseDatas,
        getChoise:PropTypes.func
    }
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
        console.log(this.props.data)
        return this.props.data.map(item => (<label key={item.value} style={{ display: 'block' }}><input type="checkbox" value={item.value} checked={this.props.choose.includes(item.value)} onChange={this.handleChange} />{item.text}</label>))
    }

    render() {
        const choise = this.getChoise()
        console.log(choise)
        return (
            <div>
                {choise}
            </div>
        )
    }
}
