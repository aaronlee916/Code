import React, { Component, Fragment } from "react"
import { Avatar } from 'antd'
import './userInfo.css'
import pic from './images/IMG_0520.PNG'
class UserInfo extends Component {
    render() {
        return (
            <Fragment>
                <Avatar className="avatar" size={256} src={pic} />
                <div>test</div>
            </Fragment>
        )
    }
}
export default UserInfo