import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './ImgContainer'
import ArrowContainer from './ArrowContainer'
import IndicatorDots from './IndicatorDots'

export default class Banner extends Component {
    static defaultProps = {
        width: 520,              //轮播图容器宽度
        height: 280,             //轮播图容器宽度
        imgSrcs: [],             //图片路径
        autoPlay: true,          //是否自动播放，默认是
        indicatorDots: false,   //是否显示面板指示点，默认否
        duration: 500,           //滑动动画时常
        interval: 1000,          //自动切换时间间隔
        circular: false,         //是否采用衔接滑动，默认为false
    }
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        autoPlay: PropTypes.bool.isRequired,
        indicatorDots: PropTypes.bool.isRequired,
        duration: PropTypes.number.isRequired,
        interval: PropTypes.number.isRequired,
        circular: PropTypes.bool.isRequired
    }
    state = {
        currentIndex: 0, //当前显示的第几张图片
    }
    //箭头点击事件
    handleChange = (direction) => {
        let cur = this.state.currentIndex
        if (direction === 'left') {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1;
            }
            this.changeImg(cur)
        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
            this.changeImg(cur)
        }
    }
    //图片切换
    changeImg(cur) {
        this.setState({
            currentIndex: cur
        })
        this.imgContainer.switchTo(cur)
    }
    //获得ImgContainer组件
    imgContainerRef = (el) => {
        this.imgContainer = el;
        // console.log(this.imgContainer.switchTo);
    }
    //indicator点击事件
    handleDot = (index) => {
        this.changeImg(index)
    }
    //自动播放
    timer = null;
    autoPlay = () => {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let cur = (this.state.currentIndex + 1) % this.props.imgSrcs.length;
            this.changeImg(cur);
        }, this.props.interval);
    }
    autoPlayPause = () => {
        clearInterval(this.timer)
    }
    autoPlayGoOn=()=>{
        this.autoPlay()
    }
    componentDidMount() {
        this.autoPlay()
    }
    render() {
        return (
            <div
                className="banner-wrapper"
                style={{
                    width: this.props.width,
                    height: this.props.height
                }}
                onMouseEnter={this.autoPlayPause}
                onMouseLeave={this.autoPlayGoOn}
            >
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                />
                <ArrowContainer handleChange={this.handleChange} />
                <IndicatorDots dotsNum={this.props.imgSrcs.length} currentDot={this.state.currentIndex} handleDot={this.handleDot} />
            </div>
        )
    }
}
