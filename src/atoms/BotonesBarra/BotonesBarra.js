import React from "react";
import "./BotonesBarra.css"

const BotonesBarra =(props)=>{
    const buttonStyle = props.customStyle ? props.customStyle : {};
    return(
        <button className="botoncito" style={buttonStyle}>{props.texto}</button>
    )
}
export default BotonesBarra;