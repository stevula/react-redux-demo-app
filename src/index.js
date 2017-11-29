import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'react-materialize'
import './index.css';
import SiteHeader from './components/SiteHeader';
import VisibleContributors from './containers/VisibleContributors';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import contributors from './contributors.js';

const store = createStore(reducers, { contributors });

ReactDOM.render(
  <Provider store={store} >
    <Container>
      <SiteHeader />
      <VisibleContributors />
    </Container>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
