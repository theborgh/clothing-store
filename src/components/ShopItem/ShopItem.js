import React from 'react';
import './ShopItem.scss';

const shopItem = ({ id, name, price, imageUrl }) => (
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
   </div>
)

export default shopItem;