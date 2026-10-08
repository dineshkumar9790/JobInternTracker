import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>Job</span>Track
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/dashboard" className="dashboard-link">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;