import React, {Component} from 'react';
import NaviBar from './nav-bar/NaviBar';
import NavBarTwo from './nav-bar-two/NavBarTwo';

class App extends Component {
  render() {
    return (
        <div>
          <NaviBar>
            <button>left</button>
            <button>center</button>
            <button>right</button>
          </NaviBar>
          <NavBarTwo left={<h1>left</h1>} center={<h1>center</h1>} right={<h1>right</h1>}/>
        </div>
    );
  }
}

export default App;
