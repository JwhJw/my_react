import React, { Component } from 'react'
import CheckBoxGroup from './index';
import { getAllStudents } from '../../services/getStudents'
export default class Test extends Component {
    state = {
        datas: [],
        choose: []
    }
    async componentDidMount() {
        const students = await getAllStudents();
        // console.log(students)
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
            choose: val
        },()=>{console.log(this.state.choose,name,e)})
    }

    render() {
        return (
            <div>
                <CheckBoxGroup name="prefer" {...this.state} changeChoise={this.changeChoise} />
            </div>
        )
    }
}
