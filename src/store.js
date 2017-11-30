import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

// for logging actions to console
const loggerMiddleware = createLogger();

// redux store
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

export default store;
