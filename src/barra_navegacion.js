// src/components/molecules/NavBar.js
import React from 'react';
import './barra_navegacion.css';
import profpic from './prof-pic.png';
import notificationIcon from './notificaction-icon.png';
import voiceIcon from './voice-icon.png';

const NavBar = () => (
  <div className="navbar">
    <img src="./Color-Youtube-logo.png" alt="Logo" className="logo" />
    <div className="search-container">
      <input type="text" placeholder="Buscar" className="search-bar" readOnly/>
      <button className="search-button">Buscar</button>
    </div>
    <div className="nav-icons">
      <button>
        <img src={voiceIcon} alt="icon" className="icons"/>
      </button>
      <button>
      <img src={notificationIcon} alt="icon" className="icons"/>
      </button>
      <img src={profpic} alt="Profile" className="profile-pic" />
    </div>
  </div>
);

export default NavBar;
