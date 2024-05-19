import React from 'react';
import './barra_lateral.css';
import homeIcon from './home-icon.png'
import shortsIcon from './shorts-icon.png'
import subscriptionsIcon from './subscriptions-icon.png'
import userIcon from './user-icon.png'
import historyIcon from './history-icon.png'
import listIcon from './list-icon.png'
import clockIcon from './clock-icon.png'
import thumbsIcon from './thumbs-icon.png'
import videosIcon from './videos-icon.png'
import clipIcon from './clip-icon.png'
import cho from './8cho.png'
import saenz from './saenz.png'
import alec from './alec.png'
import meyers from './meyers.png'
import angela from './angela.png'

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li className="sidebar-item"> <img src={homeIcon} alt="n" className="sidebar-icon"/> Principal</li>
      <li className="sidebar-item"> <img src={shortsIcon} alt="n" className="sidebar-icon"/> Shorts</li>
      <li className="sidebar-item"> <img src={subscriptionsIcon} alt="n" className="sidebar-icon"/> Suscripciones</li>
      <hr className="sidebar-divider" />
      <li className="sidebar-item">Tu </li>
      <li className="sidebar-item"> <img src={userIcon} alt="n" className="sidebar-icon"/> Tu canal</li>
      <li className="sidebar-item"> <img src={historyIcon} alt="n" className="sidebar-icon"/> Historial</li>
      <li className="sidebar-item"> <img src={listIcon} alt="n" className="sidebar-icon"/> Playlists</li>
      <li className="sidebar-item"> <img src={videosIcon} alt="n" className="sidebar-icon"/> Tus videos</li>
      <li className="sidebar-item"> <img src={clockIcon} alt="n" className="sidebar-icon"/> Ver mas tarde</li>
      <li className="sidebar-item"> <img src={thumbsIcon} alt="n" className="sidebar-icon"/> Videos que me gustan</li>
      <li className="sidebar-item"> <img src={clipIcon} alt="n" className="sidebar-icon"/> Tus clips</li>
      <hr className="sidebar-divider" />
      <li>Suscripciones</li>
      <li className="sidebar-item"> <img src={cho} alt="n" className="sidebar-icon"/> 8cho</li>
      <li className="sidebar-item"> <img src={saenz} alt="n" className="sidebar-icon"/> Adrian Saenz</li>
      <li className="sidebar-item"> <img src={alec} alt="n" className="sidebar-icon"/> Alec Hernandez</li>
      <li className="sidebar-item"> <img src={meyers} alt="n" className="sidebar-icon"/> Alex Meyers en Español</li>
      <li className="sidebar-item"> <img src={angela} alt="n" className="sidebar-icon"/> ANGELA YELIN</li>
    </ul>
  </div>
);

export default Sidebar;