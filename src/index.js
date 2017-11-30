import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// Endpoint: https://api.github.com/repos/reactjs/redux/contributors

registerServiceWorker();
