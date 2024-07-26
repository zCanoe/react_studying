import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello World"
    }
  }

  render() {
    const { msg } = this.state
    return (
        <div>
          { msg }
        </div>
    )
  }
}

export default App
