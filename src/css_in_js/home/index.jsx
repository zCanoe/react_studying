import React, {Component} from 'react';
import HomeWrapper, {SelfButton} from './sty';

class Index extends Component {
  render() {
    return (
        <HomeWrapper>
          <div className="top">
            <div className="banner">BannerContent</div>
            <div className="bottom">
              <div className="header">商品列表</div>
              <ul className="product-list">
                <li className="item">1</li>
                <li className="item">2</li>
                <li className="item">3</li>
              </ul>
            </div>
          </div>

         <SelfButton>aa</SelfButton>

        </HomeWrapper>
    );
  }
}

export default Index;
