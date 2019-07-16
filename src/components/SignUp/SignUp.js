import React, { Component } from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {

   constructor(props) {
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      }
   }

   handleSubmit = async evt => {
      evt.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (confirmPassword !== password) {
         alert('The passwords don\'t match!');
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);
         createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
         })

      } catch (err) {
         console.log("Error: ", err);
      }

   }

   handleFormFieldChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value
      });
   }

   render() {
      const { displayName, email, password, confirmPassword } = this.state;

      return (
         <div className="SignUp">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="signUpForm" onSubmit={this.handleSubmit}>
               <FormInput
                  name="displayName"
                  type="text"
                  value={displayName}
                  handleChange={this.handleFormFieldChange}
                  label="name"
                  required />

               <FormInput
                  name="email"
                  type="email"
                  value={email}
                  handleChange={this.handleFormFieldChange}
                  label="email"
                  required />

               <FormInput
                  name="password"
                  type="password"
                  value={password}
                  handleChange={this.handleFormFieldChange}
                  label="password"
                  required />

               <FormInput
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  handleChange={this.handleFormFieldChange}
                  label="confirm password"
                  required />

               <div className="buttons">
                  <CustomButton type="submit" >Sign Up</CustomButton>
               </div>
            </form>
         </div>
      )
   }
}

export default SignUp;