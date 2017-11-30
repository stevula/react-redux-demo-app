import React from 'react';
import { Container } from 'react-materialize'
import SiteHeader from '../SiteHeader';
import Search from '../Search';
import VisibleContributors from '../../containers/VisibleContributors';

const App = () => {
  return (
    <Container>
      <SiteHeader />
      <Search />
      <VisibleContributors />
    </Container>
  );
};

export default App;
