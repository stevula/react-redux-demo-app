import {
  REQUEST_CONTRIBUTORS,
  REQUEST_CONTRIBUTORS_FAIL,
  RECEIVE_CONTRIBUTORS
} from '../actions';

// whether contributors data is pending response from GitHub
const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CONTRIBUTORS:
      return true;
    case REQUEST_CONTRIBUTORS_FAIL:
      // TODO: create a separate error state and render error
      console.log('error: ', action.error);
      return false;
    case RECEIVE_CONTRIBUTORS:
      return false;
    default:
      return false;
  }
};

export default isFetching;
