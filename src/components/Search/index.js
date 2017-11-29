import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-materialize';
import { setFilter } from '../../actions';

let Search = ({ dispatch }) => {
  let input;

  return (
    // NOTE: not using the react-materialize's <Input> implementation since it
    // implements search input differently
    <form onSubmit={e => e.preventDefault()} >
      <div className="input-field">
        <input
          id="search"
          ref={node => { input = node; }}
          type="search"
          onChange={e => dispatch(setFilter(input.value))}
          placeholder="Search contributors"
          required
        />

        <label className="label-icon" htmlFor="search">
          <Icon>search</Icon>
        </label>

        <Icon>close</Icon>
      </div>
    </form>
  );
};

Search = connect()(Search);

export default Search;
