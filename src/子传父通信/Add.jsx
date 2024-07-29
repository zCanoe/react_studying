import {Component} from 'react';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(count) {
    console.log("handle", count);
    this.props.countClick(count);
  }
  render() {
    return (
        <div>
          <button onClick={this.handleClick.bind(this, 1)}>+1</button>
          <button onClick={this.handleClick.bind(this, 5)}>+5</button>
          <button onClick={this.handleClick.bind(this, 10)}>+10</button>
        </div>
    );
  }
}
