import React, { Component } from 'react'
import Title from './Title'
import InputTemperature from './InputTemperature';
export default class FormSample extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            temperature: 0,
            type: ''
        })
    }
    toConvert(temperature, type) {
        if (type == 'C')
            return (temperature - 32) * 5 / 9
        else
            return (temperature * 9 / 5) + 32
    }
    changeState(type) {
        let temperature = window.event.target.value
        this.setState({ 'temperature': temperature, 'type': type })
    }
    render() {
        let temperature_C = this.state.type == 'F' ? this.toConvert(this.state.temperature, 'C') : this.state.temperature
        let temperature_F = this.state.type == 'C' ? this.toConvert(this.state.temperature, 'F') : this.state.temperature

        return (
            <div>
                <Title temperature={temperature_C} />
                <InputTemperature type="C"
                    temperature={temperature_C}
                    changeState={this.changeState.bind(this, 'C')} />

                <InputTemperature type="F"
                    temperature={temperature_F}
                    changeState={this.changeState.bind(this, 'F')} />
            </div>
        )
    }
}
