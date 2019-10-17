import React, { Component } from 'react'
import Message from './Message';

export default class MessageBlock extends Component {
    render() {
        let message = this.props.messageData.map((item, index) => {
            if (item.name.indexOf(this.props.searchName) != -1) {
                return <Message
                    name={item.name}
                    message={item.message}></Message>
            }
        });
        return (
            <div>
                {message}
            </div>
        )
    }
}
