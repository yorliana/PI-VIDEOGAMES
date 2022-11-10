import React from "react";
import s from "./Loading.module.css";
import gifLoad from "./assets/loader-5.gif";

export function Loading (){
    return(
        <div className={s.load}>
            <h3>Cargando</h3>
            <img src={gifLoad} alt="Load" className={s.loadIMG}/>
            
        </div>
    )
};
