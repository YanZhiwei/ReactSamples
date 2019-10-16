import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    getData = (data) => {
        alert(data);
        this.setState({ childData: data });
    }

    render() {
        return (
            <div>
                <ChildComponent sendData={this.getData}></ChildComponent>
            </div>
        )
    }
}
