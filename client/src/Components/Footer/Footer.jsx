import "./Footer.css";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nomadAi">Talk To Nomad</Link></li>
            <li><Link to="/features">Coming Soon</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>
            <span>Stay up-to-date with the latest Moroccan travel</span> <br />  
            <span>tips and exclusive Nomad AI offers.</span>  
          </p>
          <form>
            <br/>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Nomad AI. All rights reserved.</p>
        <div>
          <Link to="/terms-and-conditions">Terms and Conditions</Link> |{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;