import React from "react";
import "./ContinuarViendo.css"
import Video from "../../atoms/Video/Video";


const ContinuarViendo = () => {
    let data = [
        {
            videoImg: "https://i.ytimg.com/vi/dwY7w0k3j2Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5CRkU5ViYGO74W8H2Zy0t-WlpJg",
            videoTitle: "Classical Music for When You’re on a Deadline",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_nirgFQ7Xu_KDkUZcFBbbUdF1oIbjq2QKU8QJasAamYyNQ=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "HALIDONMUSIC",
            videoFecha: "20 ene 2023",
        },
        {
            videoImg: "https://i.pinimg.com/564x/4a/fc/bd/4afcbd549644945ba77df2d2d8e4ea0b.jpg",
            videoTitle: "glitter and funk! ✧˚ ༘ [kpop gg playlist]",
            videoCanal: "https://yt3.googleusercontent.com/vFmtf_xmxP7yE8E346ya0GouL4puhfq85nTE89QJnlPU3c-bE-TVx2MfRIVpBiI8afGc7yd9tA=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "jelly baby",
            videoFecha: "10 ago 2023",
        },
        {
            videoImg: "https://i.pinimg.com/564x/e8/11/bc/e811bcd4ff7f17ba0ae7c8a30fccc145.jpg",
            videoTitle: "The VERY Strange History of Unicorns",
            videoCanal: "https://yt3.googleusercontent.com/oqQrtLnzfxrXU5DeN1MQZpEBfrx_lwDVFXPleUhkFEbTC_dMTxeYpOzb7uUuopY_eDrZi51fgw=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Kaz Rowe",
            videoFecha: "29 sept 2023",
        },
        {
            videoImg: "https://i.pinimg.com/564x/90/28/fc/9028fca81f7902422f7c93c95ecca6be.jpg",
            videoTitle: "Timelapse: Rain (CF18 Official Poster)",
            videoCanal: "https://yt3.googleusercontent.com/JQzAvXLzwNI2g-RcF4wdhfXkbqtSy4wsDpltHOEQX9gIG_qrrXWVDVPSNpecTRW7oMkrpm3sK44=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Ann Maulina",
            videoFecha: "1 may 2024",
        }

    ]
    return (
        <section className="ContinuarViendo">
            <h3>Continuar Viendo</h3>
            <div className="contenedorVideos">
                {
                    data.map((objVideo) => (
                        <Video data={objVideo} />
                    ))
                }
            </div>
        </section>
    );
}

export default ContinuarViendo;