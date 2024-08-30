import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) return null; // Return null if not authenticated

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/about">About</Link></li>
        <li><Link className="navbar-link" to="/service">Service</Link></li>
        <li><Link className="navbar-link" to="/contact">Contact</Link></li>
        <li><button className="navbar-button" onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
