import * as React from 'react';

// 创建类型接口
export interface IProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {
    public render() {
        const { value, onIncrement, onDecrement } = this.props;
        //等同于
        //const value=this.props.value;
        //const onIncrement=this.props.onIncrement;
        //const onDecrement=this.props.onDecrement;
        return (
            <p>
                Clicked: {value} times
                <br />
                <br />
                <button onClick={onIncrement} style={{ marginRight: 20 }}> +  </button>
                <button onClick={onDecrement}> - </button>
            </p>
        )
    }
}

