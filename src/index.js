import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import VisibleContributors from './containers/VisibleContributors';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import contributors from './contributors.js';

const store = createStore(reducers, { contributors });

ReactDOM.render(
  <Provider store={store} >
    <VisibleContributors />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
