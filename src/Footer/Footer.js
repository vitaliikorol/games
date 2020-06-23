import React from "react";
import './Footer.scss'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <div className="Footer_wrapper">
            <section className="Footer">
                <ul className="Footer__list">
                    <li className='Footer__list_item'>
                        <NavLink activeClassName="Footer__link_active" className="Footer__link"
                                 to="/Terms-and-conditions">
                            Terms and Conditions
                        </NavLink>
                    </li>
                    <li className='Footer__list_item'>
                        <NavLink activeClassName="Footer__link_active" className="Footer__link" to="/Cookies-policy">
                            Cookies Policy
                        </NavLink>
                    </li>
                    <li className='Footer__list_item'>
                        <NavLink activeClassName="Footer__link_active" className="Footer__link" to="/Privacy-policy">
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
                <img className="Footer__img" src='images/age.png' alt="18+ only"/>
                <article className="Footer__article">
                    <p className="Footer__article_text">
                        This is a website for social games. All players must
                        be over 18 years old. We would like to remind players
                        that practice and success on our website does not
                        mean future success in the game is for real money.
                        The games offered are free of charge and no real
                        money or prize money can be and will be claimed.
                    </p>
                </article>
            </section>
        </div>
    )
}