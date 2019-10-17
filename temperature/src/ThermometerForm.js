import React, { Component } from 'react'
import Title from './Title';
import ThermometerSample2 from './ThermometerSample2';

export default class ThermometerForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            temperature: 0,
            type: ''
        });
       this.changeTemperature = this.changeTemperature.bind(this);
    }
    toConvert = (temperature, type) => {
        if (type == 'C')
            return (temperature - 32) * 5 / 9
        else
            return (temperature * 9 / 5) + 32
    }
    changeTemperature = (type, event) => {
        let temperature = event.target.value;
        this.setState({ 'temperature': temperature, 'type': type })
    }
    render() {
        let temperature_C = this.state.type == 'F' ? this.toConvert(this.state.temperature, 'C') : this.state.temperature;
        let temperature_F = this.state.type == 'C' ? this.toConvert(this.state.temperature, 'F') : this.state.temperature;
        return (
            <div>
                <Title temperature={temperature_C}></Title>
                <ThermometerSample2 type='F'
                    temperatureChange={this.changeTemperature.bind(this, 'F')}
                    temperature={temperature_F} />
                <ThermometerSample2 type='C'
                    temperatureChange={this.changeTemperature.bind(this, 'C')}
                    temperature={temperature_C} />

            </div>
        )
    }
}
