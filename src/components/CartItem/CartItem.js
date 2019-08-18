import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="name">{quantity} &times; ${price}</span>
    </div>
  </div>
)

export default CartItem;