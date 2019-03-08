const db = require('../data/dbConfig.js');

module.exports = {
    addGame
};

async function addGame(game){
    const [id] = await db('games').insert(game, 'id');

    return db('games').where({ id }).first();
}