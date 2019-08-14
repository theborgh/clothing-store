import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './CategoryPreview.scss';

const categoryPreview = ({ title, items }) => {
   const PREVIEW_ITEMS_COUNT = 4;

   return (
      <div className="CategoryPreview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="itemPreview">
            {
               items
                  .filter((item, i) => i < PREVIEW_ITEMS_COUNT)
                  .map((item) => (
                     <ShopItem key={item.id} item={item} />
                  ))
            }
         </div>
      </div>
   );
}

export default categoryPreview;