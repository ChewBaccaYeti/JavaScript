import { Request } from 'express';

export interface ExtendedRequest<X> extends Request {
    mockArray: X;
}

export interface Random {
    createdAt: string;
    name: string;
    avatar: string;
    Job: string;
    Company: string;
    Section: string;
    Degree: {
        name: string;
        symbol: string
    };
    Role: string;
    Bank: string;
    Override: string;
    Address: string;
    id: string;
}

export interface ApiResponse {
    count: number;
    random: Random[];
}