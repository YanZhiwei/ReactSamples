import React, { Component } from 'react';
interface PersonProps {
    name: string;
    age?: number
}
class HelloWorld2 extends Component<PersonProps, object> {
    render() {
        const { name, age = 1 } = this.props;
        if (age < 0) {
            throw new Error('年龄必须大于0');
        }
        return (
            <div>
                姓名：{name} 年龄：{age};
            </div>
        );
    }
}

export default HelloWorld2;