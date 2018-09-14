// @flow
import { GET_TOKENS, GET_TOKENS_SUCCESS, GET_TOKENS_FAIL } from '../actions/tokensList';

import type { Action } from './types';

type State = {
  +tokens: Array<{
    +name: string,
    +address: string,
    +rate: string
  }>,
  +tokensLoading: boolean,
  +tokensError: boolean
};

const defaultState = {
  tokens: [],
  tokensLoading: false,
  tokensError: false
};

export default function tokensList(state: State = defaultState, action: Action) {
  switch (action.type) {
    case GET_TOKENS:
      return { ...state, tokensLoading: true, tokensError: false };
    case GET_TOKENS_SUCCESS:
      return {
        ...state,
        tokens: action.payload.tokens,
        tokensLoading: false,
        tokensError: false
      };
    case GET_TOKENS_FAIL:
      return { ...state, tokensLoading: false, tokensError: true };
    default:
      return state;
  }
}
