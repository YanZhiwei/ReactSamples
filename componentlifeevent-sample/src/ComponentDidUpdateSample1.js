import React, { Component } from 'react'

export default class ComponentDidUpdateSample1 extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleString() }
    }
    //state被修改的时候触发
    componentDidUpdate(prevProps, prevState) {
        alert('prevState:' + prevState.time);
    }
    updateTime = () => {
        this.setState({ time: new Date().toLocaleString() });
    }
    render() {
        return (
            <div>
                <button onClick={this.updateTime}>update state</button>
            </div>
        )
    }
}
