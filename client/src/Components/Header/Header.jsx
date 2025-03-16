import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">NomadAI</h1>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/nomadAi" className="link">Talk To Nomad</Link>
        <Link to="/features" className="link">Coming Soon</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
      <button className="search-button">Search</button>
    </header>
  );
};

export default Header;