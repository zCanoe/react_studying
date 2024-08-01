import React, {Component} from 'react';
import AppWrapper from './style';
import Home from './home';
class App extends Component {
  render() {
    return (
        <AppWrapper color="green">
          <div className="section">
            <h2 className="title">title</h2>
            <p className="content">content</p>
          </div>

          <div className="footer">
            <p>pronounce</p>
            <p>pronounce</p>
          </div>

          <Home />
        </AppWrapper>
    );
  }
}

export default App;
