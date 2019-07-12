import React, { Component } from 'react';
import SHOP_DATA from './shopdata';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

class ShopPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         categories: SHOP_DATA
      }

   }

   render() {
      return (
         <div className="ShopPage">
            {
               this.state.categories
                  .map(({ id, ...otherProps }) =>
                     <CategoryPreview key={id} {...otherProps} />)
            }
         </div>
      );
   }
}

export default ShopPage;