import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CategoryOverview.scss';
import CategoryPreview from '../CategoryPreview/CategoryPreview';
import { selectCategories } from '../../redux/shop/shopSelector'; 

const CategoryOverview = ({ categories }) => (
  <div className="category-overview">
  {
    categories
    .map(({
          id,
          ...otherProps
       }) =>
       <CategoryPreview key = {
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

export default connect(mapStateToProps)(CategoryOverview);