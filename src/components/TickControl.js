import React, { Component } from 'react';
import Tick from './Tick';
class TickControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false
        }
    }
    handleOver = () => {
        this.setState({
            isOver: true
        })
    }
    render() {
        let status = '正在倒计时'
        if (this.state.isOver) {
            status = '倒计时完成';
        }
        return (
            <div>
                <Tick number={10} onOver={this.handleOver} />
                {status}
            </div>

        );
    }
}

export default TickControl;