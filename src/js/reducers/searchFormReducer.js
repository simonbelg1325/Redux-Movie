import { SEARCH_MOVIES } from '../actions/types';
import { searchState } from '../store/searchState';

export const searchFormReducer = (state = searchState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
