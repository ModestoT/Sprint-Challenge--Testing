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

server.post('/games', async (req, res) => {
        if(!req.body.title || !req.body.genre){
            res.status(422).json({error: 'A Title and Genre are required' });
        } else {
            try {
                const game = await Games.addGame(req.body);
    
                res.status(200).json(game);
            } catch(error) {
                res.status(500).json(error);
            }
        }
});

module.exports = server;