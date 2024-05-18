import React from "react";
import "./VideoMix.css"

const VideoMix = ( props) => {
    const {
        videoImg,
        NomMix,
        Contenido,
    }= props.data
    return (
        <div className="CardVideo">
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
