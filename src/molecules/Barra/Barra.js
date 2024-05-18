import React from "react";
import "./Barra.css"
import BotonesBarra from "../../atoms/BotonesBarra/BotonesBarra";

const Barra =(props)=>{
    let botones=["Música","Mixes","Gorillaz", "Pop Rock", "Teen Pop", "Ahorros", "Jpop", "R&B", "JavaScript", "Programación", "Aespa", "Kpop", "Asmr", "Hazbin Hotel", "Beyoncé", "Chisme"]
    return(
        <div className="contenedorBarra">

<BotonesBarra texto="Todos" customStyle={{ backgroundColor: 'white', color: 'black' }} />
        {
            botones.map((objVideo) => (
                <BotonesBarra texto={objVideo} />
            ))
        }
    </div>
      
    )
}
export default Barra;