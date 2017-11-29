import { combineReducers } from 'redux';
import contributors from './contributors';
import filterSubstring from './filterSubstring';

const reducers = combineReducers({
  contributors,
  filterSubstring,
});

export default reducers;
