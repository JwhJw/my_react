import React from 'react'
import { A, B } from './components/Comp'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

let ALog = withLogin(withLog(A, 'abc'));
let BLog = withLogin(withLog(B, 'abc'));

//ref转发过程的注释是根据这个传递顺序
// let ALog = withLog(withLogin(A), 'abc');
// let BLog = withLog(withLogin(B), 'abc');
export default class App extends React.Component {
    //创建一个ref
    myRef = React.createRef()
    anotherRef = React.createRef()
    componentDidMount() {
        console.log(this.myRef)
    }
    render() {
        return (
            <>
                <BLog b={2} isLogin ref={this.myRef}/>
                <ALog a={1} isLogin ref={this.myRef} />
            </>
        )
    }
}
