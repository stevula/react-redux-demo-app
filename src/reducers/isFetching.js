import {
  REQUEST_CONTRIBUTORS,
  REQUEST_CONTRIBUTORS_FAIL,
  RECEIVE_CONTRIBUTORS
} from '../actions';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CONTRIBUTORS:
      return true;
    case REQUEST_CONTRIBUTORS_FAIL:
    case RECEIVE_CONTRIBUTORS:
      return false;
    default:
      return false;
  }
};

export default isFetching;
