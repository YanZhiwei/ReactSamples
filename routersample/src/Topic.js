import React, { Component } from 'react'

export default class Topic extends Component {
    render() {
        return (
            <div>
                <h3>参数: {this.props.match.params.topicId}</h3>
            </div>
        )
    }
}
