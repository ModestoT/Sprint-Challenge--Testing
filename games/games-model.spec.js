const db = require('../data/dbConfig.js');
const Games = require('./games-model.js');

describe('Games Model', () => {
    afterEach(async () => {
        await db('games').truncate();
    });
    describe('addGame()', () => {
        it('should add a game to the database and return the game that was added', async () => {
            const game = await Games.addGame({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });

            expect(game).toMatchObject({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });
        }); 
    });

    describe('getGames()', () => {
        it('should return all the games that our in the database', async () => {
            await Games.addGame({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });
            await Games.addGame({ title: 'Billy', genre: 'Arcade', releaseYear: 1980 });
            await Games.addGame({ title: 'this', genre: 'Arcade', releaseYear: 1980 });

            const games = await Games.getGames();

            expect(games).toHaveLength(3);
        })
    });
});