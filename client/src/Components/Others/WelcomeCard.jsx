import './WelcomeCard.css';

const WelcomeCard = () => {
    return (
      <div className="card">
        <h1>
          Discover{' '}
          <span>
            <span>Morocco</span>
            <span></span>
          </span>{' '}
          with <span style={{ fontWeight: 'bold' }}>Nomad AI</span>
        </h1>
        <p>
          Experience Morocco like never before with Nomad AI, your intelligent
          travel assistant. We offer personalized trip planning, virtual tours,
          and voice interaction to enhance your journey.
        </p>
        <div>
          <button>Learn More</button>
          <button>Explore Now</button>
        </div>
      </div>
    );
};

export default WelcomeCard;