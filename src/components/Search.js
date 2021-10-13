import React from 'react';

const Search = ({ searchText, filterOnChange }) => {
  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        onChange={filterOnChange}
        value={searchText}
      />
    </section>
  );
};

export default Search;
