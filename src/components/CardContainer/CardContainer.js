import React, { Component } from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

class CardContainer extends Component {
   constructor() {
      super();
      this.state = {
         sections: [
            {
               title: 'hats',
               imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
               id: 1,
               linkUrl: 'shop/hats'
            },
            {
               title: 'jackets',
               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 2,
               linkUrl: 'shop/jackets'
            },
            {
               title: 'shoes',
               imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
               id: 3,
               linkUrl: 'shop/shoes'
            },
            {
               title: 'womens',
               imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
               size: 'large',
               id: 4,
               linkUrl: 'shop/womens'
            },
            {
               title: 'mens',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: 5,
               linkUrl: 'shop/mens'
            }
         ]
      }
   }

   render() {

      return (
         <div className="CardContainer">
            {this.state.sections.map(sect => <Card key={sect.id} 
                                                   item={sect.title} 
                                                   imageUrl={sect.imageUrl}
                                                   linkUrl={sect.linkUrl}
                                                   size={sect.size}  />)}
         </div>
      );
   }
}

export default CardContainer;