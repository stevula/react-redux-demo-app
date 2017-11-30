import GitHubApi from 'github';

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

export const fetchContributors = () => {
  const github = new GitHubApi();

  return async (dispatch) => {
    dispatch(requestContributors());

    try {
      const contributors = await fetchAllPages();
      dispatch(receiveContributors(contributors));
    } catch (error) {
      dispatch(requestContributorsFail(error));
    }
  }

  async function fetchAllPages() {
    let result = await github.repos.getContributors({
      owner: 'reactjs',
      repo: 'redux',
      per_page: 100,
      page: 1
    });
    let contributors = result.data;

    let nextPage = github.hasNextPage(result);
    while (nextPage) {
      result = await github.getNextPage(result);
      contributors = contributors.concat(result.data);
      nextPage = github.hasNextPage(result);
    }

    return contributors;
  }
};
