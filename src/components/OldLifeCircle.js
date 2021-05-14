import React, { Component } from 'react'

export default class OldLifeCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
        }
        console.log('一个新组件诞生了');
    }

    componentWillMount() {
        console.log('componentWillMount,组件即将被挂载');
    }
    componentDidMount() {
        this.setState({
            n: 1
        })
        console.log('componentDidMount,组件完成挂载');
    }
    componentWillReceiveProps(nextProps) {
        // console.log(this.props)
        console.log('componentWillReceiveProps,接收到新的属性值', this.props, nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate,组件是否更新', this.props, nextProps, this.state, nextState)
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate,组件即将更新', this.props, nextProps, this.state, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate,组件已完成更新', this.props, prevProps, this.state, prevState)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount,组件即将被销毁')
    }



    render() {
        console.log('render')
        return (
            <div>
                <h1> 旧版生命周期</h1>
                <p>属性number:{this.props.number}</p>
                <p>状态n:{this.state.n}</p>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>n+1</button>
            </div>
        )
    }
}
