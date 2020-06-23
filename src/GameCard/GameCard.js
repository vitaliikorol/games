import React, {useState} from "react";
import './GameCard.scss'

export const GameCard = (props) => {

    const [opacity, setOpacity] = useState(0)
    const [size, setSize] = useState(200);
    const makeVisible = () => {
        setOpacity(1)
        setSize(300)
    }
    const makeHidden = () => {
        setOpacity(0)
        setSize(200)
    }
    return (
        <div className="GameCard"
            onMouseEnter={makeVisible} onMouseLeave={makeHidden}
        >
            <img
                className="GameCard__image"
                src={props.img}
                alt=""
                style={{maxWidth: `${size}px`, maxHeight: `${size}px`}}
            />
            <button className="GameCard__btn"
                    style={{opacity: `${opacity}`}}
            >Play game
            </button>
        </div>
    )
}