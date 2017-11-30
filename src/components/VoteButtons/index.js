import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';
import VoteButton from '../VoteButton';

// upvote and downvote UI
const VoteButtons = ({ onClickUpvote, onClickDownvote }) => {
  return (
    <div>
      {/* upvote */}
      <VoteButton onClick={onClickUpvote} >
        <Icon>thumb_up</Icon>
      </VoteButton>

      {/* downvote */}
      <VoteButton onClick={onClickDownvote} >
        <Icon>thumb_down</Icon>
      </VoteButton>
    </div>
  );
};

VoteButtons.propTypes = {
  onClickDownvote: PropTypes.func.isRequired,
  onClickUpvote: PropTypes.func.isRequired,
};

export default VoteButtons;