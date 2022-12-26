import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <label>Enter Search Term</label>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
