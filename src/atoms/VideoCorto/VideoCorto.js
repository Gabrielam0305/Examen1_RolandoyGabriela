import React from "react";
import "./VideoCorto.css"

const VideoCorto = ( props) => {
    const {
        videoImg,
        videoTitle,
        videovisitas,
    }= props.data
    return (
        <div className="CardVideoCorto">
            <img src={videoImg} className="VideoImg" />
            
            <div className="InfoVideo">
                <h3>{videoTitle}</h3>
                <p>{videovisitas}</p>
            </div>

        </div>
    );
}

export default VideoCorto;
