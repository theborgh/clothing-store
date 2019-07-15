import React from 'react';
import './CustomButton.scss';

const customButton = ({ children, isGoogleSignedIn, ...otherProps}) => {


   return(
      <button className={`${isGoogleSignedIn ? 'googleSignIn' : ''} CustomButton`} {...otherProps} >
         {children}
      </button>
   )
}

export default customButton;