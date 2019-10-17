import React, { Component } from 'react'

export default class SearchBlock extends Component {
    render() {
        return (
            <div>
                <span>搜索留言人：</span>
                <input type='text'
                    value={this.props.searchName}
                    onChange={this.props.searchNameChange}></input>
            </div>
        )
    }
}
