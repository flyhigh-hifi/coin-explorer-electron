// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import tokensList from './tokensList';

const rootReducer = combineReducers({
  tokensList,
  router
});

export default rootReducer;
