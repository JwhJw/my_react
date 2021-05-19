import React, { Component } from 'react'
import Modal from './Modal'
export default class Test extends Component {
    state = {
        isShowModal: false,
        bg:"rgba(200,0,0,.3)"
    }
    showModal = () => {
        this.setState({
            isShowModal: true
        })
    }
    hideModal = () => {
        // console.log(e.target)
        this.setState({
            isShowModal: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.isShowModal ?
                        (<Modal onClose={this.hideModal} >
                            <div>This is a modal</div>
                            <div onClick={this.hideModal}>×</div>
                        </Modal>) : null
                }
                <div onClick={this.showModal}>show modal</div>
            </div>
        )
    }
}

