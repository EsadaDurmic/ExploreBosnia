import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { MdModeOfTravel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; 
import './login.css'; 
import { db } from '../../firebaseConfig';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const correctUsername = 'user'; //podaci za login jer povlacenje iz baze ne funkcionise
  const correctPassword = 'password';

  const handleFocus = (e) => {
    const parent = e.target.parentNode.parentNode;
    parent.classList.add('focus');
  };

  const handleBlur = (e) => {
    const parent = e.target.parentNode.parentNode;
    if (e.target.value === "") {
      parent.classList.remove('focus');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      navigate('/home'); // uspjesan login
      onLogin(); 
    } else {
      setError('Incorrect username or password!'); 
    }
  };

  return (
    <div className="container-login">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <MdModeOfTravel id="logo-icon" className="icon" />
          <h2 className="title">Welcome to ExploreBosnia</h2>
          <div className="input-div one">
            <div className="i">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>} 
          <a href="#" class="forgotPass">Forgot Password?</a>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
