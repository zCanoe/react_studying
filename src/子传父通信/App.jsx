import {Add} from './Add';
import {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  countClick(count) {
    console.log(count);
    this.setState({
      count: this.state.count + count
    })
  }

  render() {
    const { count } = this.state;
    return (
        <div>
          <h2>{ count }</h2>
          <Add countClick={(c) => this.countClick(c)}/>
        </div>
    )
  }
}

export default App
