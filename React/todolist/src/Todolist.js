import React, { Component, Fragment } from "react";
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
            <Fragment>
                <div><input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /><button>提交</button></div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <div>{item}</div>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue : e.target.value
        }) 
    }
}
export default Todolist