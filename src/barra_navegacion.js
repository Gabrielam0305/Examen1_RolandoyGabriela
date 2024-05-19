// src/components/molecules/NavBar.js
import React from 'react';
import './barra_navegacion.css';

const NavBar = () => (
  <div className="navbar">
    <img src="/Color-Youtube-logo.png" alt="Logo" className="logo" />  {/* Imagen en la barra de navegación */}
    <div className="search-container">
      <input type="text" placeholder="Buscar" className="search-bar" readOnly/>
      <button className="search-button">Buscar</button>
    </div>
    <div className="nav-icons">
      <button>Icono1</button>
      <button>Icono2</button>
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
    </div>
  </div>
);

export default NavBar;
