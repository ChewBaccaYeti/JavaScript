import { Request } from 'express';

export interface ExtendedRequest<T> extends Request {
    swapiData?: T; // Теперь типизируем swapiData как  --> generic<T>
    // Типизируй как `any` или более конкретно, если знаешь структуру данных, но в данном случае я использую generic <T>
}

export interface Character {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
}

export interface Starship {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passenger: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
}

export interface ApiResponse_Character {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}

export interface ApiResponse_Starships {
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
}