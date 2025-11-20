import React, { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white shadow rounded"
    >
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Minimum repositories..."
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default Search;