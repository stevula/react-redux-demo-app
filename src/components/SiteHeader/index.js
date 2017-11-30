import React from 'react';
import { Navbar } from 'react-materialize'
import './styles.css';
import reduxLogo from '../../redux-logo.png';

// top bar with site logo
const SiteHeader = () => {
  // NOTE: logo height = $navbar-height from materialize-css:
  // https://github.com/Dogfalo/materialize/blob/f66e68e8455464c77c252a8149e872d86056ca04/sass/components/_variables.scss#L238
  // there is a slight difference on mobile but 64 looks good enough for both
  const logo = <img src={reduxLogo} height="64" alt="Redux logo" />
  return <Navbar className='teal lighten-4' brand={logo} />;
};

export default SiteHeader;
