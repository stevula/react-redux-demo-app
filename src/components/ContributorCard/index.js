import React from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';
import VoteButton from '../VoteButton';

const ContributorCard = ({
  avatar_url,
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
      <p>Votes: {votes}</p>

      <VoteButton onClick={onClickUpvote} value={1} >
        <Icon>thumb_up</Icon>
      </VoteButton>

      <VoteButton onClick={onClickDownvote} value={-1} >
        <Icon>thumb_down</Icon>
      </VoteButton>
    </CollectionItem>
  );
};

ContributorCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
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
