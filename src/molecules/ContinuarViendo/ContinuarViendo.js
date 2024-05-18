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
            videoImg: "https://i.pinimg.com/564x/a9/dd/f1/a9ddf18664ee0bc535ebf0f429c5ab1f.jpg",
            videoTitle: "The Bizarre World of Fake Video Games",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_nf-2tq10yzd6JoLwcChPQ_jA2rGV7bPeDaukxh6IBawFw=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Super Eyepatch Wolf",
            videoFecha: "14 abr 2024",
        },
        {
            videoImg: "https://i.pinimg.com/564x/9e/7d/00/9e7d00f11722de6005453aad52e1eb9b.jpg",
            videoTitle: "It's summer 1949, you're reading by the lake (oldies music, water sounds, birds) summer ambience",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_mrTxvsatWQiiqCG4Bl6KL76CtYe9WCpVR_uiRlPw4S1Lk=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Nemo's Dreamscapes",
            videoFecha: "17 mar 2024",
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