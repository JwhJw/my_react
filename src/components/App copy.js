import React, { Component } from 'react'
import OldLifeCircle from './OldLifeCircle'

export default class App extends Component {
    state = {
        number: 0,
        isShow: true
    }
    render() {
        const cmp = this.state.isShow ? <OldLifeCircle number={this.state.number} /> : null;
        return (
            <div>
                {cmp}
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>父组件按钮n+1</button>
                <button onClick={()=>{
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}>hidden/show</button>
            </div>
        )
    }
}
