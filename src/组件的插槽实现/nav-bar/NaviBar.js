import React, {Component} from 'react';
import "./style.css"

class NaviBar extends Component {
  render() {
    const { children } = this.props
    return (
        <div className="content">
          <div className="left">{ children[0] }</div>
          <div className="center">{ children[1] }</div>
          <div className="right">{ children[2] }</div>
        </div>
    );
  }
}

NaviBar.propTypes = {

};


export default NaviBar;
