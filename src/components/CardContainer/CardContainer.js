import React, { Component } from 'react';
import Card from '../Card/Card'

class CardContainer extends Component {
   constructor() {
      super();
      this.state = {
         cardTitles: ['Hats', 'Jackets', 'Shoes', 'Womens', 'Mens']
      }
   }

   render() {

      return(
         <div className="CardContainer">
            {this.state.cardTitles.map(title => <Card key={title} item={title} />)}
         </div>
      );
   }
}

export default CardContainer;