import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type tokensListStateType = {
  +tokensList: number
};

export type Action = {
  +type: string
};

export type GetState = () => tokensListStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
