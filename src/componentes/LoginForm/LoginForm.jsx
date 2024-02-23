import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({onLoginSuccess}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('users')) || [];
    const user = userData.find(user => user.email === formData && user.password === formData.password)
    if (!user) {
      onLoginSuccess();
      navigate('/home');
    } else {
      alert ('Email ou Senha Inválida!');
    }
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Não possui uma conta? <Link to='/signup'>Cadastrar-se</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
