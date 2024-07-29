import React, {Component} from 'react';
import "../nav-bar/style.css"

class NavBarTwo extends Component {
  render() {
    const { left, center, right } = this.props
    return (
        <div className="content">
          <div className="left">{ left }</div>
          <div className="center">{ center }</div>
          <div className="right">{ right }</div>
        </div>
    );
  }
}

export default NavBarTwo;
