import React, {Component} from 'react';
import with_theme from '../hoc/with_theme';

class Product extends Component {
  render() {
    return (
        <div>
          color{ this.props.color }
        </div>
    );
  }
}

export default with_theme(Product);
