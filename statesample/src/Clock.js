import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '2019-12-12.' }
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.data}</h2>
                <input type="text" name="firstname" value={this.state.data}/>
            </div>
        )
    }
}
