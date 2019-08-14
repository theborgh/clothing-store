import React from 'react';
import './CustomButton.scss';

const customButton = ({ children, isGoogleSignedIn, inverted, ...otherProps}) => {

   return(
      <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignedIn ? 'googleSignIn' : ''} CustomButton`} {...otherProps} >
         {children}
      </button>
   )
}

export default customButton;