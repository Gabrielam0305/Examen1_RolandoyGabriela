import React from "react";
import "./VideoCorto.css"

const VideoCorto = ( props) => {
    const {
        videoImg,
        videoTitle,
        videovisitas,
        URL
    }= props.data
    const handleClick = () => {
        window.open(URL, '_blank');
    }
    return (
        <div className="CardVideoCorto" onClick={handleClick}>
            <img src={videoImg} className="VideoImg" />
            
            <div className="InfoVideo">
                <h3>{videoTitle}</h3>
                <p>{videovisitas}</p>
            </div>

        </div>
    );
}

export default VideoCorto;
