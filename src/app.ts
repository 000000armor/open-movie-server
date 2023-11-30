import express, { RequestHandler } from 'express';
import { extendContextWithServices } from './services/index.js';
import { moviesRoutes } from './routes/movies-routes.js';

export const app = express();

app.use(extendContextWithServices as unknown as RequestHandler);
app.use(express.json()).use('/api/example', () => {});
app.use(moviesRoutes);
