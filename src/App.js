import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Route, Switch} from "react-router";
import {MainPage} from "./MainPage/MainPage";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/Terms-and-conditions" exact component={MainPage} />
                <Route path="/Cookies-policy" exact component={MainPage} />
                <Route path="/Privacy-policy" exact component={MainPage} />
            </Switch>
            <Footer />
        </div>

    );
}

export default App;
