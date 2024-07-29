import {Component} from 'react';
import "./index.css";
export class TabControl extends Component {
  constructor(p) {
    super(p);
    this.state = {
      currentIndex: 0
    }
  }

  handleClick(currentIndex) {
    this.setState({
      currentIndex
    })
    this.props.tabClick(currentIndex);
  }

  cb = (item, index) => {
    const { currentIndex } = this.state;
    return (
        <div key={index} onClick={() => this.handleClick(index)} className={ `item ${currentIndex === index ? 'active' : ''}`}>
          { item }
        </div>
    )
  }
  render() {
    const { titles } = this.props;
    return (
        <div>
          <div className="wrap">
            { titles.map(this.cb) }
          </div>
        </div>
    );
  }
}
