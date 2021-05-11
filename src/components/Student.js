import React from 'react'

export default function Student({ name,sex }) {
    // console.log(props)
    return (
        <div>
            【姓名】:{name}
            【性别】:{sex === 0 ? '男' : '女'}
        </div>
    )
}

