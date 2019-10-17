import React, { Component } from 'react'
import MessageBlock from './MessageBlock'
import SearchBlock from './SearchBlock'

export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({ searchName: 'q' });
    }
    searchNameChange = (event) => {
        let searchName = event.target.value;
        console.log('searchName:' + searchName);
        this.setState({ searchName: searchName });
    }
    render() {
        return (
            <div>
                <SearchBlock searchName={this.state.searchName} searchNameChange={this.searchNameChange} />
                <hr></hr>
                <MessageBlock messageData={this.props.messageData} searchName={this.state.searchName} />
            </div>
        )
    }
}
