export const SET_FILTER = 'SET_FILTER';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

export const setFilter = (substring) => {
  return {
    action: SET_FILTER,
    contains: substring
  };
};

export const upvote = () => {
  return { action: UPVOTE };
};

export const downvote = () => {
  return { action: DOWNVOTE };
};
