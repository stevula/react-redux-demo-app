import { UPVOTE, DOWNVOTE } from '../actions';

const contributors = (state = [], action) => {
  switch (action.type) {
    case UPVOTE:
      return state.map((contributor) => {
        if (contributor.id === action.id) {
          return {
            ...contributor,
            votes: contributor.votes + 1
          }
        }
        return contributor;
      })
    case DOWNVOTE:
      return state.map((contributor) => {
        if (contributor.id === action.id) {
          return {
            ...contributor,
            votes: contributor.votes - 1
          }
        }
        return contributor;
      })
    default:
      return state;
  }
};

export default contributors;
