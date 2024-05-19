import React from "react";
import "./MiMix.css"
import VideoMix from "../../atoms/VideoMix/VideoMix";


const MiMix = () => {
    let data = [

        {
            videoImg:  "https://i.ytimg.com/vi/4O1Bm5vJo2o/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkukihYRnV0w0xu8yphX0EWh_dIQ",
            NomMix: "Mix: Angel Fish",
            Contenido: "Buck-Tick y Mucho más",
            URL: "https://www.youtube.com/watch?v=4O1Bm5vJo2o&list=RD4O1Bm5vJo2o&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/lz_0q6CAlP8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAIK20WqQIRa1iSILx-Oiq-TvbqWA",
            NomMix: "Mix: The Smashing Pumpkins - SpellBinding",
            Contenido: "The Smashing Pumpkins, The Verve, y Mucho más",
            URL: "https://www.youtube.com/watch?v=lz_0q6CAlP8&list=RDlz_0q6CAlP8&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/aAfZWY3T-YA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBe3RTJLdfjbwcpiR0YgIiUq3cpfQ",
            NomMix: "Mix: Marina And The Diamonds - Gold",
            Contenido: "Marina y Mucho más",
            URL: "https://www.youtube.com/watch?v=aAfZWY3T-YA&list=RDaAfZWY3T-YA&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/b-9GNw-_1LA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxSVy5s2FSa4Bxh8MOc_fk0fCdGA",
            NomMix: "Mix: Rewind",
            Contenido: "Wonder Girls, NewJeans, AOA,  y Mucho más",
            URL: "https://www.youtube.com/watch?v=b-9GNw-_1LA&list=RDb-9GNw-_1LA&start_radio=1"
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