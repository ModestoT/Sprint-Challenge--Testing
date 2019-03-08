const db = require('../data/dbConfig.js');

module.exports = {
    addGame,
    getGames,
    getGameById
};

async function addGame(game){
    const [id] = await db('games').insert(game, 'id');

    return getGameById(id);
};

function getGames() {
    return db('games');
}

function getGameById(id) {
    return db('games')
        .where({ id })
        .first();
}