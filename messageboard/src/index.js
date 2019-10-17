import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MessageForm from './MessageForm';
let data = [{ id: '1', name: '神Q', message: '嗨！大家好啊！' },
{ id: '2', name: '小馬', message: '早安啊！昨天有沒有好好發文？' },
{ id: '3', name: '王子', message: 'ㄛ！別說了，那真的超級累！' },
{ id: '4', name: '神Q', message: '哈哈哈！加油啦！再一下就結束了！' },
{ id: '5', name: '王子', message: '結束後我一定要爆睡一頓！' },]
ReactDOM.render(<MessageForm messageData={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
