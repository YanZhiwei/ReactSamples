import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.temperature >= 100 ? '水开了.' : '水未开，还需要烧.'}</h1>
            </div>
        )
    }
}
