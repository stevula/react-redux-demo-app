import React from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';

const ContributorCard = (props) => {
  return (
    <CollectionItem className="avatar">
      {/* avatar */}
      <img
        className="circle"
        src={props.avatar_url}
        alt={`avatar for ${props.login}`}
      />

      {/* username */}
      <span className="title" >{props.login}</span>
      <p>Votes: {props.votes}</p>

      {/* upboat */}
      <a href="#!" className="secondary-content" role="button" >
        <Icon>thumb_up</Icon>
      </a>

      {/* downboat */}
      <a href="#!" className="secondary-content" role="button" style={{ right: 48 }} >
        <Icon>thumb_down</Icon>
      </a>
    </CollectionItem>
  );
};

ContributorCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default ContributorCard;
