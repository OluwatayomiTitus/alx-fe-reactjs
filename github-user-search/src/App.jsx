import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <SearchBar username={username} setUsername={setUsername} />
    </div>
  );
}

export default App;
