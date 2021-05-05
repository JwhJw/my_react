import React, { Component } from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number
        }
        const timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1
            })
            if (this.state.number === 0) {
                this.props.onOver &&this.props.onOver()
                clearInterval(timer);
            }
        }, 1000);
    }


    render() {
        
        return (
            <div>
                倒计时{this.state.number}
            </div>
        );
    }
}

export default Tick;