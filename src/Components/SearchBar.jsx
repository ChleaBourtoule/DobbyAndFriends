import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';

const SearchBar = ({ searchName, setSearchName }) => {
  return (
    <div className="containerSearch">
      <div className="searchBar">
        <div>
          <form>
            {/* <label htmlFor="search">Enter the name</label> */}
            <input
              className="searchbar"
              type="text"
              value={searchName}
              id="search"
              placeholder=""
              onChange={(e) => setSearchName(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchName: PropTypes.string.isRequired,
  setSearchName: PropTypes.func.isRequired,
};
export default SearchBar;
