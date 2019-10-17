import * as React from 'react';
export interface ICounter {
    value: number
}
const Counter = ({ value }: ICounter) => {
    return <p>Clicked: {value} times</p>
}
export default Counter;