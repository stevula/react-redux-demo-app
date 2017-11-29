import { SET_FILTER } from '../actions';

const filterStartsWith = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.startsWith;
    default:
      return state;
  }
};

export default filterStartsWith;
