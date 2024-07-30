import React, {Component, PureComponent} from 'react';
import Home from './Home';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msg: "a"
    }
  }

  render() {
    console.log("App rerender");
    const { msg } = this.state;
    return (
        <div>
          <button onClick={() => this.setState({ msg: "b" })}>change</button>
          <Home msg={ msg }></Home>
        </div>
    );
  }
}

export default App;
