// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import tokensList from './tokensList';
import filter from './filter';

const rootReducer = combineReducers({
  tokensList,
  filter,
  router
});

export default rootReducer;
