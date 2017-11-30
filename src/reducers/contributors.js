import { UPVOTE, DOWNVOTE, RECEIVE_CONTRIBUTORS } from '../actions';

// the list of contributors including their votes/score
const contributors = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CONTRIBUTORS:
      return action.contributors.map((contributor) => {
        return {
          ...contributor,
          votes: 0
        };
      });
    case UPVOTE:
      return state.map((contributor) => {
        if (contributor.id === action.id) {
          return {
            ...contributor,
            votes: contributor.votes + 1
          };
        }
        return contributor;
      })
    case DOWNVOTE:
      return state.map((contributor) => {
        if (contributor.id === action.id) {
          return {
            ...contributor,
            votes: contributor.votes - 1
          };
        }
        return contributor;
      })
    default:
      return state;
  }
};

export default contributors;
