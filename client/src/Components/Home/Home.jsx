import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import chefchaouen from "../../assets/chefchaouen.jpg";
import marrakesh from "../../assets/marrakesh.jpg";
import saharaDesert from "../../assets/sahara2.jpg";
const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Discover <span className="underline">Morocco</span> with
              <br />
              <span className="brand-name">Nomad AI</span>
            </h1>
            
            <p className="hero-description">
              Experience Morocco like never before with Nomad AI, your
              intelligent travel assistant. We offer personalized trip planning,
              virtual tours, and voice interaction to enhance your journey.
            </p>
            
            <div className="hero-buttons">
              <Link to="/learn-more" className="btn btn-light">Learn More</Link>
              <Link to="/explore" className="btn btn-orange">Explore Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="features-section">
        <div className="container">
          <h2>Why Travel with Nomad AI?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Personalized Planning</h3>
              <p>Customized itineraries based on your preferences, time, and budget.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-vr-cardboard"></i>
              </div>
              <h3>Virtual Tours</h3>
              <p>Explore destinations virtually before deciding where to go.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <h3>Voice Interaction</h3>
              <p>Talk to Nomad AI for real-time assistance during your journey.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="destinations-section">
        <div className="container">
          <h2>Popular Destinations</h2>
          
          <div className="destinations-grid">
            <div className="destination-card">
              <img src={marrakesh} alt="Marrakesh Photo" />
              <h3>Marrakech</h3>
              <p>Explore the bustling markets and historic medina</p>
              <Link to="/destinations/marrakech" className="btn btn-sm">Discover</Link>
            </div>
            
            <div className="destination-card">
              <img src={chefchaouen} alt="Chefchaouen Photo" />
              <h3>Chefchaouen</h3>
              <p>Visit the famous blue city in the Rif Mountains</p>
              <Link to="/destinations/chefchaouen" className="btn btn-sm">Discover</Link>
            </div>
            
            <div className="destination-card">
              <img src={saharaDesert} alt="Sahara Desert Photo" />
              <h3>Sahara Desert</h3>
              <p>Experience a magical night under the stars</p>
              <Link to="/destinations/sahara" className="btn btn-sm">Discover</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <h2>What Travelers Say</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Nomad AI transformed our Morocco experience. The personalized recommendations were spot on!"
              </div>
              <div className="testimonial-author">- Sarah, USA</div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Having a virtual assistant who understands Moroccan culture made our trip so much smoother."
              </div>
              <div className="testimonial-author">- David, UK</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;