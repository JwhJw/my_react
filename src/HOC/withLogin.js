import React from 'react'

export default function withLogin(Comp) {
    class LoginWrapper extends React.Component {
        render() {
            //将接收到的数据展开为forwardRef和其他数据，并且将forwardRef传递给Comp
            const { forwardRef, ...rest } = this.props
            if (this.props.isLogin) {
                return <Comp {...rest} ref={forwardRef} />
            }
            return null;
        }
    }
    return React.forwardRef((props, ref) => {
        //接收到来自withLog的props和ref，并且将ref传递给LoginWrapper
        return <LoginWrapper {...props} forwardRef={ref} />
    })
}
