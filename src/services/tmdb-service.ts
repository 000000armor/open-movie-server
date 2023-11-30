import axios, { Method } from 'axios';
import { envConfig } from '../config/env-config.js';

export class TmdbService {
  private fetch(url: string, method: Method = 'GET') {
    return axios(url, {
      method,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${envConfig.TMDB_TOKEN}`,
      },
    });
  }

  searchMovies(query: string) {
    return this.fetch(`${envConfig.TMDB_BASE_URL}/search/movie?query=${query}`);
  }
}
