import { combineReducers } from 'redux';
import isFetching from './isFetching';
import contributors from './contributors';
import filterStartsWith from './filterStartsWith';

const reducers = combineReducers({
  isFetching,
  contributors,
  filterStartsWith,
});

export default reducers;
