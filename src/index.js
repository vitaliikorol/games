import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from "react-router-dom";
import {App} from "./App";

ReactDOM.render(
    <HashRouter basename="/react_phone-catalog">
        <App />
    </HashRouter>,
    document.getElementById('root'),
);