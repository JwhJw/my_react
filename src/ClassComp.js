import React from 'react'
export default class ClassComp extends React.Component {
    render(){
        return <div>这是第{this.props.number}个类组件</div>
    }
}