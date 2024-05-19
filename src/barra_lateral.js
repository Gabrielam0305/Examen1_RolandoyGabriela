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
    </ul>
  </div>
);

export default Sidebar;