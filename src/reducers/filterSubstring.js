import { SET_FILTER } from '../actions';

const filter = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.contains;
    default:
      return state;
  }
};

export default filter;
