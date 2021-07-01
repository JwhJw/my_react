import React from 'react'

export default function FunctionDefault(props) {
    return (
        <div>
            a:{props.a}
            b:{props.b}
        </div>
    )
}
FunctionDefault.defaultProps={
    a:10,
    b:20
}