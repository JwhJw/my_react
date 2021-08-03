import React from 'react'

export default function withLog(Comp, str) {
    class LogWrapper extends React.Component {
        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了`, Date.now())
        }
        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}被销毁了`, Date.now())
        }

        render() {
            //接收到forwardRef并且传递给Comp，这里的Comp是被withLogin包装过的高阶组件，所以forwardRef传递给了widthLogin组件中
            const {forwardRef,...rest} = this.props
            return (
                <>
                    <h1>{str}</h1>
                    <Comp {...rest} ref={forwardRef} />
                </>
            )
        }
    }
    return React.forwardRef((props, ref) => {   //接收到来自App的ref，并且传递给LogWrapper的forwardRef
        return <LogWrapper {...props} forwardRef={ref} />
    })
}
