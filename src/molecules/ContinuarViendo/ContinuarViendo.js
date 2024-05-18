import React from "react";
import "./ContinuarViendo.css"
import Video from "../../atoms/Video/Video";


const ContinuarViendo = () => {
    let data = [
        {
            videoImg: "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
            videoTitle: "Titulo",
            videoCanal: "https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg",
            videoNomCanal: "Canalsito",
            videoFecha: "12/12/2012",
        },
        {
            videoImg: "",
            videoTitle: "",
            videoCanal: "",
            videoNomCanal: "",
            videoFecha: "",
        },
        {
            videoImg: "",
            videoTitle: "",
            videoCanal: "",
            videoNomCanal: "",
            videoFecha: "",
        },
        {
            videoImg: "",
            videoTitle: "",
            videoCanal: "",
            videoNomCanal: "",
            videoFecha: "",
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