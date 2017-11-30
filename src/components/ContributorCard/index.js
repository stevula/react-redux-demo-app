import React from 'react';
import PropTypes from 'prop-types';
import { CollectionItem } from 'react-materialize';
import PersonInfo from '../PersonInfo';
import VoteButtons from '../VoteButtons';

// card showing information and vote buttons for a contributor
// TODO camelize the snakecase fields (unchanged from GH response)
const ContributorCard = ({
  avatar_url,
  html_url,
  id,
  login,
  onClickDownvote,
  onClickUpvote,
  votes,
}) => {
  return (
    <CollectionItem className="avatar">
      <PersonInfo
        image={avatar_url}
        login={login}
        profile={html_url}
        votes={votes}
      />

      <VoteButtons
        onClickUpvote={() => onClickUpvote(id)}
        onClickDownvote={() => onClickDownvote(id)}
      />
    </CollectionItem>
  );
};

ContributorCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  onClickDownvote: PropTypes.func.isRequired,
  onClickUpvote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};

export default ContributorCard;
