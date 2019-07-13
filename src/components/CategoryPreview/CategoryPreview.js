import React from 'react';
import './CategoryPreview.scss';
import ShopItem from '../ShopItem/ShopItem';

const categoryPreview = ({ title, items }) => {
   const PREVIEW_ITEMS_COUNT = 4;

   return (
      <div className="CategoryPreview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="itemPreview">
            {
               items
                  .filter((item, i) => i < PREVIEW_ITEMS_COUNT)
                  .map(({id, ...otherProps}) => (
                     <ShopItem key={id} {...otherProps} />
                  ))
            }
         </div>
      </div>
   );
}

export default categoryPreview;