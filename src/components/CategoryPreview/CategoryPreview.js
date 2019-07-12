import React from 'react';
import './CategoryPreview.scss';

const categoryPreview = ({ title, items }) => {

   return (
      <div className="CategoryPreview">
         <h1 className="Title">{title.toUpperCase()}</h1>
         <div className="ItemPreview">
            {
               items
                  .filter((item, i) => i < 4)
                  .map(item => (
                     <div key={item.id} >{item.name}</div>
                  ))
            }
         </div>
      </div>
   );
}

export default categoryPreview;