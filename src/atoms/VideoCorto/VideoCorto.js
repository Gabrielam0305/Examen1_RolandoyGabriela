import React from "react";
import "./VideoCorto.css"

const VideoCorto = (props) => {
    const {
        videoImg,
        videoTitle,
        videoVisitas,
        URL
    } = props.data
    const handleClick = () => {
        window.open(URL, '_blank');
    }
    return (
        <div className="CardVideoCorto" onClick={handleClick}>
            <img src={videoImg} className="VideoImg" />

            <div className="InfoVideo">
                <div className="Metadata">
                    <h3>{videoTitle}</h3>
                    <p>{videoVisitas}</p>
                </div>
            </div>

        </div>
    );
}

export default VideoCorto;
