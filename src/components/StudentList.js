import React from 'react'
import Student from "./Student"

export default function StudentList(props) {
    console.log(props)
    const studentList = props.stus.map(item => <Student key={item.id} {...item} />)
    return (
        <div>
            {studentList}
        </div>
    )
}

