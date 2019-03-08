const request = require('supertest');

const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server.js', () => {
    afterEach(async () => {
        await db('games').truncate();
    });

    describe('GET /games', () => {
        it('should return a status code of 200', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should always return an array even if empty', async () => {
            const res = await request(server).get('/games');

            expect(res.body).toEqual(expect.arrayContaining([]));
        });

        it('should return a list of games', async () => {
            const expected = [
                { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
                { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
                { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 }];
            
            await request(server).post('/games').send(expected);
            
            const res = await request(server).get('/games');
            
            expect(res.body).toEqual(expect.arrayContaining(expected));
            expect(res.body).toHaveLength(3);
        });
    });

    describe('POST /games', () => {
        it('should return a status code of 422 if not all the required fields are included', async () => {
            const game = { title: 'Pacman' };

            const res = await request(server).post('/games').send(game);

            expect(res.status).toBe(422);
        });

        it('should return a status code of 200', async () => {
            const game = { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 };

            const res = await request(server).post('/games').send(game);

            expect(res.status).toBe(200);
        });
    });
});