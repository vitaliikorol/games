import React, {useState} from "react";
import './GameCard.scss'
import {NavLink} from "react-router-dom";

export const GameCard = (props) => {

    const [opacity, setOpacity] = useState(0)
    const [size, setSize] = useState(1);
    const makeVisible = () => {
        setOpacity(1)
        setSize(1.3)
    }
    const makeHidden = () => {
        setOpacity(0)
        setSize(1)
    }
    return (
        <div className="GameCard"
            onMouseEnter={makeVisible} onMouseLeave={makeHidden}
        >
            <img
                className="GameCard__image"
                src={props.img}
                alt=""
                style={{transform: `scale(${size})`}}
            />
            <NavLink
                to={`/${props.game.title.split(' ').join('')}`}
                className="GameCard__btn"
                style={{opacity: `${opacity}`}}
            >Play game
            </NavLink>
        </div>
    )
}