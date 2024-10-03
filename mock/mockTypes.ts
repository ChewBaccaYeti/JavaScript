import { Request } from 'express';

export interface ExtendedRequest<X> extends Request {
    mockArray: X;
}

export interface Human {
    
}