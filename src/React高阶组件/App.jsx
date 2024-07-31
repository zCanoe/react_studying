import React, {Component, PureComponent} from 'react';
import ThemeContext from './context/context';
import Product from './pages/Product';

function enhanced(C) {
  class Com extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        name: "canoe",
        age: 18
      }
    }

    render() {
      return <C {...this.state} {...this.props}/>
    }
  }
  return Com
}

const Home = enhanced((props) => {
  return <h1>Home: Name{props.name} Age{props.age} {props.msg}</h1>
})

class App extends Component {
  render() {
    return (
        <div>
          <Home msg={"hello"}/>
          <ThemeContext.Provider value={{color: "red", size: "mini"}}>
            <Product />
          </ThemeContext.Provider>
        </div>
    );
  }
}

export default App;
