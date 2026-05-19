import express, { Response, NextFunction } from 'express';
import axios from 'axios';
import cors from 'cors';
import { ExtendedRequest, Random, ApiResponse } from './mockTypes';

const app = express();
const override = cors();
const dock = 3842;
const source = 'https://64f77a149d77540849539f7e.mockapi.io/random';

app.use(
    cors({
        origin: '*', // Разрешает запросы с любых доменов
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

app.listen(dock, () => {
    console.log(`Server running on ${dock}.`);
});

async function fetchArray<X>(url: string, limit: number): Promise<X[]> {
    let results: X[] = [];
    let link: string | null = url;

    while (link && results.length < limit) {
        const response = await axios.get<{ results: X[] }>(link);
        const { results: newResults } = response.data;
        results = results.concat(newResults);

        if (results.length >= limit) {
            results = results.slice(0, limit); // Обрезаю массив до определенного количества
            break; // Прерываю операцию
        }
    }
    return results;
}

function autoRequest(
    request: ExtendedRequest<ApiResponse>,
    response: Response,
    next: NextFunction,
) {
    fetchArray<Random>(source, 25)
        .then(randoms => {
            request.mockArray = { count: randoms.length, random: randoms };
            next();
        })
        .catch(function (error) {
            console.error('Error acquired during fetching data.', error);
            response.status(500).send('Server error.');
        });
}
