import * as React from 'react';

export interface ICounterSample2Props {
    value: number
}

export default class CounterSample2 extends React.PureComponent<ICounterSample2Props> {
    public render() {
        return (
            <div>
                <p>点击:{this.props.value} </p>
            </div>
        );
    }
}
