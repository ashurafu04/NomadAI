import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">NomadAI</h1>
      <nav className="nav">
        <Link to="/destinations" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          Talk To Nomad
        </Link>
        <Link to="/how-it-works" className="link">
          Coming Soon
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
