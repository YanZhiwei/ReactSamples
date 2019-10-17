import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';//npm install redux --S
// redux的原始state
const triger = 10000;
//这是action
const increase = {
    type: '涨工资'
}
const decrease = {
    type: '扣工资'
}

const reducer = (state = triger, action) => {
    switch (action.type) {
        case '涨工资':
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return state;
    }
}

//创建store
const store = createStore(reducer);
//订阅事件
store.subscribe(() => {
    console.log("store.subscribe:" + store.getState())
});
//派发事件
store.dispatch(increase);
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById('root'));


// action：行为 它是一个对象 里面必有type来指定其类型 这个类型可以理解为你要做什么，reducer要根据action的type来返回不同的state 每个项目有且可以有多个action
// reducer： 可以理解为一个专门处理state的工厂 给他一个旧数据它会根据不同action.type返回新的数据 也就是：旧state + action = 新state 每个项目有且可以有多个reducer
// store： store本质上是一个状态树，保存了所有对象的状态。任何UI组件都能直接的从store访问特定对象的状态。每个项目有且只能有一个store

serviceWorker.unregister();
