import React from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';
import VoteButton from '../VoteButton';

const ContributorCard = ({
  avatar_url,
  id,
  login,
  onClickDownvote,
  onClickUpvote,
  votes,
}) => {
  return (
    <CollectionItem className="avatar">
      {/* avatar */}
      <img
        className="circle"
        src={avatar_url}
        alt={`avatar for ${login}`}
      />

      {/* username */}
      <span className="title" >{login}</span>

      {/* vote count */}
      <p>Votes: {votes}</p>

      {/* upvote */}
      <VoteButton
        onClick={(e) => {
          e.preventDefault();
          onClickUpvote(id);
        }}
      >
        <Icon>thumb_up</Icon>
      </VoteButton>

      {/* downvote */}
      <VoteButton
        onClick={(e) => {
          e.preventDefault();
          onClickDownvote(id);
        }}
      >
        <Icon>thumb_down</Icon>
      </VoteButton>
    </CollectionItem>
  );
};

ContributorCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  onClickDownvote: PropTypes.func.isRequired,
  onClickUpvote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};


/**
<a href="#!" className="secondary-content" role="button" >
  <Icon>thumb_up</Icon>
</a>

<a href="#!" className="secondary-content" role="button" style={{ right: 48 }} >
  <Icon>thumb_down</Icon>
</a>
*/

export default ContributorCard;