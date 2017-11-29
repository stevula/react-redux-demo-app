import React from 'react';
import PropTypes from 'prop-types';
import { Collection } from 'react-materialize';
import ContributorCard from '../ContributorCard';

const ContributorsList = ({ contributors }) => {
  return (
    <Collection>
      {
        contributors.map((contributor) => {
          return <ContributorCard key={contributor.id} {...contributor} />;
        })
      }
    </Collection>
  );
};

ContributorsList.propTypes = {
  contributors: PropTypes.array.isRequired,
};

export default ContributorsList;
