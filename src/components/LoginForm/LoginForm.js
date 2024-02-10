import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.scss'; // Make sure to import the SCSS file

const LoginForm = ({ setToken }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', loginData);
      setToken(response.data.token);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error.response.data);
      alert('Login failed!');
    }
  };

  return (
    <section className='login-form'>
        <h1 className='login-form__title'>Login</h1>
    <form onSubmit={handleSubmit} className='login-form__form'>
      <input
        type="email"
        name="email"
        className='login-form__input login-form__input--email'
        value={loginData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className='login-form__input login-form__input--password'
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit" className='login-form__button'>Login</button>
    </form>
    </section>
  );
};

export default LoginForm;