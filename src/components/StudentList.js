import React, { Component } from 'react';
import Student from "./Student"

class StudentList extends Component {
    render() {
        const studentList = this.props.students.map((item, index) => <Student {...item} key={index} />)
        return (
            <ul>
                {studentList}
            </ul>
        );
    }
}

export default StudentList;
