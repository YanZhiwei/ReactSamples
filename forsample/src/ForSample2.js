import React, { Component } from 'react'

export default class ForSample2 extends Component {
    render() {
        let lists = ['中国', '湖南', '株洲', '石峰区', '田心'];
        let array = [];
        lists.forEach(element => {
            array.push(<li>{element}</li>);
        });
        return (
            <div>
                <ul>
                    {array}
                </ul>
            </div>
        )
    }
}
