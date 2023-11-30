import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envConfigSchema = z.object({
  PORT: z.string().default('3000'),
  TMDB_BASE_URL: z.string(),
  TMDB_TOKEN: z.string(),
});
export const envConfig = envConfigSchema.parse(process.env);
