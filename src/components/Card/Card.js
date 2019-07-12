import React from 'react';
import { withRouter } from 'react-router-dom';
import './Card.scss';

const card = (props) => {
   return (
      <div
         className={`${props.size} Card`}
         onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
      >
         <div className="background-image" style={{
            backgroundImage: `url(${props.imageUrl})`
         }}>
         </div>
         <div className="hp-card-content">
            <h1 className="hp-card-title">{props.title.toUpperCase()}</h1>
            <span className="hp-card-subtitle">Shop now</span>
         </div>
      </div>
   )
}

export default withRouter(card);