import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default App;
