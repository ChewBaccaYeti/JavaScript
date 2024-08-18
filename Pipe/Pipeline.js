"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3030;
// Serve static files from the directory
app.use(express_1.default.static(path_1.default.join(__dirname)));
// Middleware to fetch data from SWAPI
function fetchData(request, response, next) {
    axios_1.default.get('https://swapi.dev/api/people')
        .then(function (apiResponse) {
        request.swapiData = apiResponse.data;
        next();
    })
        .catch(function (error) {
        console.error('Error acquired during fetching data from SWAPI.', error);
        response.status(500).send('Server error.');
    });
}
app.use(fetchData);
// Route to return the fetched data
app.get('/people', (request, response) => {
    response.json(request.swapiData);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
});
