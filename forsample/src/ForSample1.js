import React, { Component } from 'react'

export default class ForSample1 extends Component {

    render() {
        let lists = [<li>中国</li>, <li>湖南</li>, <li>株洲</li>, <li>石峰区</li>];
        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}
