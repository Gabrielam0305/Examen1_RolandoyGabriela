import React from "react";
import "./MiMix.css"
import VideoMix from "../../atoms/VideoMix/VideoMix";


const MiMix = () => {
    let data = [

        {
            videoImg:  "https://i.ytimg.com/vi/4O1Bm5vJo2o/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkukihYRnV0w0xu8yphX0EWh_dIQ",
            NomMix: "Mix: Angel Fish",
            Contenido: "Buck-Tick y Mucho más",
        },
        {
            videoImg:  "https://i.ytimg.com/vi/lz_0q6CAlP8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAIK20WqQIRa1iSILx-Oiq-TvbqWA",
            NomMix: "Mix: The Smashing Pumpkins - SpellBinding",
            Contenido: "The Smashing Pumpkins, The Verve, y Mucho más",
        },
        {
            videoImg:  "https://i.ytimg.com/vi/Ae8W4iuh-2c/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCsZeXMZR3pwKefgWlUOrX5nxeU8g",
            NomMix: "Mix: Jet - f(x)",
            Contenido: "f(x), Red Velvet, y Mucho más",
        },
        {
            videoImg:  "https://i.ytimg.com/vi/C8FQ4wQXyaE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAG5p9XavE9kfaCG8ZnC1-hcUql-Q",
            NomMix: "Mix: Pop",
            Contenido: "Chayanne, Shakira, y Mucho más",
        }

    ]
    return (
        <section className="MiMix">
            <h3>Mi Mix</h3>
            <div className="contenedorVideos">
                {
                    data.map((objVideo) => (
                        <VideoMix data={objVideo} />
                    ))
                }
            </div>
        </section>
    );
}

export default MiMix;