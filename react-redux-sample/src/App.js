import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    //const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>当月工资为{this.props.tiger}</h2>
        <button onClick={this.props.PayIncrease}>升职加薪</button>
        <button onClick={this.props.PayDecrease}>迟到罚款</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' })
  }
}
//connect:把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。
export default App = connect(mapStateToProps, mapDispatchToProps)(App)