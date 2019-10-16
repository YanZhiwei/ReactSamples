import React, { Component } from 'react'

export default class IfSample1 extends Component {
    constructor(props) {
        super(props);
        this.state = { gender: 'M' }
    }
    changeGender = (event) => {
        this.setState({ gender: event.target.value });
    }
    render() {
        let title = this.state.gender == 'M' ? "先生" : "女士";
        return (
            <div>
                <h2>{title}</h2>
                <div>
                    <select onChange={this.changeGender.bind(this)}>
                        <option value="M">男</option>
                        <option value="W">女</option>
                    </select>
                </div>
            </div>
        )
    }
}
