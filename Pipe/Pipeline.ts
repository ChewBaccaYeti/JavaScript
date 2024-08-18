import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import { ApiResponse, ExtendedRequest  } from './types';

const app = express();
const PORT = 3030;

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Middleware to fetch data from SWAPI
function fetchData(request: ExtendedRequest, response: Response, next: NextFunction) {
    axios.get<ApiResponse>('https://swapi.dev/api')
        .then(function (apiResponse) {
            request.swapiData = apiResponse.data;
            next();
        })
        .catch(function (error) {
            console.error('Error acquired during fetching data from SWAPI.', error);
            response.status(500).send('Server error.');
        });
}

// Route to return the fetched data
app.use(fetchData)
.get('/people', (request: ExtendedRequest, response: Response) => {
    response.json(request.swapiData)
}).get('/planets', (request: ExtendedRequest, response: Response) => {
    response.json(request.swapiData)
}).listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
})
