import React, { useState } from 'react';
import './navbar.css';
import { MdModeOfTravel } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showNav = () => {
    console.log('showNav called'); 
    setActive(true);
  };

  const removeNav = () => {
    console.log('removeNav called'); 
    setActive(false);
  };

  console.log('Navbar rendered with active state:', active); 

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <MdModeOfTravel className="icon" /> ExploreBosnia
            </h1>
          </a>
        </div>
        <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>
          </ul>
          <div className="headerBtns flex">
            <button className="btn loginBtn">
              <a href="#">Login</a>
            </button>
            <button className="btn">
              <a href="#">Sign in</a>
            </button>
          </div>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

