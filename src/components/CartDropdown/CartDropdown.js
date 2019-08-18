import React from 'react';
import CustomButtom from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);