"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3030;
const people = 'https://swapi.dev/api/people';
const starships = 'https://swapi.dev/api/starships';
const species = 'https://swapi.dev/api/species';
// Serve static files from the directory
app.use(express_1.default.static(path_1.default.join(__dirname)));
// Middleware to fetch ALL data for designated endpoints below
function fetchAllData(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, limit = 20) {
        let results = [];
        let nextUrl = url;
        while (nextUrl && results.length < limit) {
            const response = yield axios_1.default.get(nextUrl);
            results = results.concat(response.data.results); // Сшиваю данные между собой
            if (results.length >= limit) {
                results = results.slice(0, limit); // Обрезаю массив до определенного количества
                break; // Прерываю операцию
            }
            nextUrl = response.data.next; // Переход на следующий ендпоинт
        }
        return results;
    });
}
// Middleware to fetch characters data from SWAPI
function fetchCharactersData(request, response, next) {
    fetchAllData(`${people}`, 20)
        .then(characters => {
        request.swapiData = { count: characters.length, next: null, previous: null, results: characters };
        next();
    })
        .catch(function (error) {
        console.error('Error acquired during fetching characters from SWAPI.', error);
        response.status(500).send('Server error.');
    });
}
;
// Middleware to fetch starships data from SWAPI
function fetchStarshipsData(request, response, next) {
    fetchAllData(`${starships}`, 20)
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
function fetchSpeciesData(request, response, next) {
    fetchAllData(`${species}`, 20)
        .then(species => {
        request.swapiData = { count: species.length, next: null, previous: null, results: species };
        next();
    })
        .catch(error => {
        console.error('Error acquired during fetching species from SWAPI.', error);
        response.status(500).send('Server error.');
    });
}
// Route to return the fetched data
app.get('/people', fetchCharactersData, (request, response) => {
    response.json(request.swapiData);
});
app.get('/starships', fetchStarshipsData, (request, response) => {
    response.json(request.swapiData);
});
app.get('/species', fetchSpeciesData, (request, response) => {
    response.json(request.swapiData);
});
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
