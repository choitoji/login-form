import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios'; // Import Axios for making HTTP requests

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:3001/api/login', formData); // Assuming your backend login endpoint is '/login'
      console.log(response.data); // Handle the response data accordingly, such as storing user data in localStorage and redirecting to a dashboard page
      window.location.href = 'http://localhost:3000';
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.data && error.response.data.error === 'Invalid credentials') {
        // Invalid credentials, set the error message to display in red text
        setErrorMessage('Invalid credentials. Please try again.');
      } else {
        // Handle other errors, such as network errors
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="input-box">
                <input 
                  type="text" 
                  placeholder='Username' 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input 
                  type="password" 
                  placeholder='Password' 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required
                />
                <FaLock className='icon'/>
            </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register now!</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;
