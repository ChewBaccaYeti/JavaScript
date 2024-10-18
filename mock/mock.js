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
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const override = (0, cors_1.default)();
const dock = 3842;
const source = 'https://64f77a149d77540849539f7e.mockapi.io/random';
app.use((0, cors_1.default)({
    origin: '*', // Разрешает запросы с любых доменов
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.listen(dock, () => {
    console.log(`Server running on ${dock}.`);
});
function fetchArray(url, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let results = [];
        let link = url;
        while (link && results.length < limit) {
            const response = yield axios_1.default.get(link);
            const { results: newResults } = response.data;
            results = results.concat(newResults);
            if (results.length >= limit) {
                results = results.slice(0, limit); // Обрезаю массив до определенного количества
                break; // Прерываю операцию
            }
        }
        ;
        return results;
    });
}
function autoRequest(request, response, next) {
    fetchArray(source, 25).then(randoms => {
        request.mockArray = { count: randoms.length, random: randoms };
        next();
    }).catch(function (error) {
        console.error('Error acquired during fetching data.', error);
        response.status(500).send('Server error.');
    });
}
;
