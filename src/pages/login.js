import Link from '@docusaurus/Link';
import React, { useState } from 'react';

<link rel="stylesheet" type="text/css" href="/css/custom.css"></link>



function App() {

  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/30-Days-Of-CPP/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    
    <div className="form-container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="text" id="username" name="username" required  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <span><btn className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordShown ? 'Hide' : 'Show'}
          </btn>
          </span>
        </div>
        &nbsp;
        <div className="input-container">
          <button type="submit">Login</button>
          <p className='text-color'>Don't have an account yet? <Link to ="signup"> Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
}

export default App;
