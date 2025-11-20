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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} width="80" className="rounded-full" />
            <h2 className="font-semibold">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
