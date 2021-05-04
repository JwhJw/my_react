import React, { Component } from 'react';
import "../index.css"

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: this.props.left || 0,
            top: this.props.top || 0,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed
        }
        const duration = 15;
        const timer = setInterval(() => {
            let newLeft = this.state.left - this.state.xSpeed * duration / 1000;
            let newTop = this.state.top - this.state.ySpeed * duration / 1000;
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration);
    }
    render() {

        return (
            <div className={this.props.className} style={{ top: this.state.top, left: this.state.left, backgroundColor: this.props.bg || 'red' }}>

            </div>
        );
    }
}

export default Ball;