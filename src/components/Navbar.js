import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <a href="/" className="logo">Dog's Day Out</a>
            </div>
            <div className={`menu ${isOpen ? 'show' : ''}`}>
                <a href="/search">Search</a>
                <a href="/explore">Explore</a>
                <a href="/createAccount">Create Account</a>
                <a href="/login" className="login-btn">Login</a>
                <a href="/profile" className="login-btn">Profile</a>


            </div>
        </nav>
    );
}

export default Navbar;
