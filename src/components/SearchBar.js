import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="search__bar">
      <h2>Find your next home</h2>
      <input
        className="search__input"
        type="text"
        value={props.searchTerm}
        placeholder="Search"
        onChange={props.handleChange}
      />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;
