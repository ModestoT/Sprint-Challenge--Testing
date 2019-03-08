const request = require('supertest');

const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /games', () => {
        afterEach(async () => {
            await db('games').truncate();
        });
        
        it('should return a status code of 200', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should always return an array even if empty', async () => {
            const res = await request(server).get('/games');

            expect(res).toEqual(expect.arrayContaining([{game:'yo'}]));
        });
    })
})