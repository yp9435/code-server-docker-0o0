import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
      <span style={{ fontWeight: "bold", color: "#a259ff", marginRight: "1rem" }}>
        ⚡ React + code-server
      </span>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/code-editor">Code Editor</Link>
    </nav>
  );
}