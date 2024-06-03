import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { getDatabase, ref, push } from "firebase/database";
import './register.css';


import app from '../../firebaseConfig';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const database = getDatabase(app);

    const userData = {
      username: username,
      email: email,
      password: password
    };

    try {
      // pohrana u fireabseu
      const newPostRef = await push(ref(database, 'users'), userData);
      console.log('Data successfully saved!', newPostRef.key);
      
      // redirecting na login page kada se registracija obavi ali nesto nije ok
      navigate('/login');
      onRegister();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container-login">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register to ExploreBosnia</h2>
          <div className="input-div one">
            <div className="i">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="input-div one">
            <div className="i">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="div">
              <h5>Email</h5>
              <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <input type="submit" className="btn" value="Register" />
          <Link to="/login" className="forgotPass">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
