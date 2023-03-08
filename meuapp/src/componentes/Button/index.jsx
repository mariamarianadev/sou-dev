import React from "react";
import "./estilo.css"

export default function Button(props)
{
    return (
        <>
        <button className={props.tipo}>{props.texto}</button>
        </>
    )
}