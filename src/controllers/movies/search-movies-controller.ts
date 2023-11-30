import { Request, Response } from 'express';

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  const { keywords } = req.query;

  if (!keywords || typeof keywords !== 'string') {
    res.status(400).json({ message: 'Please provide search keywords.' });

    return;
  }

  try {
    const response = await req.services.tmdb.searchMovies(keywords);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while searching for movies.', error: error.message });
  }
};
