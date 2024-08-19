import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import { 
    Character, ApiResponse_Character, 
    Starship, ApiResponse_Starships,
    Specie, ApiResponse_Species,
    ExtendedRequest  
} from './SWapiTypes';

const app = express();
const PORT = 3030;
const people = 'https://swapi.dev/api/people';
const starships = 'https://swapi.dev/api/starships';
const species = 'https://swapi.dev/api/species';

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Middleware to fetch ALL data for designated endpoints below
async function fetchAllData<T>(url: string, limit: number = 20): Promise<T[]> {
    let results: T[] = [];
    let nextUrl: string | null = url;

    while (nextUrl && results.length < limit) {
        const response: { data: { next: string | null, results: T[] } } = await axios.get(nextUrl);
        results = results.concat(response.data.results); // Сшиваю данные между собой
        if (results.length >= limit) {
            results = results.slice(0, limit); // Обрезаю массив до определенного количества
            break; // Прерываю операцию
        }
        nextUrl = response.data.next; // Переход на следующий ендпоинт
    } return results;
}

// Middleware to fetch characters data from SWAPI
function fetchCharactersData(request: ExtendedRequest<ApiResponse_Character>, response: Response, next: NextFunction) {
    fetchAllData<Character>(`${people}`, 20)
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
    fetchAllData<Starship>(`${starships}`, 20)
        .then(starships => {
            request.swapiData = { count: starships.length, next: null, previous: null, results: starships };
            next();
        })
        .catch(error => {
            console.error('Error acquired during fetching starships from SWAPI.', error);
            response.status(500).send('Server error.');
        });
}

// Middleware to fetch species data from SWAPI
function fetchSpeciesData(request: ExtendedRequest<ApiResponse_Species>, response: Response, next: NextFunction) {
    fetchAllData<Specie>(`${species}`, 20)
    .then(species => {
        request.swapiData = { count: species.length, next: null, previous: null, results: species }
        next();
    })
    .catch(error => {
        console.error('Error acquired during fetching species from SWAPI.', error);
        response.status(500).send('Server error.');
    })
}

// Route to return the fetched data
app.get('/people', fetchCharactersData, (request: ExtendedRequest<ApiResponse_Character>, response: Response) => {
    response.json(request.swapiData)
});

app.get('/starships', fetchStarshipsData, (request: ExtendedRequest<ApiResponse_Starships>, response: Response) => {
    response.json(request.swapiData)
});

app.get('/species', fetchSpeciesData, (request: ExtendedRequest<ApiResponse_Species>, response: Response) => {
    response.json(request.swapiData)
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});