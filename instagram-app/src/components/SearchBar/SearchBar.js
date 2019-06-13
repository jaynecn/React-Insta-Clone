import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="insta">
        <div>
          <img src="https://bit.ly/2I8aHOn"alt="insta" id="insta"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBUKxm-jPyGj0Hr0Z1J7kHkjc3WMAwUZ68qPY81ij1rY9v6Gl" alt="instagramlogo" id="logo"/>
        </div>
      </div>
      <div className="search-form">
        <form>
        <input defaultValue="search"
          type="text"
        />
        </form>
      </div>
      <div className="corner-icons">
        <img src="https://bit.ly/2RcSd2c" alt="compass"/>
        <img src="https://bit.ly/2I8lPKU" alt="heart"/>
        <img src="https://bit.ly/2R88EMW" alt="spiderman"/>
      </div>
    </div>
  );
}

export default SearchBar;