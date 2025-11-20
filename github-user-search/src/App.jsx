import React, { useState } from "react";
import Search from "./components/Search";
import { fetchAdvancedUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (criteria) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers(criteria);
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {/* Conditional Rendering */}
      {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Display Results */}
      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {users.length > 0 &&
          users.map((user) => (
            <div
              key={user.id}
              className="border p-4 rounded shadow bg-white flex flex-col items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                className="rounded-full mb-4"
              />
              <h2 className="font-semibold text-lg">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;