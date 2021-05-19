import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'
export default function App() {
    return (
        <div>
            <ThreeLayout leftContent={<div>left</div>}
                rightContent={<div>right</div>}>
                <div>main</div>
            </ThreeLayout>
        </div>
    )
}
