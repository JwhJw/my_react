import React, { Component } from 'react'
import Select from './index';
import { getAllStudents } from '../../../services/getStudents'
export default class Test extends Component {
    state = {
        data: [],
        value:'' 
    }
    async componentDidMount() {
        const students = await getAllStudents();
        this.setState({
            data: students.map(item => {
                return {
                    value: item.id.toString(),  //转为字符串，因为e.target.value的值为字符串
                    text: item.name
                }
            })
        }, () => {
            // console.log(this.state.data)
        })
    }
    changeChoise = (val,name,e) => {
        this.setState({
            value: val
        },()=>{console.log(this.state.value,name,e)})
    }

    render() {
        return (
            <div>
                <Select name="prefer" {...this.state} changeChoise={this.changeChoise} />
            </div>
        )
    }
}
