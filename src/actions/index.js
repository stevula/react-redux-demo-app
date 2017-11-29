export const SET_FILTER = 'SET_FILTER';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

export const setFilter = (startsWith) => {
  return {
    type: SET_FILTER,
    startsWith
  };
};

export const upvote = (id) => {
  return {
    type: UPVOTE,
    id
  };
};

export const downvote = (id) => {
  return {
    type: DOWNVOTE,
    id
  };
};
