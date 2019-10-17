import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        let divStyle = { marginBottom: 20 }
        let messageStyle = { marginLeft: 20 }
        return (
            <div style={divStyle}>
                <div>{this.props.name}对大家说：</div>
                <div style={messageStyle}>{this.props.message}</div>
            </div>
        )
    }
}
