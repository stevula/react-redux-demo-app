import GitHubApi from 'github';

// initiate request for contributors list
export const REQUEST_CONTRIBUTORS = 'REQUEST_CONTRIBUTORS';
export const requestContributors = () => {
  return { type: REQUEST_CONTRIBUTORS };
};

// handle error in requesting contributors list
export const REQUEST_CONTRIBUTORS_FAIL = 'REQUEST_CONTRIBUTORS_FAIL';
export const requestContributorsFail = (error) => {
  return { type: REQUEST_CONTRIBUTORS_FAIL, error };
};

// update the list of contributors with the contributors response data
export const RECEIVE_CONTRIBUTORS = 'RECEIVE_CONTRIBUTORS';
export const receiveContributors = (contributors) => {
  return { type: RECEIVE_CONTRIBUTORS, contributors };
};

// filter contributors based on starting chars of login name
export const SET_FILTER = 'SET_FILTER';
export const setFilter = (startsWith) => {
  return { type: SET_FILTER, startsWith };
};

// add 1 to a contributor score
export const UPVOTE = 'UPVOTE';
export const upvote = (id) => {
  return { type: UPVOTE, id };
};

// subtract 1 from a contributor score
export const DOWNVOTE = 'DOWNVOTE';
export const downvote = (id) => {
  return { type: DOWNVOTE, id };
};

// fetch all pages of GitHub contributors for reactjs/redux
export const fetchContributors = () => {
  const github = new GitHubApi();

  return async (dispatch) => {
    dispatch(requestContributors());

    let result;
    try {
      result = await github.repos.getContributors({
        owner: 'reactjs',
        repo: 'redux',
        per_page: 100,
        page: 1
      });
    } catch (error) {
      // TODO use to render error view
      dispatch(requestContributorsFail(error));
    }

    let contributors = result.data;
    // dispatch now so user doesn't have to wait for all pages to be fetched
    // NOTE: if user votes while pages are still being fetched the vote will
    // be lost. TODO need to check if contributor already fetched first.
    dispatch(receiveContributors(contributors));

    let nextPage = github.hasNextPage(result);
    while (nextPage) {
      try {
        result = await github.getNextPage(result);
      } catch (error) {
        // TODO handle situation where some pages succeed but others fail.
        // e.g. retry logic / manual refresh ?
        dispatch(requestContributorsFail(error));
      }
      contributors = contributors.concat(result.data);
      // dispatch a more complete contributors list on each page fetch
      dispatch(receiveContributors(contributors));
      nextPage = github.hasNextPage(result);
    }
  }
};
