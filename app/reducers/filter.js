// @flow
import { CHANGE_FILTER } from '../actions/filter';

import type { Action, FilterStateType } from './types';

const defaultState = {
  filterValue: ''
};

export default function filter(state: FilterStateType = defaultState, action: Action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filterValue: action.payload.filter };
    default:
      return state;
  }
}
