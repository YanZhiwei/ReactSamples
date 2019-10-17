import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';//npm install redux --S
import reducer from './App.Reducer'
const store = createStore(reducer);
ReactDOM.render(
    //Provider:作用是把state传给它的所有子组件，也就是说 当你用Provider传入数据后 ，下面的所有子组件都可以共享数据，十分的方便。
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
