import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../App';
import { fetchContributors } from '../../actions';

// fetch all pages of contributors from GitHub
store.dispatch(fetchContributors());

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
