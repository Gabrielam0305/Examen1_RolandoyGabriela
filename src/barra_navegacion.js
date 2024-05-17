import React from 'react';
import './barra_navegacion.css';

const NavBar = () => (
  <div className="navbar">
    <img src="/Color-YouTube-logo.png" alt="YouTube" className="logo" />
    <input type="text" placeholder="Buscar" className="search-bar" />
    <button className="search-button">🔍</button>
    <div className="nav-icons">
      <button>🎤</button>
      <button>🔔</button>
      <img src="profile.jpg" alt="Profile" className="profile-pic" />
    </div>
  </div>
);

export default NavBar;