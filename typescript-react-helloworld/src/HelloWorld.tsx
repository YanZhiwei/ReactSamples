import React, { Component } from 'react'
interface HelloProps {
    name: string,
    age: number
}
export default class HelloWorld extends Component<HelloProps, {}> {
    render() {
        return (
            <div>
                名字：{this.props.name},年龄：{this.props.age}岁
            </div>
        )
    }
}
