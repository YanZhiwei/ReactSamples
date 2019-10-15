import React, { Component } from 'react'

export default class BindSample1 extends Component {
    render() {
        return (
            <div>
                <button value='点击 from bindsample1' onClick={this.buttonClick.bind(this, 'hello world.')}>点击</button>
            </div>
        )
    }
    buttonClick(param, event) {
        console.log('param:' + param);
        console.log('value:' + event.target.value);
    }
}
