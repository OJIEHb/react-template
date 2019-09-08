import { handleActions } from 'redux-actions';
import {
  LOAD_ITEMS_LIST_FULFILLED,
  LOAD_ITEMS_LIST_REJECTED,
} from '@constants';

const items = handleActions(
  {
    [LOAD_ITEMS_LIST_FULFILLED]: (state, action) => {
      const items = action.payload;
      return {
        ...state,
        itemsList: items,
      };
    },

    [LOAD_ITEMS_LIST_REJECTED]: (state, action) => {
      const errors = state.errors ? [ ...state.errors ] : [];
      return { ...state, errors: [ ...errors, action.payload ] };
    },
  },
  {},
);

export default items;
