import React from 'react';
import './ContenedorVideos.css';
import MiMix from '../../molecules/MiMix/MiMix';
import ContinuarViendo from '../../molecules/ContinuarViendo/ContinuarViendo';
import Recomendados from '../../molecules/Recomendados/Recomendados';
import YoutubeShorts from '../../molecules/YoutubeShorts/YoutubeShorts';
import Barra from '../../molecules/Barra/Barra'

const ContenedorVideos= () => {
  return(
    <div className="contenedor">
      <Barra/>
      <ContinuarViendo/>
      <Recomendados/>
      <MiMix/>
      <YoutubeShorts/>
    </div>
  );
}
  
 export default ContenedorVideos;
