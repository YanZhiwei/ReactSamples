import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'//npm install react-router-dom
import Topic from './Topic';
import NoMatch from './NoMatch';
export default class RouterSample2 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/topics/rendering">Rendering with React</Link>
                        </li>
                        <li>
                            <Link to="/topics/components">Components</Link>
                        </li>
                        <li>
                            <Link to="/topics/props-v-state">Props v. State</Link>
                        </li>
                        <li>
                            <Link to="/also/will/not/match">路由请求</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/topics/:topicId" component={Topic} />
                        {/* 都没命中 */}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        )

    }
}
