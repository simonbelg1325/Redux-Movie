import produce from 'immer';
import { FETCH_MOVIES } from '../actions/types';
import { movieState } from '../store/movieState';

export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return produce(state, draft => {
        draft.length = 0;
        draft.push(...action.payload);
      });
    default:
      return state;
  }
};
