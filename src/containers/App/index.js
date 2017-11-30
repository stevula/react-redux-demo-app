import React from 'react';
import { Container } from 'react-materialize'
import SiteHeader from '../../components/SiteHeader';
import Search from '../../components/Search';
import VisibleContributors from '../VisibleContributors';

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
