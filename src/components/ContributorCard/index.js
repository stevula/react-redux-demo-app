import React from 'react';
import { CollectionItem } from 'react-materialize';

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
      <span className="title">{props.login}</span>
    </CollectionItem>
  );
};

export default ContributorCard;
