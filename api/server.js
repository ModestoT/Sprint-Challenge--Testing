const express = require('express');

const Games = require('../games/games-model.js');

const server = express();

server.use(express.json());

server.get('/games', async (req, res) => {
    try {
        const games = await Games.getGames();

        res.status(200).json(games);
    } catch(error) {
        res.status(500).json(error);
    }
});

module.exports = server;