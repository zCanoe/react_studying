import {Component} from 'react';
import {TabControl} from './TabControl';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      titles: ['aa', 'bb', 'cc']
    }
  }

  changeTab(tabIndex) {
    this.setState({
      tabIndex
    })
  }

  render() {
    const { titles, tabIndex } = this.state;
    return (
        <div>
          <TabControl tabClick={(i) => this.changeTab(i)} titles={ titles }/>
          <h2>{ titles[tabIndex] }</h2>
        </div>
    );
  }
}
