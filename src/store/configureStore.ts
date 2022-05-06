import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { testReducer } from './user/reducer';

const store = createStore(
  combineReducers({
    testReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
