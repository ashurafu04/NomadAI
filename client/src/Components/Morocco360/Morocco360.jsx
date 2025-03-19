import React, { useState, useEffect, useRef } from "react";
import "./Morocco360.css";
import fez from "../../assets/fez.jpg";
import marrakech from "../../assets/marrakeshSouks.jpg";
import hassaniiMosque from "../../assets/hassaniiMosque.jpg";
import atlasMountains from "../../assets/atlasMountains.jpg";
import morrocanSahara from "../../assets/moroccanDesert.jpg";
import chefchaouen from "../../assets/chefchaouenCity.jpg";
const Morocco360 = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    // Add smooth scrolling if a location is selected
    if (selectedLocation) {
      setIsVideoLoading(true);

      setTimeout(() => {
        if (videoPlayerRef.current) {
          videoPlayerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [selectedLocation]);

  // Embed YouTube 360 video with proper parameters
  const embedYoutubeVideo = (videoId) => {
    return (
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
        title="YouTube 360 video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setIsVideoLoading(false)}
      ></iframe>
    );
  };

  // Moroccan destinations with 360° video IDs
  const destinations = [
    {
      id: 1,
      name: "Chefchaouen",
      description:
        "Explore the enchanting blue city nestled in the Rif Mountains.",
      image: chefchaouen, 
      videoId: "lBMWQJ4doPo", // Replace with actual 360° YouTube video ID
      location: "Northern Morocco"
    },
    {
      id: 2,
      name: "Sahara Desert",
      description:
        "Experience the vastness of golden sand dunes at sunrise and sunset.",
      image: morrocanSahara, // Replace with actual image
      videoId: "h0J86-B2ukg", // Replace with actual 360° YouTube video ID
      location: "Southern Morocco"
    },
    {
      id: 3,
      name: "Hassan II Mosque",
      description:
        "Marvel at the architectural masterpiece overlooking the Atlantic Ocean.",
      image: hassaniiMosque, // Replace with actual image
      videoId: "DlSE2rnO6mQ", // Replace with actual 360° YouTube video ID
      location: "Casablanca"
    },
    {
      id: 4,
      name: "Marrakech Souks",
      description:
        "Wander through the colorful markets filled with spices and crafts.",
      image: marrakech, // Replace with actual image
      videoId: "xUba8ho-_1c", // Replace with actual 360° YouTube video ID
      location: "Marrakech"
    },
    {
      id: 5,
      name: "Atlas Mountains",
      description:
        "Trek through breathtaking valleys and traditional Berber villages.",
      image: atlasMountains, // Replace with actual image
      videoId: "PE-MljUK7Ok", // Replace with actual 360° YouTube video ID
      location: "Central Morocco"
    },
    {
      id: 6,
      name: "Fez",
      description:
        "The timeless city where ancient traditions and vibrant culture inspire wonder at every turn.",
      image: fez, // Replace with actual image
      videoId: "HvKPqmqBXIE", // Replace with actual 360° YouTube video ID
      location: "Atlantic Coast"
    },
  ];

  const openVideo = (destination) => {
    setSelectedLocation(destination);
  };

  const closeVideo = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="morocco-content">
      {/* Banner Section */}
      <div className="morocco-banner">
        <div className="morocco-banner-content">
          <h1>Discover Morocco 360°</h1>
          <p>
            Experience the vibrant culture and breathtaking landscapes of
            Morocco through immersive 360° videos.
          </p>
        </div>
      </div>

      {/* Selected Location Video */}
      {selectedLocation && (
        <div className="morocco-video-container" ref={videoPlayerRef}>
          <div className="morocco-video-card">
            <div className="morocco-video-wrapper">
              {isVideoLoading && (
                <div className="morocco-loading">
                  <p>Loading 360° experience...</p>
                </div>
              )}
              {embedYoutubeVideo(selectedLocation.videoId)}
              <button
                onClick={closeVideo}
                className="morocco-close-button"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
            <div className="morocco-video-info">
              <h2>{selectedLocation.name} - 360° Experience</h2>
              <p>{selectedLocation.description}</p>
              <p className="morocco-video-instructions">
                <span className="morocco-instruction-icon">↖️</span>
                Click and drag to look around in 360°
                <span className="morocco-instruction-icon">↗️</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Destinations Grid */}
      <div className="morocco-destinations-container">
        <h2 className="morocco-section-title">
          Explore Moroccan Destinations in 360°
        </h2>
        <div className="morocco-destinations-grid">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="morocco-card"
              onClick={() => openVideo(destination)}
            >
              <div className="morocco-card-image-container">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="morocco-card-image"
                />
                <div className="morocco-play-button-overlay">
                  <div className="morocco-play-button">
                    <svg
                      className="morocco-play-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                {/* Location badge */}
                <div className="morocco-location-badge">{destination.location}</div>
              </div>
              <div className="morocco-card-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="morocco-experience-link">
                  <span>Experience in 360°</span>
                  <svg
                    className="morocco-arrow-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5L21 12L14 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Morocco360;