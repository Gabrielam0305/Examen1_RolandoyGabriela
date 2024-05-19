import React from "react";
import "./VideoMix.css"

const VideoMix = ( props) => {
    const {
        videoImg,
        NomMix,
        Contenido,
        URL
    }= props.data
    const handleClick = () => {
        window.open(URL, '_blank');
    }
    return (
        <div className="CardVideo" onClick={handleClick}>
            <img src={videoImg} className="VideoImg" />
            <div className="InfoVideo">
            <div className="Metadata">
                <h3>{NomMix}</h3>
                <p>{Contenido}</p>
            </div>
            </div>

        </div>
    );
}

export default VideoMix;
