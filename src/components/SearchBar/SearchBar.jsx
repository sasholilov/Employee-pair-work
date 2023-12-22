import "./SearchBar.css";
import "./SearchBar.css";

function SearchBar({ searchHandle, placeholderTxt, value }) {
  return (
    <input
      onChange={searchHandle}
      placeholder={placeholderTxt}
      type="text"
      value={value}
    ></input>
  );
}

export default SearchBar;
