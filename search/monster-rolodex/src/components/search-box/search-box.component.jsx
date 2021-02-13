import React from 'react';
import './search-box.style.css';

function SearchBox({ change, placeholder }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={change}
    />
  );
}

export default SearchBox;
