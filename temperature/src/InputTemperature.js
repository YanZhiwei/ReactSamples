import React, { Component } from 'react'

export default class InputTemperature extends Component {
    render() {
        return (
            <div>
                <span>目前温度：{this.props.temperature}度{this.props.type}</span><br />
                <input name="temperature"
                    value={this.props.temperature}
                    onChange={this.props.changeState} />度{this.props.type}
            </div>
        )
    }
}
