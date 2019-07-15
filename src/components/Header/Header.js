import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const header = () => (
   <div className="Header">
      <Link className="logoContainer" to="/">
         <Logo className="logo" />
      </Link>
      <div className="options" >
         <Link className="option" to="/shop">
            SHOP
         </Link>
         <Link className="option" to="/shop">
            CONTACT
         </Link>
      </div>
   </div>
)

export default header;