import { SET_FILTER } from '../actions';

// substring from search field used to filter contributors
const filterStartsWith = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.startsWith;
    default:
      return state;
  }
};

export default filterStartsWith;
