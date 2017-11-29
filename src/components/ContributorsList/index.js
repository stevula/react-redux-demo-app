import React from 'react';
import PropTypes from 'prop-types';
import { Collection } from 'react-materialize';
import ContributorCard from '../ContributorCard';

const ContributorsList = ({ contributors, onClickUpvote, onClickDownvote }) => {
  return (
    <Collection>
      {
        contributors.map((contributor) => {
          return (
            <ContributorCard
              key={contributor.id}
              {...contributor}
              onClickUpvote={onClickUpvote}
              onClickDownvote={onClickDownvote}
            />
          );
        })
      }
    </Collection>
  );
};

ContributorsList.propTypes = {
  contributors: PropTypes.array.isRequired,
};

export default ContributorsList;
