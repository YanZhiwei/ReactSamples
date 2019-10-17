import React, { Component } from 'react'

export default class ThermometerSample2 extends Component {
    render() {
        return (
            <div>
                <span>目前输入的温度：{this.props.temperature}度{this.props.type}</span>
                <br />
                <input name='txtTemperature'
                    value={this.props.temperature}
                    onChange={this.props.temperatureChange} />度{this.props.type}
            </div >
        )
    }
}
