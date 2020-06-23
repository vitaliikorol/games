import React from "react";
import './MainPage.scss'
import {GameCard} from "../GameCard/GameCard";

export const MainPage = ({games}) => {

    return (
        <section className="MainPage">
            {games.map(el => (
                <GameCard img={`images/${el.img}`} game={el}/>
            ))}

        </section>
    )
}

