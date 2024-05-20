import React from "react";
import "./MiMix.css"
import Video from "../../atoms/Video/Video";


const MiMix = () => {
    let data = [

        {
            videoImg:  "https://i.ytimg.com/vi/4O1Bm5vJo2o/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkukihYRnV0w0xu8yphX0EWh_dIQ",
            videoTitle: "Angel Fish",
            videoCanal: "https://yt3.googleusercontent.com/rJltJIGTw8vICn1Oe1wflpekv2zR2lWfhbMVaHiUzZ3FIUxFy0EtpN4kwR19Pw8es9H2icy2=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "BUCK-TICK",
            videoFecha: "10 jul 2018",
            URL: "https://www.youtube.com/watch?v=4O1Bm5vJo2o&list=RD4O1Bm5vJo2o&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/lz_0q6CAlP8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAIK20WqQIRa1iSILx-Oiq-TvbqWA",
            videoTitle: "The Smashing Pumpkins - Spellbinding (Official Music Video)",
            videoCanal: "https://yt3.googleusercontent.com/iJaxkwCsUl6GWpfLj9gnFKV6rI1q44T9pwo3RZdMjjztQsp1W-j2gqGh3bfcGNptRKjcop1wJQ=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "Smashing Pumpkins",
            videoFecha: "28 jun 2023",
            URL: "https://www.youtube.com/watch?v=lz_0q6CAlP8&list=RDlz_0q6CAlP8&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/aAfZWY3T-YA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBe3RTJLdfjbwcpiR0YgIiUq3cpfQ",
            videoTitle: "MARINA AND THE DIAMONDS - Gold [Official Audio]",
            videoCanal: "https://yt3.googleusercontent.com/1R4LoGDE5A4CP04Enol714wfDrwWQ_lSvOOHeGFqbqU37tI7Y0Aq0bHZiOiv1T9FG3-GSzcooQ=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "MARINA",
            videoFecha: "10 mar 2015",
            URL: "https://www.youtube.com/watch?v=aAfZWY3T-YA&list=RDaAfZWY3T-YA&start_radio=1"
        },
        {
            videoImg:  "https://i.ytimg.com/vi/b-9GNw-_1LA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxSVy5s2FSa4Bxh8MOc_fk0fCdGA",
            videoTitle: "Rewind",
            videoCanal: "https://yt3.googleusercontent.com/ytc/AIdro_k9yMcjQkbvVJveMtLU40v27NYh5nQb52P1lAgsN0ESjA=s176-c-k-c0x00ffffff-no-rj",
            videoNomCanal: "wondergirls",
            videoFecha: "21 nov 2015",
            URL: "https://www.youtube.com/watch?v=b-9GNw-_1LA&list=RDb-9GNw-_1LA&start_radio=1"
        }

    ]
    return (
        <section className="MiMix">
            <h3>Mi Mix</h3>
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

export default MiMix;