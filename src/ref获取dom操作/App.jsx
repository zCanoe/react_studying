import React, {Component, createRef} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined
    }

     this.title = createRef()
    this.titleEl = undefined
  }

  getNative() {
    console.log(this.refs);
    console.log(this.title);
    console.log(this.titleEl);
  }

  render() {
    return (
        <div>
          <h2 ref="title">a</h2>
          <h2 ref={this.title}>b</h2>
          <h2 ref={(e) => this.titleEl = e}></h2>
          <button onClick={() => this.getNative()}>获取dom</button>
        </div>
    );
  }
}

export default App;
