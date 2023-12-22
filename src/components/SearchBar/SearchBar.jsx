import "./SearchBar.css";
import "./SearchBar.css";

function SearchBar({ searchHandle, placeholderTxt }) {
  return (
    <input
      onChange={searchHandle}
      placeholder={placeholderTxt}
      type="text"
    ></input>
  );
}

export default SearchBar;
