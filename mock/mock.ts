import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const override = cors();
const dock = 3842;
const source = 'https://64f77a149d77540849539f7e.mockapi.io/random';

async function fetchArray<X>(url: string): Promise<X[]> {
    let results: X[] = [];

    while(source) {
        const {}
    }
}

async function fetch(request: ExtendedRequest<Human>, response: Response, next: NextFunction) {
    fetch.
}