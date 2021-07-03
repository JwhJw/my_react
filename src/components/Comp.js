//函数创建ref
import React, { Component } from 'react'
class Comp extends Component {
    state = {
        isShow: true
    }
    handleClick = () => {
        // console.log(this.txt)
        this.setState({
            isShow: !this.state.isShow
        })
    }
    getTxt = el => {
        console.log('函数被调用了', el);
        this.txt = el;
    }
    render() {
        return (
            <>
                {this.state.isShow && <input ref={this.getTxt} type="text" />}
                <button onClick={this.handleClick}>show or hidden</button>
            </>
        )
    }
}
export default Comp;