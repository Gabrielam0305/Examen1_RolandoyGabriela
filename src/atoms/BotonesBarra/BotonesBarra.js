import React from "react";
import "./BotonesBarra.css"

const BotonesBarra =(props)=>{
    return(
        <button className="botoncito">{props.texto}</button>
    )
}
export default BotonesBarra;