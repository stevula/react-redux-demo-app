import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-materialize';
import { setFilter } from '../../actions';

const Search = () => {
  return (
    // NOTE: not using the react-materialize's <Input> implementation since it
    // implements search input differently
    <form>
      <div className="input-field">
        <input
          id="search"
          type="search"
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

export default Search;
