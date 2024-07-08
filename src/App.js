import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    console.log("构造函数执行");
    this.state = {
      name: 'canoe'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps执行了");
    return {}
  }


  // 组件挂在完成时执行
  componentDidMount() {}


  handleClick=() => {
    this.setState({
      name: "canoe1"
    })
  }

  render() {
    console.log("render执行");
    return (
        <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.handleClick}>修改</button>
        </div>
  )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 返回值传递给didComponentUpdate钩子的snapshot参数
    // 应用场景：长列表渲染记住滚轮的原始位置，并传递给update。保证数据更新时滚轮在原始的位置
    console.log(prevProps, prevState);
    return "snap"
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
  }
}

export default App;
