import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import { Map } from 'immutable';

export type TokensListStateType = {
  +tokens: Map<string, Token>,
  +tokensLoading: boolean,
  +tokensError: boolean,
  +tokenAverageLoading: boolean,
  +tokenAverageError: boolean
};

export type FilterStateType = {
  +filterValue: string
};

export type Token = {
  +name: string,
  +address: string,
  +rate: string
};

export type Tokens = Map<string, Token>;

export type Action = {
  +type: string
};

export type GetState = () => TokensListStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
