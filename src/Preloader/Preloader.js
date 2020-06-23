import React from "react";
import './Preloader.scss'

export const Preloader = (props) => {
    return (
        <div className="Preloader">
            <h1 className="Preloader__header">ENJOY THE BEST ONLINE CASINO GAMES</h1>
            <button className="Preloader__btn" onClick={() => props.setPreloader(true)}>play</button>
        </div>
    )
}