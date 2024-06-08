import Link from '@docusaurus/Link';
import React, { useState } from 'react';

<link rel="stylesheet" type="text/css" href="/css/custom.css"></link>



function App() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    
    <div className="form-container">
        <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            id="password"
            name="password"
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
