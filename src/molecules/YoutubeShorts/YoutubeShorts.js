import React from "react";
import "./YoutubeShorts.css"
import VideoCorto from "../../atoms/VideoCorto/VideoCorto";


const YoutubeShorts = () => {
    let data = [
        {
            videoImg: "https://i.pinimg.com/564x/93/d8/14/93d814414aa0d113f4fce93e1a87c3b4.jpg",
            videoTitle: " My DAD made me a dress!",
            videoVisitas:"386 k de visitas",
            URL: "https://youtube.com/shorts/Tm9Cfg5IGwM?si=uFdNKs1Wa1BMrrwv"
        
        },
        {
            videoImg: "https://i.pinimg.com/564x/92/b2/fa/92b2fa008c863e3fec6cecc8f6cadad8.jpg",
            videoTitle: "Trying on all the things I made in 2021",
            videoVisitas:"13 M de visitas",
            URL: "https://youtube.com/shorts/lbuRmLggyME?si=h3DBOyiZKRVxk3Pb"
        },
        {
            videoImg: "https://i.pinimg.com/564x/9f/c0/23/9fc02383be6cef44e9d3ca18a6318787.jpg",
            videoTitle: " Did G-Idle MOCK other GGs?!",
            videoVisitas:"788 k de visitas",
            URL: "https://youtube.com/shorts/LSXO2iFoSOg?si=ioxso-Xakbsja3Mj"

        },
        {
            videoImg: "https://i.pinimg.com/736x/bf/0e/17/bf0e1796eab03094e412d374f660a1cc.jpg",
            videoTitle: "Gwen's 63 Outfits: DEEPER Meaning & EASTER EGG ",
            videoVisitas:"5.4 M de visitas",
            URL: "https://youtube.com/shorts/veED4n0QKIk?si=iLojD05TkZQFZ1MT"
        }

    ]
    return (
        <section className="YoutubeShorts">
            <h3>Youtube Shorts</h3>
            <div className="contenedorVideosCortos">
                {
                    data.map((objVideo) => (
                        <VideoCorto data={objVideo} />
                    ))
                }
            </div>
        </section>
    );
}

export default YoutubeShorts;