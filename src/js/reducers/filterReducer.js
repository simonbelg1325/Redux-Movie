import produce from 'immer';
import {
  FILTER_MOVIE,
  FILTER_GAME,
  FILTER_SERIES,
  FILTER_EPISODE,
  FILTER_YEAR,
  FILTER_POSTER,
} from '../actions/types';
import { filterState } from '../store/filterState';

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      return produce(state, draft => {
        draft.movie = !state.movie;
      });
    case FILTER_GAME:
      return produce(state, draft => {
        draft.game = !state.game;
      });
    case FILTER_SERIES:
      return produce(state, draft => {
        draft.series = !state.series;
      });
    case FILTER_EPISODE:
      return produce(state, draft => {
        draft.episode = !state.episode;
      });
    case FILTER_YEAR:
      return produce(state, draft => {
        draft.year = action.payload;
      });
    case FILTER_POSTER:
      return produce(state, draft => {
        draft.poster = !state.poster;
      });
    default:
      return state;
  }
};
