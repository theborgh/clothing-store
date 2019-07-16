import React, { Component } from 'react';
import './SignIn.scss'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = (evt) => {
      evt.preventDefault();

      this.setState({
         email: '',
         password: ''
      })
   }

   handleFormFieldChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value
      })
   }

   render() {

      return (
         <div className="SignIn">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name="email"
                  type="email"
                  value={this.state.email}
                  handleChange={this.handleFormFieldChange}
                  label="email"
                  required />

               <FormInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  handleChange={this.handleFormFieldChange}
                  label="password"
                  required />

               <div className="buttons">
                  <CustomButton type="submit" >Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignedIn >Sign in with Google</CustomButton>
               </div>
            </form>
         </div>
      )
   }
}

export default SignIn;