import React, { Component } from 'react'

export default class BindSample3 extends Component {
    render() {
        return (
            <div>
                <button value='点击 from bindSample3' onClick={(event) => this.buttonClick('hello world', event)} >点击</button>
            </div>
        )
    }
    buttonClick(param, event) {
        console.log('param:' + param);
        console.log('value:' + event.target.value);
    }
}
