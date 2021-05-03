import React, { Component } from 'react';

class A extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 123
        };
        setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
        }, 1000);
    }
    render() {
        return (
            <B num={this.state.num}></B>
        );
    }
}

export default A;
function B(props) {
    return (<div> B:{props.num}
        <C num={props.num}></C>
    </div>)

}
function C(props) {
    return <div>
        C:{props.num}
    </div>
}