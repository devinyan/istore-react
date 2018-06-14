import React, { Component } from 'react';


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        }
    }

  render(){
      return (
        <div className="cart-item">
            <div>{this.state.product.id}</div>
            <div>{this.state.product.title}</div>
            <div>{this.state.product.price}</div>
            <div>{this.state.product.owner}</div>
            <div>
                <button onClick={this.props.deleteCartByID.bind(this, this.props.index)}>删除</button>
            </div>
        </div>
    )
  }
}

