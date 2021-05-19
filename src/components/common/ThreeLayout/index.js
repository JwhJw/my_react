import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
    const defaultPorps = {
        minWidth: 800,
        leftWidth: 100,
        rightWidth: 100
    }
    const datas = Object.assign({}, defaultPorps, props)
    return (
        <div className="three-layout" style={{
            minWidth: datas.minWidth
        }}>
            <div className="main">
                {datas.children}
            </div>
            <div className="aside-left" style={{ width: datas.leftWidth }}>
                {datas.leftContent}
            </div>
            <div className="aside-right" style={{ width: datas.rightWidth }}>
                {datas.rightContent}
            </div>
        </div>
    )
}
