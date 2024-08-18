const request = require('supertest');
const express = require('express');
const axios = require('axios');
const axiosMock = require('axios-mock-adapter');
const app = express();

const fetchData = (req, res, next) => {
    axios.get('https://swapi.dev/api/people')
        .then(function (apiResponse) {
            req.swapiData = apiResponse.data;
            next();
        }).catch(function (error) {
            console.error('Error acquired during fetching data from SWAPI.', error)
            res.status(500).send('Server error.')
        })
};

app.use(fetchData).get('/people', (req, res) => {
    res.json(req.swapiData);
});

describe('GET /people', () => {
    let mock;

    beforeAll(() => {
        mock = new axiosMock(axios);
    });
    afterEach(() => {
        mock.reset();
    });
    afterAll(() => {
        mock.restore();
    });

    test('should fetch data from SWAPI and return it as JSON', async () => {
        const mockData = {
            results: [
                { name: 'Luke Skywalker' },
                { name: 'Darth Vader' }
            ]
        };

        mock.onGet('https://swapi.dev/api/people').reply(200, mockData);

        const response = await request(app).get('/people');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
    });

    test('should return 500 if SWAPI request fails', async () => {
        mock.onGet('https://swapi.dev/api/people').reply(500); // Ошибка прописана намеренно

        const response = await request(app).get('/people');
        expect(response.status).toBe(500);
        expect(response.text).toBe('Server error.');
    });
});
