import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class IndicatorDots extends Component {
    static propTypes = {
        dotsNum: PropTypes.number.isRequired,
        currentDot: PropTypes.number.isRequired,
        handleDot:PropTypes.func
    }
    render() {
        const spans = []
        for (let i = 0; i < this.props.dotsNum; i++) {
            spans.push(<span 
                className={this.props.currentDot === i ? 'dot active' : 'dot'} 
                key={i}
                onClick={()=>{
                    this.props.handleDot&&this.props.handleDot(i)
                }}
                ></span>)
        }
        return (
            <div className='indecator-dots'>
                {spans}
            </div>
        )
    }
}
