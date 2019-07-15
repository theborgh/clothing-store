import React from 'react';
import './CustomButton.scss';

const customButton = ({ children, ...otherProps}) => {


   return(
      <button className="CustomButton" {...otherProps} >
         {children}
      </button>
   )
}

export default customButton;