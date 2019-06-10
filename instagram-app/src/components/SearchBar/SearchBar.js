import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="search-form">
        <form id="form">
        <input defaultValue="search"
          type="text"
        />
        </form>
      </div>
    </div>
  )
}

export default SearchBar;