import React, { Component } from 'react'
import Title from './Title';

export default class ThermometerSample1 extends Component {
    constructor(props) {
        super(props);
        this.state = ({ temperature: 0 })
    }
    changeTemperature = (event) => {
        let temperature = event.target.value;
        this.setState({ [event.target.name]: temperature });
    }
    render() {
        return (
            <div>
                <Title temperature={this.state.temperature}></Title>
                <span>目前摄氏温度：{this.state.temperature}</span>
                <br />
                <input name='temperature' value={this.state.temperature}
                    onChange={this.changeTemperature} />
            </div>
        )
    }
}
