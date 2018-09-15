import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type TokensListStateType = {
  tokens: Map<string, Token>,
  +tokensLoading: boolean,
  +tokensError: boolean
};

export type Token = {
  +name: string,
  +address: string,
  +rate: string
};

export type Action = {
  +type: string
};

export type GetState = () => tokensListStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
