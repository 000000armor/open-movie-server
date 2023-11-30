import { TmdbService } from './tmdb-service.js';
import { NextFunction, Request } from 'express';

export class Services {
  tmdb = new TmdbService();
}

export const services = new Services();

export const extendContextWithServices = (req: Request, _res: Response, next: NextFunction) => {
  req.services = services;
  next();
};
