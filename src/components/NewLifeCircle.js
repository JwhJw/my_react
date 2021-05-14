import React, { Component } from 'react'

export default class OldLifeCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
        }
        console.log('一个新组件诞生了');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate')
        return 111
    }
    componentDidUpdate(prevProps, prevState,snap) {
        console.log('componentDidUpdate',snap)
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
