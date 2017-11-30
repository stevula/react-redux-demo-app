import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import contributors from './contributors.js';
import App from './components/App';

const store = createStore(reducers, { contributors });

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// Endpoint: https://api.github.com/repos/reactjs/redux/contributors

registerServiceWorker();
