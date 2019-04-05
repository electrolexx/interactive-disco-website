import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <img src={require(`../../public/images/portfolio/${this.props.imageThumb}`)} alt="" />
        <span className="item-client">{this.props.client.toUpperCase()}</span>
        <span className="item-project">{this.props.project.toUpperCase()}</span>
      </div>
    );
  }
}

export default Item;
