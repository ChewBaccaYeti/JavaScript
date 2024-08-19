import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import { 
    Character, ApiResponse_Character, 
    Starship, ApiResponse_Starships, 
    ExtendedRequest  
} from './types';

const app = express();
const PORT = 3030;

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Middleware to fetch ALL data for designated endpoints below

async function fetchAllData<T>(url: string): Promise<T[]> {
    let results: T[] = [];
    let nextUrl: string | null = url;

    while (nextUrl) {
        const response: { data: { next: string | null, results: T[] } } = await axios.get(nextUrl);
        results = results.concat(response.data.results); // Сшиваю данные между собой
        nextUrl = response.data.next; // Переход на следующий ендпоинт
    } return results;
}

// Middleware to fetch characters data from SWAPI
function fetchCharactersData(request: ExtendedRequest<ApiResponse_Character>, response: Response, next: NextFunction) {
    fetchAllData<Character>('https://swapi.dev/api/people')
        .then(characters => {
            request.swapiData = { count: characters.length, next: null, previous: null, results: characters };
            next();
        })
        .catch(function (error) {
            console.error('Error acquired during fetching characters from SWAPI.', error);
            response.status(500).send('Server error.');
        });
};

// Middleware to fetch starships data from SWAPI
function fetchStarshipsData(request: ExtendedRequest<ApiResponse_Starships>, response: Response, next: NextFunction) {
    fetchAllData<Starship>('https://swapi.dev/api/starships/')
        .then(starships => {
            request.swapiData = { count: starships.length, next: null, previous: null, results: starships };
            next();
        })
        .catch(error => {
            console.error('Error acquired during fetching starships from SWAPI.', error);
            response.status(500).send('Server error.');
        });
}

// Route to return the fetched data

app.get('/people', fetchCharactersData, (request: ExtendedRequest<ApiResponse_Character>, response: Response) => {
    response.json(request.swapiData)
});

app.get('/starships', fetchStarshipsData, (request: ExtendedRequest<ApiResponse_Starships>, response: Response) => {
    response.json(request.swapiData)
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
