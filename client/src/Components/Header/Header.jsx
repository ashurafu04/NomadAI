import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <header className="header">
        <h1 className="logo">NomadAI</h1>
        <nav className="nav">
          <Link to="/destinations" className="link">Destinations</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/how-it-works" className="link">How It Works</Link>
          <Link to="/contact" className="link">Contact Us</Link>
        </nav>
        <button className="searchButton">Search</button>
      </header>
    );
  };
  
  export default Header;