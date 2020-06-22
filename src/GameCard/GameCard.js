import React, {useState} from "react";

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
        <div className="MainPage__list_item game"
            onMouseEnter={makeVisible} onMouseLeave={makeHidden}
        >
            <img
                className="game__image"
                src={props.img}
                alt=""
                style={{maxWidth: `${size}px`, maxHeight: `${size}px`}}
            />
            <button className="game__btn"
                    style={{opacity: `${opacity}`}}
            >Play game
            </button>
        </div>
    )
}