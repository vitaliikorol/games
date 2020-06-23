import React from "react";
import ReactHtmlParser from 'react-html-parser';
import './GameWindow.scss'

export const GameWindow = (props) => {
    return (
        <div className="GameWindow">
            <div className="GameWindow__app">{ReactHtmlParser(props.game.iframe)}</div>
            <h1 className="GameWindow__title">{props.game.title}</h1>
            <p className="GameWindow__descr">{props.game.descr}</p>
        </div>
    )
}