import { SEARCH_MOVIES } from './types';

export const searchMovie = str => ({
  type: SEARCH_MOVIES,
  payload: str,
});
