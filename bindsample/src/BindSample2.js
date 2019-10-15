import React, { Component } from 'react'

export default class BindSample2 extends Component {
    render() {
        return (
            <div>
                <button value='点击 from bindsample2' onClick={this.buttonClick('hello world.')}>点击</button>
            </div>
        )
    }
    buttonClick = (param) => {
        return (event) => {
            console.log('value:' + event.target.value);
            console.log('param:' + param);
        }
    }
}
