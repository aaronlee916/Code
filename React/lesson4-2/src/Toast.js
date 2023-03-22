import React from 'react'
import propTypes from 'prop-types'
class Toast extends React.Component {
    render() {
        return (
            <div>Name:{this.props.name}Age:{this.props.age}Sex:{this.props.sex} </div>)
    }

}
Toast.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    sex:propTypes.string
}
export default Toast