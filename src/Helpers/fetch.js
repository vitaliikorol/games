import React from "react";

const games = 'https://vitaliikorol.github.io/games/games.json';
const downloadGames = () => fetch(games).then(response => response.json());

export const GamesFromServer = React.createContext(downloadGames());