import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNumberAction} from '../store/actionCreator';

class Home extends Component {

  handleClick(v) {

  }
  render() {
    const { count, addNumber } = this.props
    return (
        <div>
          { count }
          <button onClick={() => addNumber(1)}>1</button>
        </div>
    );
  }
}

export default connect((state) => ({
  count: state.count
}), (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
}))(Home);
