import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="navbar">
            {/* Brand / Logo */}
            <div className="navbar-brand">
                <Link to="/">Nishant Mourya</Link>
            </div>

            {/* Hamburger Icon (Shown on small screens) */}
            <div
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span />
                <span />
                <span />
            </div>

            {/* Navigation Links */}
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
