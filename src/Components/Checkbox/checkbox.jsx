import React, { useState } from 'react';
import './checkbox.css';

const Login = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <header className="site-header">
                <div className="container header-container">
                    <a href="#" className="site-logo">WELCOME to "Explore Bosnia" site</a>
                    <div className="dark-mode-toggle" onClick={handleDarkModeToggle}>
                        <span className="header-text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                        <span className="toggle">
                            <span className={`circle ${isDarkMode ? 'move' : ''}`}></span>
                        </span>
                    </div>
                </div>
            </header>
            <div className="main-content">
                <div className="container">
                    <h1 className="site-heading">Choose your interests...</h1>
                    <form className="main-form" action="https://echo.htmlacademy.ru" method="post">
                        <label className="label">
                            <input className="checkbox checkbox-food visually-hidden" name="interest" value="food" type="checkbox" />
                            <span className="checkbox-controller"></span>
                            <span className="checkbox-text">FOOD</span>
                        </label>
                        <label className="label">
                            <input className="checkbox checkbox-culture visually-hidden" name="interest" value="culture" type="checkbox" />
                            <span className="checkbox-controller"></span>
                            <span className="checkbox-text">CULTURE</span>
                        </label>
                        <label className="label">
                            <input className="checkbox checkbox-history visually-hidden" name="interest" value="history" type="checkbox" />
                            <span className="checkbox-controller"></span>
                            <span className="checkbox-text">HISTORY</span>
                        </label>
                        <label className="label">
                            <input className="checkbox checkbox-pine-people visually-hidden" name="interest" value="people" type="checkbox" />
                            <span className="checkbox-controller"></span>
                            <span className="checkbox-text">PEOPLE</span>
                        </label>
                        <input className="email" type="email" name="email" placeholder="Email" aria-label="email" required pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$" />
                        <input className="submit" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
