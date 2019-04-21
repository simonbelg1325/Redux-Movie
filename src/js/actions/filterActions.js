import {
  FILTER_MOVIE,
  FILTER_GAME,
  FILTER_SERIES,
  FILTER_EPISODE,
  FILTER_YEAR,
  FILTER_POSTER,
} from './types';

export const filterMovie = () => ({ type: FILTER_MOVIE });
export const filterGame = () => ({ type: FILTER_GAME });
export const filterSeries = () => ({ type: FILTER_SERIES });
export const filterEpisode = () => ({ type: FILTER_EPISODE });
export const filterPoster = () => ({ type: FILTER_POSTER });
export const filterYear = year => ({
  type: FILTER_YEAR,
  payload: year,
});
