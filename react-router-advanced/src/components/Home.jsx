import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>

      <nav>
        <Link to="/profile">Profile</Link><br />
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
