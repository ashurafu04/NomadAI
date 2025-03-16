import "./ExploreCity.css"; // Import the CSS file

const ExploreCity = ({ image, title, text }) => {
  return (
    <div className="explore-city">
      {/* Image */}
      <img src={image} alt={title} />
      {/* Content */}
      <div className="content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default ExploreCity;
