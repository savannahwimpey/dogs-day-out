import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <a href="/" className="logo">Dogs Day Out</a>
            </div>
            <div className={`menu ${isOpen ? 'show' : ''}`}>
                <a href="/search">Search</a>
                <a href="/createAccount">Create Account</a>
                <a href="/login" className="login-btn">Login</a>

            </div>
        </nav>
    );
}

export default Navbar;
