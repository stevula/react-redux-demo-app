import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';
import VoteButton from '../VoteButton';

const VoteButtons = ({ onClickUpvote, onClickDownvote }) => {
  return (
    <div>
      {/* upvote */}
      <VoteButton
        onClick={(e) => {
          e.preventDefault();
          onClickUpvote();
        }}
      >
        <Icon>thumb_up</Icon>
      </VoteButton>

      {/* downvote */}
      <VoteButton
        onClick={(e) => {
          e.preventDefault();
          onClickDownvote();
        }}
      >
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