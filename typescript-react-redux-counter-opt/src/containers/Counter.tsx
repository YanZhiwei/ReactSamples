import * as React from 'react';
import { increment, decrement, StoreState } from '../actions/actionCreator';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
export interface ICounterProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

class Counter extends React.Component<ICounterProps> {
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

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => ({
    value: state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)