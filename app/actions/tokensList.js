// @flow
import type { Dispatch } from '../reducers/types';
import ethplorerApi from '../api/ethplorer';

export const GET_TOKENS = 'GET_TOKENS';
export const GET_TOKENS_SUCCESS = 'GET_TOKENS_SUCCESS';
export const GET_TOKENS_FAIL = 'GET_TOKENS_FAIL';

export function getTokens() {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_TOKENS });

    try {
      const tokens = await ethplorerApi.getTokens();

      dispatch({
        type: GET_TOKENS_SUCCESS,
        payload: tokens
      });
    } catch (error) {
      dispatch({
        type: GET_TOKENS_FAIL,
        error
      });
    }
  };
}
