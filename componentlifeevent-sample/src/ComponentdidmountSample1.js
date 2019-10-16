import React, { Component } from 'react'

export default class ComponentdidmountSample1 extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    }
    // cdm 组件执行完后触发
    componentDidMount() {
        setInterval(this.updateTime, 1000);
    }
    updateTime = () => {
        this.setState({ time: new Date().toLocaleTimeString() })
    }
    render() {
        return (
            <div>
                <h1>当前时间：{this.state.time}</h1>
            </div>
        )
    }
}
