// @flow
import type { Dispatch } from '../reducers/types';

export const CHANGE_FILTER = 'CHANGE_FILTER';

export function chahgeFilter(filter: string) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CHANGE_FILTER, payload: { filter } });
  };
}
