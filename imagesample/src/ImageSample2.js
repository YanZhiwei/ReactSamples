import React, { Component } from 'react'

export default class ImageSample2 extends Component {
    render() {
        return (
            <img src={require('./images/cat.jpg')} alt='' />
        )
    }
}
