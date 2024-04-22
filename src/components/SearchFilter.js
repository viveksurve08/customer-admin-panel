import React from "react";

const SearchFilter = ({ onSearch }) => {
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = debounce((searchTerm) => {
    onSearch(searchTerm);
  }, 700);

  const handleChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  return (
    <div className="searchFilterContainer">
      <input
        type="text"
        id="searchInput"
        placeholder="Search ID"
        onChange={handleChange}
        className="searchInput"
      />
    </div>
  );
};

export default SearchFilter;
