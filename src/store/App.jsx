import React, {Component, PureComponent} from 'react';
import Avout from './pages/Avout';
import Home from './pages/Home';

class App extends PureComponent {
  render() {
    return (
        <div>
            {/*手动实现*/}
            <Avout />

            <Home />
        </div>
    );
  }
}

export default App;
