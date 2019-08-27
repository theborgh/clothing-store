import React from 'react';
import { connect } from 'react-redux';
import { selectCardContainerSections } from '../../redux/cardContainer/cardContainerSelector';
import { createStructuredSelector } from 'reselect';
import './CardContainer.scss'
import Card from '../CategoryCard/CategoryCard'

const CardContainer = ({ sections }) => (

   <div className="CardContainer">
      {sections.map(({id, ...otherProps})=> <Card key={id} {...otherProps}  />)}
   </div>
)

const mapStateToProps = createStructuredSelector({
   sections: selectCardContainerSections,
});

export default connect(mapStateToProps)(CardContainer);