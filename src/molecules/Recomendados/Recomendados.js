import React from "react";
import "./Recomendados.css"
import Video from "../../atoms/Video/Video";


const Recomendados = () => {
    let data = [
        {
            videoImg: "https://i.pinimg.com/564x/13/12/d0/1312d0d884bd8d1ad5718901825dbf1b.jpg",
            videoTitle: "aespa (에스파) - Supernova | Show! MusicCore | MBC240518방송",
            videoCanal: "https://yt3.googleusercontent.com/HSJYam_ItBlkB_JRt35RegbOkEGmLOA5p3DiWU-DqJ3IgXJwgwhNoxAEiqBKXA-mblrNogatbQ=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "MBCkpop",
            videoFecha: "17 mayo 2024",
        },
        {
            videoImg: "https://i.pinimg.com/564x/8c/36/9b/8c369be06d8157f261c9d4a80d39c55e.jpg",
            videoTitle: "Mabisyo - Sun Colored Eyes",
            videoCanal: "https://yt3.googleusercontent.com/yLNNBgOAu-J0ZxmSRAn_sLTdiw3r5wedSRQdPagsfZJqKILex5DM99Mg6gcVT76eZVjJNxVl=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Mabisyo",
            videoFecha: " 26 oct 2023",
        },
        {
            videoImg: "https://i.pinimg.com/564x/7a/1b/da/7a1bdaeb29eb6ac00bf1fb2ce24bcade.jpg",
            videoTitle: " 카시스 오렌지 하우스 뮤직",
            videoCanal: "https://yt3.googleusercontent.com/rmmACLGkh4Ym3K0jvdpJBTpLV4Nlup2c1H1MXRe3f7cVnT_7SPDfKQSco8CERNOZowrFi5kR5fk=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "츠미 tsumi",
            videoFecha: "2 feb 2024",
        },
        {
            videoImg: "https://i.pinimg.com/564x/bf/cd/83/bfcd831a5b4d5f7aea681a46ca182109.jpg",
            videoTitle: "The Philosophy of Uncle Iroh: What does it mean to be a man? | The Last Airbender",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_mIhg5XmsGXTzA8_nEzg2FpXgh1xZLCDLb0R6kFAzkmyOE=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Hello Future Me",
            videoFecha: "30 nov 2019",
        }

    ]
    return (
        <section className="Recomendados">
            <h3>Recomendados</h3>
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

export default Recomendados;