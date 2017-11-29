import React from 'react';
import { Input, Icon } from 'react-materialize';

const Search = () => {
  return (
    // NOTE: not using the react-materialize's <Input> implementation since it
    // implements search input differently
    <form>
      <div className="input-field">
        <input id="search" type="search" required placeholder="Search contributors" />
        <label className="label-icon" htmlFor="search">
          <Icon>search</Icon>
        </label>
        <Icon>close</Icon>
      </div>
    </form>
  );
};

export default Search;
