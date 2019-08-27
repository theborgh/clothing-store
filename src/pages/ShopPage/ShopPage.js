import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategories } from '../../redux/shop/shopSelector'; 

const ShopPage = ({ categories }) => (

   <div className="ShopPage" > {
      categories
      .map(({
            id,
            ...otherProps
         }) =>
         <
         CategoryPreview key = {
            id
         } {
            ...otherProps
         }
         />)
      } 
   </div>

);

const mapStateToProps = createStructuredSelector({
   categories: selectCategories,
})


export default connect(mapStateToProps)(ShopPage);