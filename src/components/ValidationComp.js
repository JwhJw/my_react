import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class A {

}
export class B extends A {

}
export default class ValidationComp extends Component {
    static defaultProps = {
        b: true,
        d: <div>It is a div</div>
    }
    static propTypes = {
        a: PropTypes.number.isRequired,             //要求a必须是数字，并且为必填项
        b: PropTypes.bool.isRequired,               //要求b必须是布尔值，并且为必填项
        handleClick: PropTypes.func,                //要求onClick必须为函数
        c: PropTypes.any,                           //可以要求必填，可以为任意类型
        d: PropTypes.node,                          //要求d必须为可以渲染的内容，可以是字符串，数字，react元素 ⚠️布尔值不能被渲染
        e: PropTypes.element,                       //要求e必须为react元素
        F: PropTypes.elementType,                   //要求F必须为组件类型
        g: PropTypes.instanceOf(A),                 //要求g必须是A的组件实例
        sex: PropTypes.oneOf(['male', 'female']),   //要求属性必须为数组中的一个
        h: PropTypes.arrayOf(PropTypes.number),     //要求每一个属性都必须是数字
        j: PropTypes.shape({                        //要求属性必须满足该对象要求    
            name: PropTypes.string.isRequired,      //要修name必须是字符串且必填
            age: PropTypes.number
        }),
        k: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),    //要求必须满足数组条件之一
        score: function (props, propName, componentName) {
            console.log(props[propName], componentName)
            const val = props[propName];
            if (val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`);
            }
            if (typeof val !== 'number') {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`);
            }
            if (val > 100 || val < 0) {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} must is between 0 and 100`);
            }
        }
    }
    render() {
        return (
            <div style={{ width: "100px", height: "100px", backgroundColor: "red" }} onClick={this.props.handleClick}>
                {this.props.d}
            </div>
        )
    }
}
