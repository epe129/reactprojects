import { Link } from "react-router-dom";

const Navbar = () => (
  <div style={{ textAlign: "center" }}>
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ float: "left", padding: "10px"}}>
          <Link to="/">See movies</Link>
        </li>
        <li style={{ float: "left", padding: "10px"}}>
          <Link to="/Search">Search movies</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar