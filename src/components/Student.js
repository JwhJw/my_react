import React from 'react'

export default function Student(props) {
    return (
        <li>
            【姓名】{props.name}
            【性别】{props.sex===0?'男':'女'}
            【电话】{props.phone}
            【邮箱】{props.email}
        </li>
    )
}

