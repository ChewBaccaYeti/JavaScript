import { Request } from 'express';

export interface ExtendedRequest extends Request {
    swapiData?: ApiResponse; // Теперь типизируем swapiData как ApiResponse
    // Типизируй как `any` или более конкретно, если знаешь структуру данных
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}
