import { services } from '../services/index.js';

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Express {
    // eslint-disable-next-line no-unused-vars
    export interface Request {
      services: typeof services;
    }
  }
}
