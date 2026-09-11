import { Link } from "react-router-dom";

function Sidebar({ logout }) {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>

      <ul>

        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/cases">📂 Cases</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

      </ul>

      <button onClick={logout}>Logout</button>
    </aside>
  );
}

export default Sidebar;