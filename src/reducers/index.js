import { combineReducers } from 'redux';
import contributors from './contributors';
import filter from './filter';

const reducers = combineReducers({
  contributors,
  filter,
});

export default reducers;
