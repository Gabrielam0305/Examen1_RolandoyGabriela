import React from 'react';
import NavBar from './barra_navegacion.js';
import Sidebar from './barra_lateral.js';
import './pagina_principal.css';
import ContenedorVideos from './organism/ContenedorVideo/ContenedorVideos.js';

const sampleVideos = [
  {
    thumbnail: 'video1.jpg',
    title: 'Video 1',
    channelName: 'Channel 1',
    uploadTime: 'Hace 1 día',
    channelImage: 'channel1.jpg',
  },
  // Agrega más videos de muestra según sea necesario
];

const HomePage = () => (
  <div className="homepage">
    <NavBar />
    <Sidebar />
    <ContenedorVideos/>
    {/* <div className="main-content">
      
    </div> */}
  </div>
);

export default HomePage;