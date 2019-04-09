import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { TweenMax } from 'gsap/TweenMax';
import './Item.css';

class Item extends Component {
  render() {
    const fadeInImg = () => {
      TweenMax.to(this.projectImg, 1, {
        autoAlpha: 1,
      });
    };

    return (
      <div className="item-container" ref={div => (this.projectImg = div)}>
        <LazyLoad height={260} offset={-100} once>
          <img
            onLoad={fadeInImg}
            src={require(`../../public/images/portfolio/${this.props.imageThumb}`)}
            alt=""
          />
        </LazyLoad>
        <span className="item-client">{this.props.client.toUpperCase()}</span>
        <span className="item-project">{this.props.project.toUpperCase()}</span>
      </div>
    );
  }
}

export default Item;
