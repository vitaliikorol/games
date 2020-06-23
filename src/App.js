import React, {useContext, useState, useEffect} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Route, Switch} from "react-router";
import {MainPage} from "./MainPage/MainPage";
import {Footer} from "./Footer/Footer";
import {Terms} from "./Terms/Terms";
import {Cookies} from "./Cookies/Cookies";
import {Privacy} from "./Privacy/Privacy";
import {GamesFromServer} from "./Helpers/fetch";
import {GameWindow} from "./GameWindow/GameWindow";

export const App = () => {
    const [games, setGames] = useState([]);
    const gamesFromServer = useContext(GamesFromServer)

    useEffect(() => {
        gamesFromServer.then(data => setGames(data));
    }, [gamesFromServer]);


    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={() => <MainPage games={games}/>} />
                <Route path="/Terms-and-conditions" exact component={Terms} />
                <Route path="/Cookies-policy" exact component={Cookies} />
                <Route path="/Privacy-policy" exact component={Privacy} />
                {games.map(el => (
                    <Route path={`/${el.title.split(' ').join('')}`} component={() => <GameWindow game={el} />}/>
                ))}
            </Switch>
            <Footer />
        </div>

    );
}