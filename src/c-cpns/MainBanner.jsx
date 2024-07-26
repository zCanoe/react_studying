import {Component} from 'react';
import propTypes from "prop-types";

export class MainBanner extends Component {
  render() {
    const { title, banner } = this.props
    const cb = (item,index) => <li key={index}>{item}</li>;
    return (
        <div>
          <h2>{ title }</h2>
          <ul>
            { banner.map(cb) }
          </ul>
        </div>
    );
  }
}

MainBanner.propTypes = {
  banner: propTypes.array.isRequired,
  title: propTypes.string
}

MainBanner.defaultProps = {
  banner: [],
  title: "默尔"
}
