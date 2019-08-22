import React from 'react';
import CustomButtom from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
        <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButtom onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));