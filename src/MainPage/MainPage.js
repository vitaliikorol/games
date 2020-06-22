import React from "react";
import './MainPage.scss'
import {GameCard} from "../GameCard/GameCard";

export const MainPage = () => {

    return (
        <section className="MainPage">
            <GameCard img={'images/1.png'}/>
            <GameCard img={'images/2.png'}/>
            <GameCard img={'images/3.png'}/>
            <GameCard img={'images/4.png'}/>
            <GameCard img={'images/5.png'}/>
            <GameCard img={'images/6.png'}/>
            <GameCard img={'images/7.png'}/>
            <GameCard img={'images/8.png'}/>
            <GameCard img={'images/9.png'}/>
        </section>
    )
}