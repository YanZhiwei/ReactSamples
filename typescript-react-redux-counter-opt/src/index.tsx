import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterReducer from './reducers/CounterReducer';
import Counter from './containers/Counter';
// 1、创建 store
const store = createStore(CounterReducer);
ReactDOM.render(
    // 2、然后使用react-redux的Provider将props与容器连通起来
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
