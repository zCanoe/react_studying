import React, {Component} from 'react';
import {createPortal} from 'react-dom';

class Model extends Component {
  render() {
    return createPortal(this.props.children, document.querySelector("#model"))
  }
}

export default Model;
