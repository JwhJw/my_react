import React, { Component } from 'react'
import NumberForm from './NumberForm'
export default class Form extends Component {
    state = {
        userName: '',
        password: '',
        sex: '',
        prefer: [
            { value: 'guitar', text: '吉他' },
            { value: 'baseball', text: '棒球' },
            { value: 'football', text: '足球' },
        ],
        preferChoose: []
    }
    handleChange = (chooseArr) => {
        return (e) => {
            let name = e.target.name;
            let val = e.target.value;
            if (e.target.type === "checkbox") {
                if (e.target.checked) {
                    val = [...chooseArr, val]
                    // console.log(val)
                } else {
                    val = chooseArr.filter(item => item !== val)
                }
            }
            this.setState({
                [name]: val
            })
        }
    }
    getCheckBox = (choiseArr, chooseArr, name) => {
        // console.log(choiseArr)
        return choiseArr.map((item, index) => <label key={index}><input type="checkbox" name={name} value={item.value} checked={chooseArr.includes(item.value)} onChange={this.handleChange(chooseArr)} />{item.text}</label>)
    }
    render() {
        const checkbox = this.getCheckBox(this.state.prefer, this.state.preferChoose, 'preferChoose')
        return (
            <div>
                <p>
                    <input type="text" value={this.state.userName} name='userName' onChange={this.handleChange()} placeholder="请输入用户名" />
                </p>
                <p>
                    <input type="password" name="password" value={this.state.password} placeholder="请输入密码" onChange={this.handleChange()} />
                </p>
                <label>
                    <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange()} />male
                </label>
                <label>
                    <input type="radio" name="sex" value="female" checked={this.state.sex === 'female'} onChange={this.handleChange()} />female
                </label>
                <NumberForm />
                <p>
                    {checkbox}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>getForm</button>
                </p>
            </div>
        )
    }
}
