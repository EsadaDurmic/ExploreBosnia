import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import Navbar from './Components/Navbarr/Navbarr';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'; 
import Contact from './Components/Contact/Contact';
import './app.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsRegistered(true); 
  };

  return (
    <Router>
      <>
        {isRegistered ? ( // da li je korisnik registrovan
          isLoggedIn ? (
            <>
              <Navbar />
              <Home />
              <Popular />
              <Offers />
              <About />
              <Contact />
              {/*<Blog /> nebitno */}
              <Footer />
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )
        ) : (
          <Register onRegister={handleRegister} /> // treba da prikaze registraciju ako NIJE registrovan korisnik
        )}
      </>
    </Router>
  );
};

export default App;
