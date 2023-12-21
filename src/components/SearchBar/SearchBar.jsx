import "./SearchBar.css";
import React from "react";

function SearchBar({ searchHandle }) {
  return (
    <div>
      <input onChange={searchHandle} type="text"></input>
    </div>
  );
}

export default SearchBar;
