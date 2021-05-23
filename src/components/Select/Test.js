import React, { Component } from 'react'
import Select from './index'
import { getAllStudents } from '../../services/getStudents'

export default class Test extends Component {
    state = {
        choise: [],
        value: ''
    }
    async componentDidMount() {
        const choise = await getAllStudents();
        this.setState({
            choise: choise.map(item => {
                return {
                    value: item.id.toString(),
                    text: item.name
                }
            })
        }, () => { 
            // console.log(this.state.choise) 
        })
    }
    changeChoise=(val,name,e)=>{
        this.setState({
            value:val
        },()=>{
            console.log(this.state.value)
        })
    }
    render() {
        return (
            <div>
                <Select name="student" {...this.state} changeChoise={this.changeChoise}/>
            </div>
        )
    }
}
