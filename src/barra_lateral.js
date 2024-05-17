import React from 'react';
import './barra_lateral.css';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li>Principal</li>
      <li>Shorts</li>
      <li>Suscripciones</li>
      <hr className="sidebar-divider" />
      <li>Tu </li>
      <li>Tu canal</li>
      <li>Historial</li>
      <li>Playlists</li>
      <li>Tus videos</li>
      <li>Ver mas tarde</li>
      <li>Videos que me gustan</li>
      <li>Tus clips</li>
      <hr className="sidebar-divider" />
      <li>Suscripciones</li>
    </ul>
  </div>
);

export default Sidebar;