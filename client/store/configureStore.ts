import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as userReducer } from './user/reducer';

const store = createStore(
  combineReducers({
    userReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
