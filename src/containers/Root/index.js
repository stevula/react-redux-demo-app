import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import contributors from '../../contributors.js';
import App from '../App';

const store = createStore(reducers, { contributors });

class Root extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
}

export default Root;
