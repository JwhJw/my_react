import React, { Component } from 'react'
import leftArrowSrc from '../img/arrow-left-bold.png'
import rightArrowSrc from '../img/arrow-right-bold.png'
import PropTypes from 'prop-types'
import './index.css'

export default class ArrowContainer extends Component {
    static propTypes = {
        handleChange: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="arrow-container">
                <img className="arrow left"
                    onClick={() => {
                        this.props.handleChange && this.props.handleChange('left')
                    }}
                    src={leftArrowSrc} alt="" />
                <img className='arrow right'
                    onClick={() => {
                        this.props.handleChange && this.props.handleChange('right')
                    }}
                    src={rightArrowSrc} alt="" />
            </div>
        )
    }
}
