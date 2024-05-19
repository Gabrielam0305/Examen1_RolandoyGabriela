// src/components/molecules/Sidebar.js
import React from 'react';
import './barra_lateral';
import SidebarItem from './barra_lateral.js';

// Importa los iconos
import homeIcon from '../../assets/home-icon.png';
import exploreIcon from '../../assets/explore-icon.png';
import subscriptionsIcon from '../../assets/subscriptions-icon.png';
import libraryIcon from '../../assets/library-icon.png';
import historyIcon from '../../assets/history-icon.png';
import savedVideosIcon from '../../assets/saved-videos-icon.png';
import settingsIcon from '../../assets/settings-icon.png';
import helpIcon from '../../assets/help-icon.png';

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <SidebarItem icon={homeIcon} text="Principal" />
      <SidebarItem icon={exploreIcon} text="Shorts" />
      <SidebarItem icon={subscriptionsIcon} text="Suscripciones" />
      <hr className="sidebar-divider" />
      <SidebarItem icon={libraryIcon} text="Tu" />
      <SidebarItem icon={historyIcon} text="Tu canal" />
      <SidebarItem icon={savedVideosIcon} text="Historial" />
      <SidebarItem icon={savedVideosIcon} text="Play list" />
      <SidebarItem icon={savedVideosIcon} text="Tus videos" />
      <SidebarItem icon={savedVideosIcon} text="Ver mas tarde" />
      <SidebarItem icon={savedVideosIcon} text="Videos que me gustan" />
      <SidebarItem icon={savedVideosIcon} text="Tus clips" />
      <hr className="sidebar-divider" />
      <SidebarItem icon={settingsIcon} text="Sucripciones" />
    </ul>
  </div>
);

export default Sidebar;
