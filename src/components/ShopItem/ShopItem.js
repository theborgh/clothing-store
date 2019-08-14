import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import './ShopItem.scss';

const shopItem = ({ item, addItem }) => {
   const { name, price, imageUrl } = item;

   return (
      <div className="ShopItem">
         <div
            className="image"
            style={{
               backgroundImage: `url(${imageUrl})`,
            }} >
         </div>
         <div className="itemFooter" >
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
         <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
         </CustomButton>
      </div>
   )
}

const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(shopItem);