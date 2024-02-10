import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.scss'; 

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', userData);
      console.log(response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error.response.data);
      alert('Registration failed!');
    }
  };

  return (
    <section className='registration-form'>
        
    <form onSubmit={handleSubmit} className='registration-form__form'>
    <h1 className='registration-form__title'>Register</h1>
      <input
        type="text"
        name="username"
        className='registration-form__input registration-form__input--username'
        value={userData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        className='registration-form__input registration-form__input--email'
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className='registration-form__input registration-form__input--password'
        value={userData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit" className='registration-form__button'>Register</button>
    </form>
    </section>
  );
};

export default RegistrationForm;