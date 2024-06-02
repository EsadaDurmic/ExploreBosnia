import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Koristimo HashRouter
import './app.css';
import { Link, Element, scroller } from 'react-scroll';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbarr/Navbarr';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Home />
            <Popular />
            <Offers />
            <About />
            <Blog />
            <Footer />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </>
    </Router>
  );
};

export default App;
