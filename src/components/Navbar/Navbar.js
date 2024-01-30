import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">The Mag</div>
            <button onClick={toggleDropdown} className="dropdown-toggle">
                Menu
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <Link to="/" className="dropdown-item">Home</Link>
                    <Link to="/about" className="dropdown-item">About</Link>
                    <Link to="/articles" className="dropdown-item">Articles</Link>
                    <Link to="/events" className="dropdown-item">Events</Link>
                    <Link to="/contact" className="dropdown-item">Contact</Link>
                    <Link to="/subscribe" className="dropdown-item">Subscribe</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;