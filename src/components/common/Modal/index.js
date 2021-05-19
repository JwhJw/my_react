import React from 'react'
import './index.css'
export default function Modal(props) {
    let defaultProps = {
        bg:"rgba(0,200,0,.3)"
    }
    let datas = Object.assign({},defaultProps,props)
    // console.log(datas)

    return (
        <div className='modal' onClick={(e)=>{
            if (e.target.className=="modal") {
                datas.onClose()
            }
        }}
        style={{backgroundColor:datas.bg}}>
            <div className="modal-content ">
                {props.children}
            </div>
        </div>
    )
}
