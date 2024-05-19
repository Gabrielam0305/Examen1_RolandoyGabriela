import React from "react";
import "./Recomendados.css"
import Video from "../../atoms/Video/Video";


const Recomendados = () => {
    let data = [
        {
            videoImg: "https://i.pinimg.com/564x/94/cb/04/94cb044928f3ae757e7bd3fe770ef53c.jpg",
            videoTitle: "aespa 에스파 'Spicy' MV",
            videoCanal: "https://yt3.googleusercontent.com/_1Z4I2qpWaCN9g3BcDd3cVA9MDHOG43lE1YNWDNkKro49haGxkjwuFK-I8faWTKM6Jle9qb4ag=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "SMTOWN",
            videoFecha: "8 may 2023",
            URL:"https://youtu.be/Os_heh8vPfs?si=lw7Tgmn3sy9dmWmD"
        },
        {
            videoImg: "https://i.pinimg.com/564x/8c/36/9b/8c369be06d8157f261c9d4a80d39c55e.jpg",
            videoTitle: "Mabisyo - Sun Colored Eyes",
            videoCanal: "https://yt3.googleusercontent.com/yLNNBgOAu-J0ZxmSRAn_sLTdiw3r5wedSRQdPagsfZJqKILex5DM99Mg6gcVT76eZVjJNxVl=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Mabisyo",
            videoFecha: " 26 oct 2023",
            URL:"https://youtu.be/vGxHVf6RTVY?si=cuwIpmZAZc0nMStJ"
        },
        {
            videoImg: "https://i.pinimg.com/564x/7a/1b/da/7a1bdaeb29eb6ac00bf1fb2ce24bcade.jpg",
            videoTitle: " 카시스 오렌지 하우스 뮤직",
            videoCanal: "https://yt3.googleusercontent.com/rmmACLGkh4Ym3K0jvdpJBTpLV4Nlup2c1H1MXRe3f7cVnT_7SPDfKQSco8CERNOZowrFi5kR5fk=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "츠미 tsumi",
            videoFecha: "2 feb 2024",
            URL:"https://youtu.be/dihIHLhr2J4?si=rsA3EXqE4ic8LQ6L"
        },
        {
            videoImg: "https://i.pinimg.com/564x/ef/c7/d4/efc7d4d578f469c753217045c0577729.jpg",
            videoTitle: "Fire And Death: Why 1666 Was The Worst Year To Be A Londoner | Fire & Fever | Timeline",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_ngqGmRD-_rfV3e6Qx71XqIo2RxPSfO7Z3cRMem4kkMCLg=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Timeline - World History Documentaries",
            videoFecha: "14 nov 2023",
            URL:"https://youtu.be/rI3QJpKTyZI?si=nkztbln-QhnG_KiP"
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