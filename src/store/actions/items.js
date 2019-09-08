import { createActions } from 'redux-actions';
import ItemsService from '@services/itemsService';

import {
  LOAD_ITEMS_LIST
} from '@constants'

export const {
  loadItemsList
} = createActions(
  LOAD_ITEMS_LIST
);

export const getItemsList = () => dispatch => dispatch(loadItemsList({ promise: ItemsService.getAll() }));
