import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                从父组件传值：{this.props.ChildName}
            </div>
        )
    }
}
