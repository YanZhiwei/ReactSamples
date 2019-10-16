import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return <h1>{(this.props.temperature >= 100 ? '水已经沸了' : '水未开...')}</h1>
    }
}
