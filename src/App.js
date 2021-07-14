import React from 'react'
import { A, B } from './components/Comp'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

let ALog = withLog(withLogin(A));
let BLog = withLog(withLogin(B));
export default function App() {
    return (
        <>
            <ALog a={10} isLogin />
            <BLog b={20} />
        </>
    )
}