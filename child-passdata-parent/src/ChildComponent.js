import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { textString: new Date().toLocaleString() }
        this.textChange = this.textChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);

    }

    textChange = (event) => {
        this.setState({ textString: event.target.value });
    }

    buttonClick = () => {
        this.props.sendData(this.state.textString);
    }
    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.textChange} value={this.state.textString}>
                </input>
                <button onClick={this.buttonClick} value='点击'>点击</button>
            </div>
        )
    }
}
