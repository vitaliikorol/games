import React from "react";
import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="Header">
            <ul className="Header__list">
                <li  className="Header__list_logo_wrapper">
                    <NavLink className="Header__link" to="/">
                        <img
                            className='Header__list_logo'
                            src="images/game-controller.png"
                            alt=""
                        />
                    </NavLink>
                </li>
                <li className='Header__list_item'>
                    <NavLink activeClassName="Header__link_active" className="Header__link" to="/Terms-and-conditions">
                        Terms and Conditions
                    </NavLink>
                </li>
                <li className='Header__list_item'>
                    <NavLink activeClassName="Header__link_active" className="Header__link" to="/Cookies-policy">
                        Cookies Policy
                    </NavLink>
                </li>
                <li className='Header__list_item'>
                    <NavLink activeClassName="Header__link_active" className="Header__link" to="/Privacy-policy">
                        Privacy Policy
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}