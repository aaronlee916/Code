import React, { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./todoItem";
import {Input,Button} from 'antd'

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment style={{float:'left'}}>
                <div><Input class="input" style={{width:'500px'}}value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /><Button onClick={this.handleBtnClick.bind(this)} type="primary">提交</Button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default Todolist