import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../componentes/LoginForm/LoginForm';
import './Login.css'

function Login ({onLoginSuccess}) {

  const handleLoginSuccess = () => {
    <Link to='/home' />
  }

  return (
    <div className='login-card'>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
