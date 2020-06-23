import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Route, Switch} from "react-router";
import {MainPage} from "./MainPage/MainPage";
import {Footer} from "./Footer/Footer";
import {Terms} from "./Terms/Terms";
import {Cookies} from "./Cookies/Cookies";
import {Privacy} from "./Privacy/Privacy";

export const App = () => {

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/Terms-and-conditions" exact component={Terms} />
                <Route path="/Cookies-policy" exact component={Cookies} />
                <Route path="/Privacy-policy" exact component={Privacy} />
            </Switch>
            <Footer />
        </div>

    );
}