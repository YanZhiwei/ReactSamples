import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'//npm install react-router-dom
import About from './About';
import Home from './Home';
export default class RouterSample1 extends Component {
    //Route的props path为路径，component为路径对应的页面
    //exact属性表示精确匹配
    //Switch表示只渲染第一个与当前地址匹配的<Route>
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }

}
