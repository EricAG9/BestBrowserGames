// Signup.js
import React from 'react';
import {Link} from 'react-router-dom';
import SignupForm from '../../componentes/SignupForm/SignupForm';
import './signup.css'

const Signup = () => {

  const signupSuccess = () => {
    <Link to='/home' />
  }

  return (
    <div className='cadastro-card'>
      <SignupForm onSignupSuccess={signupSuccess}/>
    </div>
  );
};

export default Signup;