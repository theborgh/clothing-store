import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
   currentUser,
   hidden,
});

const header = ({ currentUser, hidden }) => (
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
         {
            currentUser ?
               <div className="option" onClick={() => auth.signOut()} >
                  SIGN OUT
               </div> :
               <Link className="option" to="/signin" >SIGN IN</Link>
         }
         <CartIcon />
      </div>
      {
         hidden ? null : <CartDropdown />
      }
   </div>
)

export default connect(mapStateToProps)(header);