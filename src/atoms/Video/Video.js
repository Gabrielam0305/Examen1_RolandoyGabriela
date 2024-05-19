import React from "react";
import "./Video.css"

const Video = ( props) => {
    const {
        videoImg,
        videoTitle,
        videoCanal,
        videoNomCanal,
        videoFecha,
        URL
    }= props.data
        const handleClick = () => {
            window.open(URL, '_blank');
        }
    return (
        <div className="CardVideo" onClick={handleClick}>
            <img src={videoImg} className="VideoImg" />
            <div className="InfoVideo">
                <div content="ImagenCanal">
                <img src={videoCanal} alt="perfil" />                 
                </div>
            <div className="Metadata">
                <h3>{videoTitle}</h3>
                <p>{videoNomCanal}</p>
                <small>{videoFecha}</small>
            </div>
            </div>

        </div>
    );
}

export default Video;
