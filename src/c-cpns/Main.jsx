import {Component} from 'react';
import {MainBanner} from './MainBanner';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: []
    }
  }

  componentDidMount() {
    // 获取ajax数据
    setTimeout(() => {
        this.setState({
          banners: ['aaa', 'bb']
        })
    }, 3000)
  }

  render() {
    const { banners } = this.state;
    return (
        <div>
          <MainBanner banner={banners} />
        </div>
    );
  }
}

export default Main
