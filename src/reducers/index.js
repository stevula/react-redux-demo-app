import { combineReducers } from 'redux';
import contributors from './contributors';
import filterStartsWith from './filterStartsWith';

const reducers = combineReducers({
  contributors,
  filterStartsWith,
});

export default reducers;
