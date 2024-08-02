import React, {Component} from 'react';
import {store} from '../store';
import {addNumberAction} from '../store/actionCreator';

class Avout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...(store.getState())
    }
  }


  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...this.state,
        ...store.getState()
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick(v) {
    store.dispatch(addNumberAction(v));
  }

  render() {
    const { count } = this.state;
    return (
        <div>
          { count }
          <button onClick={() => this.handleClick(1)}>1</button>
        </div>
    );
  }
}

export default Avout;
