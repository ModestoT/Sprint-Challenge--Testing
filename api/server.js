const express = require('express');

const Games = require('../games/games-model.js');

const server = express();

server.use(express.json());

module.exports = server;