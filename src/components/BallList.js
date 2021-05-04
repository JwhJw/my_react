import React, { Component } from 'react';
import Ball from './Ball'
import {getRandom} from '../util'
class BallList extends Component {
    constructor(props) {
        super(props);
        this.state={
            ballList:[]
        }
        const timer = setInterval(() => {
            const ball = {
                left: getRandom(0,document.documentElement.clientWidth-100),
                top:getRandom(0,document.documentElement.clientHeight-100),
                xSpeed:getRandom(50,200),
                ySpeed:getRandom(20,400),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`,
                className:'ball'
            }
            this.setState({
                ballList:[...this.state.ballList,ball]
            })
            if (this.state.ballList.length === 10) {
                clearInterval(timer)
            }
        }, 1000);
    }
    render() {
        const balls = this.state.ballList.map((item,index)=><Ball key={index} {...item}/>)
        return (
            <>
                {balls}
            </>
        );
    }
}

export default BallList;