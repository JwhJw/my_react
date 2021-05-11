import React, { Component } from 'react'
import Page from './Page'
import StudentList from './StudentList'
import Modal from "./Modal"


export default class PageTest extends Component {
    state = {
        currentPage: 1,
        total: '',
        limit: 4,
        pannelNumber: 5,
        students: [],
        isLoading:false
    }
    constructor(props) {
        super(props);
        // this.fetchAllStudent()
        this.fetchStudent()
    }
    async fetchStudent() {
        this.setState({
            isLoading:true
        })
        const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=jwhjwh_1585643726753&page=${this.state.currentPage}&size=${this.state.limit}`)
        .then(resp => resp.json())
        .then(resp => resp.data)
        console.log('xxx', resp.findByPage)
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            isLoading:false
        })
    }
    handleChangePage = (target) => {
        this.setState({
            currentPage: target
        })
        this.fetchStudent()
    }
    render() {
        return (
            <div>
                <StudentList stus={this.state.students} />
                <Page {...this.state} handleChangePage={this.handleChangePage} />
                <Modal show={this.state.isLoading} />
            </div>
        )
    }
}
