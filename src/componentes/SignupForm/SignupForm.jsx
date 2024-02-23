import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    birthDate: '',
    state: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { id: existingUser.length + 1, ...formData };
    const emailTaken = existingUser.some(user => user.email === formData.email);
    if (emailTaken) {
      alert ('Este Email já está em uso!');
      return;
    } 
    
    const updateUser = [...existingUser, newUser];
    localStorage.setItem('users', JSON.stringify(updateUser));
    alert ('Usuário criado com sucesso!');
    navigate('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="date" name="birthDate" placeholder="Birth Date" value={formData.birthDate} onChange={handleChange} />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p>Já possui uma conta? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignupForm;
