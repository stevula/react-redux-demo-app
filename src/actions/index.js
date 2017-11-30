export const REQUEST_CONTRIBUTORS = 'REQUEST_CONTRIBUTORS';
export const requestContributors = () => {
  return { type: REQUEST_CONTRIBUTORS };
};

export const REQUEST_CONTRIBUTORS_FAIL = 'REQUEST_CONTRIBUTORS_FAIL';
export const requestContributorsFail = (error) => {
  return { type: REQUEST_CONTRIBUTORS_FAIL, error };
};

export const RECEIVE_CONTRIBUTORS = 'RECEIVE_CONTRIBUTORS';
export const receiveContributors = (contributors) => {
  return { type: RECEIVE_CONTRIBUTORS, contributors };
};

export const SET_FILTER = 'SET_FILTER';
export const setFilter = (startsWith) => {
  return { type: SET_FILTER, startsWith };
};

export const UPVOTE = 'UPVOTE';
export const upvote = (id) => {
  return { type: UPVOTE, id };
};

export const DOWNVOTE = 'DOWNVOTE';
export const downvote = (id) => {
  return { type: DOWNVOTE, id };
};

export function fetchContributors(subreddit) {
  return function(dispatch) {
    dispatch(requestContributors(subreddit));
    return fetch('https://api.github.com/repos/reactjs/redux/contributors')
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => dispatch(requestContributorsFail(error))
      )
      .then(response => dispatch(receiveContributors(response)));
  }
}
