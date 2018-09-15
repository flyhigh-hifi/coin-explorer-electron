// @flow
import { Map } from 'immutable';

import {
  GET_TOKENS,
  GET_TOKENS_SUCCESS,
  GET_TOKENS_FAIL,
  GET_TOKEN_AVERAGE_RATE,
  GET_TOKEN_AVERAGE_RATE_SUCCESS,
  GET_TOKEN_AVERAGE_RATE_FAIL
} from '../actions/tokensList';

import type { Action, TokensListStateType } from './types';

const defaultState = {
  tokens: Map(),
  tokensLoading: false,
  tokensError: false,
  tokenAverageLoading: false,
  tokenAverageError: false
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
        tokens: Map(action.payload.tokens.map(token => [token.name, token])),
        tokensLoading: false,
        tokensError: false
      };
    case GET_TOKENS_FAIL:
      return { ...state, tokensLoading: false, tokensError: true };
    case GET_TOKEN_AVERAGE_RATE:
      return { ...state, tokenAverageLoading: true, tokenAverageError: false };
    case GET_TOKEN_AVERAGE_RATE_SUCCESS:
      return {
        ...state,
        tokens: state.tokens.set(action.payload.tokenName, {
          ...state.tokens.get(action.payload.tokenName),
          rate: action.payload.rate
        }),
        tokenAverageLoading: false,
        tokenAverageError: false
      };
    case GET_TOKEN_AVERAGE_RATE_FAIL:
      return { ...state, tokenAverageLoading: false, tokenAverageError: true };
    default:
      return state;
  }
}
