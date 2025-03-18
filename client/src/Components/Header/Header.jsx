/*import { Link } from "react-router-dom";
import "./Header.css";*/

/*const Header = () => {
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
};*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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


//export default Header;