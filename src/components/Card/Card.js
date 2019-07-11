import React from 'react';
import './Card.scss';

const card = (props) => {
   return (
      <div className={`${props.size} Card`}
         style={{
            backgroundImage: `url(${props.imageUrl})`
         }}>
         <div className="hp-card-content">
            <h1 className="hp-card-title">{props.item}</h1>
            <span className="hp-card-subtitle">Shop now</span>
         </div>
      </div>
   )
}

export default card;