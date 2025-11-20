import React from "react";

const SearchBar = ({ username, setUsername }) => {
  return (
    <input
      type="text"
      placeholder="Search GitHub username..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      style={{ padding: "0.5rem", width: "100%" }}
    />
  );
};

export default SearchBar;
