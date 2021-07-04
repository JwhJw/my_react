import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {
    static propsType = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }
    state = {
        imgNum: this.props.imgSrcs.length
    }
    //计时器时间
    tick = 16;
    //计时器序号
    timer = null;
    switchTo(index) {
        if (index < 0) {
            index = 0
        } else if (index > this.state.imgNum) {
            index = this.state.imgNum
        }
        //目标位置
        const targetLeft = -index * this.props.imgWidth;

        //当前位置
        let currentLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        //运动的次数
        const times = Math.ceil(this.props.duration / this.tick)
        //当前运动次数
        let currentTime = 0;
        //每次移动的距离
        const eachStep = (targetLeft - currentLeft) / times;
        let lock = true;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            currentTime++;
            currentLeft += eachStep;
            this.div.style.marginLeft = currentLeft + 'px'
            if (currentTime === times) {
                this.div.style.marginLeft = targetLeft + 'px';
                clearInterval(this.timer);
            }
        }, this.tick);
    }
    containerRef = (el) => {
        this.div = el;
    }
    render() {
        const img = this.props.imgSrcs.map((item, index) =>
            <img
                src={item}
                key={index}
                alt={item}
                style={{
                    width: this.props.imgWidth,
                    height: this.props.imgHeight,
                    float: 'left'
                }}
            />
        )
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.state.imgNum * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {img}
            </div>
        )
    }
}
