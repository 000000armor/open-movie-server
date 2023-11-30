import { Router } from 'express';
import { moviesController } from '../controllers/movies/index.js';

export const moviesRoutes = Router();

moviesRoutes.get('/search', moviesController.searchMovies);
