import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContect";
import "./Navbar.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

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
          <Link to="/" className="dropdown-item">
            Home
          </Link>
          <Link to="/about" className="dropdown-item">
            About
          </Link>
          <Link to="/articles" className="dropdown-item">
            Articles
          </Link>
          {isAuthenticated ? (
            <>
              <button onClick={logout} className="dropdown-item">
                Logout
              </button>
              <Link to="/write-article" className="dropdown-item">
                Write Article
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="dropdown-item">
                Login
              </Link>
              <Link to="/register" className="dropdown-item">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
