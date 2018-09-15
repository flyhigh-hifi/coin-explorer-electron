// @flow
import { GET_TOKENS, GET_TOKENS_SUCCESS, GET_TOKENS_FAIL } from '../actions/tokensList';

import type { Action, TokensListStateType } from './types';

const defaultState = {
  tokens: new Map(),
  tokensLoading: false,
  tokensError: false
};

export default function tokensList(
  state: TokensListStateType = defaultState,
  action: Action
) {
  switch (action.type) {
    case GET_TOKENS:
      return { ...state, tokensLoading: true, tokensError: false };
    case GET_TOKENS_SUCCESS:
      return {
        ...state,
        tokens: new Map(action.payload.tokens.map(token => [token.name, token])),
        tokensLoading: false,
        tokensError: false
      };
    case GET_TOKENS_FAIL:
      return { ...state, tokensLoading: false, tokensError: true };
    default:
      return state;
  }
}
