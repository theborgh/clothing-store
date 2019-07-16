import React from 'react';
import './SignInUpPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const signInUp = () => (
   <div className="SignInUp">
      <SignIn />
      <SignUp />
   </div>
)

export default signInUp;