import React, { Component } from 'react';

class Tick extends Component {
    //组件初始化
    state = {
        left:this.props.num
    }
    constructor(props) {
        super(props)
        //组件状态初始化
        // this.state = {
        //     left: this.props.num
        // }
        this.timer = setInterval(() => {
            this.setState({
                left: this.state.left - 1
            })
            if (this.state.left === 0) {
                clearInterval(this.timer)
                return;
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.left}
            </div>
        );
    }
}

export default Tick;