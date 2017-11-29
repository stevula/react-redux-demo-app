import React from 'react';
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

export default ContributorsList;
