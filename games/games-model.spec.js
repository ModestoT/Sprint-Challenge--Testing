const db = require('../data/dbConfig.js');
const Games = require('./games-model.js');

describe('Games Model', () => {
    describe('addGame()', () => {
        afterEach(async () => {
            await db('games').truncate();
        });
        it('should add a game to the database and return the game that was added', async () => {
            const game = await Games.addGame({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });

            expect(game).toMatchObject({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });
        }); 
    })
});