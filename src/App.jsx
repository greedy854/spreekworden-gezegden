import "./App.css";
import { useState, useEffect } from "react";
import { Card, Button, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for routing
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";
import info from "./assets/info.svg";

// Import the quotes from the JSON file
import quotesData from "./quotes.json"; // Adjust the path if needed

// Import images for the slideshow
import images from "./images"; // images is an array of image objects with 'src' and 'tags'

// Language Images (7 images below the quotes)
const languageImages = [
  {
    src: "/dutch-flag.png",
    alt: "Dutch Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/english-flag.png",
    alt: "English Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/french-flag.png",
    alt: "French Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/spain-flag.png",
    alt: "Spanish Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/german-flag.png",
    alt: "German Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/italy-flag.png",
    alt: "Italian Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
  {
    src: "/russian-flag.png",
    alt: "Russian Flag",
    href: "kan pas gebeurt zijn wanneer website online is ",
  },
];

function App() {
  const [active, setActive] = useState(0); // Active menu state
  const [quote, setQuote] = useState(""); // State for the quote
  const [author, setAuthor] = useState(""); // State for the quote author
  const [searchQuery, setSearchQuery] = useState(""); // State for quote search query
  const [imageSearchQuery, setImageSearchQuery] = useState(""); // State for image search query
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for image index
  const [filteredImages, setFilteredImages] = useState(images); // State for filtered images
  const [likedImages, setLikedImages] = useState([]);
  const goToLikedImages = () => {
    setActive(5); // You can create a new page or section for liked images
  };


  const toggleLike = () => {
    const currentImage = filteredImages[currentImageIndex];
    const isAlreadyLiked = likedImages.some((image) => image.src === currentImage.src);

    if (isAlreadyLiked) {
      // Remove the image from liked images if already liked
      setLikedImages(likedImages.filter((image) => image.src !== currentImage.src));
    } else {
      // Add the image to liked images
      setLikedImages([...likedImages, currentImage]);
    }
  };


  // Alphabet array for the 26 letters
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  // Split alphabet into two parts for two rows
  const firstRow = alphabet.slice(0, 13); // First 13 letters
  const secondRow = alphabet.slice(13, 26); // Last 13 letters

  useEffect(() => {
    // Set the first quote on initial load
    setRandomQuote();
  }, []);

  // Set a random quote
  const setRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex].quote);
    setAuthor(quotesData[randomIndex].author);
  };

  // Handle quote search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterQuotes(query); // Filter quotes based on search query
  };

  // Filter quotes based on the search query (searching in quote text or author)
  const filterQuotes = (query) => {
    if (!query) {
      setRandomQuote(); // Reset to a random quote if no search query
    } else {
      const filtered = quotesData.filter(
        (quote) =>
          quote.quote.toLowerCase().includes(query.toLowerCase()) ||
          quote.author.toLowerCase().includes(query.toLowerCase())
      );

      if (filtered.length > 0) {
        setQuote(filtered[0].quote);
        setAuthor(filtered[0].author);
      } else {
        setQuote("No quotes found.");
        setAuthor("");
      }
    }
  };
  useEffect(() => {
    // Function to set a random quote
    const setRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setQuote(quotesData[randomIndex].quote);
      setAuthor(quotesData[randomIndex].author);
    };

    // Set an interval to update the quote every 10 seconds
    const interval = setInterval(() => {
      setRandomQuote();
    }, 10000);

    // Set the first quote on initial load
    setRandomQuote();

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle image search query change
  const handleImageSearchChange = (e) => {
    const query = e.target.value;
    setImageSearchQuery(query); // Update the image search query separately
    filterImages(query); // Filter images based on search query
  };

  // Filter images based on the search query (searching within tags)
  const filterImages = (query) => {
    if (!query) {
      setFilteredImages(images); // Show all images if no search query
    } else {
      const filtered = images.filter(
        (image) =>
          image.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          ) // Check if any tag matches the search query
      );
      setFilteredImages(filtered); // Set filtered images
    }
  };

  // Handle image change
  const goToNextImage = () => {
    if (filteredImages.length === 0) return; // Prevent going to next image if no images left
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % filteredImages.length
    );
  };

  const goToPreviousImage = () => {
    if (filteredImages.length === 0) return; // Prevent going to previous image if no images left
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  // Share the quote using the Web Share API
  const shareQuote = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Inspirational Quote",
          text: `${quote} — ${author}`,
          url: window.location.href,
        })
        .then(() => console.log("Quote shared successfully!"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device or browser.");
    }
  };

  // Download Image Function
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = filteredImages[currentImageIndex].src;
    link.download = `image-${currentImageIndex + 1}.jpg`; // Change the file format if needed
    link.click();
  };

  return (
    <div className="App">
      {/* Logo Section */}
      <div className="logo-container">
        <a href="">
          <img src="/Logo.png" alt="Logo" className="logo" />
        </a>
      </div>
      {/* Content Section */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* Slideshow Image Display */}
        <div className="image-container">
          {/* Arrow Buttons */}
          <div className="arrow-buttons">
            <Button
              className="arrow-button-left-arrow"
              onClick={goToPreviousImage}
            >
              <i className="fas fa-arrow-left"></i>
            </Button>
            {filteredImages.length > 0 && (
            <img
              src={filteredImages[currentImageIndex].src}
              alt="Slideshow"
              className="slideshow-image"
            />
          )}
            <Button
              className="arrow-button-right-arrow"
              onClick={goToNextImage}
            >
              <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
        </div>

        <div className="heart-icon-container">
          <button onClick={toggleLike} className="heart-button">
            <img src={rss} alt="Heart Icon" className="heart-icon" />
          </button>
        </div>


        <div className="liked-images-section">
          <h3>Your Liked Images</h3>
          <div className="liked-images-gallery">
            {likedImages.length > 0 ? (
              likedImages.map((image, index) => (
                <div key={index} className="liked-image-item">
                  <img src={image.src} alt={`Liked ${index}`} />
                </div>
              ))
            ) : (
              <p>No liked images yet.</p>
            )}
          </div>
        </div>


        {/* Download Button */}
        <div className="poep">
          <Button className="download-button" onClick={downloadImage}>
            Download Image
          </Button>
        </div>
        {/* Image Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <i className="search-icon fas fa-search"></i>
            <input
              type="text"
              value={imageSearchQuery}
              onChange={handleImageSearchChange}
              placeholder="Spreekwoorden zoeken"
              className="search-input"
            />
          </div>
        </div>

        {/* Language Header for Dutch */}
        <div className="language-header">
          <img src="/dutch-flag.png" alt="Dutch Flag" className="flag-image" />
          <span className="language-text">Nederlands</span>
        </div>

        {/* Alphabet Circles for Dutch */}
        <div className="alphabet-circles">
          <div className="circle-row">
            {firstRow.map((letter, index) => (
              <div key={index} className="circle">
                {letter}
              </div>
            ))}
          </div>
          <div className="circle-row">
            {secondRow.map((letter, index) => (
              <div key={index} className="circle">
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Quote Card */}
        <div className="quote">
          <Card className="bg-light">
            <Card.Body className="text-center my-4">
              <Card.Text>"{quote}"</Card.Text>
              <Card.Text className="text-end">--- {author}</Card.Text>
              <Button className="bg-transparent mt-3" onClick={shareQuote}>
                <i className="fa-solid fa-link"></i>{" "}
                <span className="btn-text">Share</span>
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Language Images Section */}
        <div className="language-images">
          {languageImages.map((image, index) => (
            <React.Fragment key={index}>
              <a href={`#${image.alt.toLowerCase()}`} className="language-link">
                <img src={image.src} alt={image.alt} className="language-img" />
              </a>
              {index < languageImages.length - 1 && (
                <span className="separator"> - </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Quote Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <i className="search-icon fas fa-search"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Quotes zoeken"
              className="search-input"
            />
          </div>
        </div>

        {/* Language Header for English */}
        <div className="language-header">
          <img
            src="/english-flag.png"
            alt="English Flag"
            className="flag-image"
          />
          <span className="language-text">Engels</span>
          <span className="language-text">Coming soon!</span>
          <span className="language-text">2025-2026</span>
        </div>

        {/* Alphabet Circles for English */}
        <div className="alphabet-circles">
          <div className="circle-row">
            {firstRow.map((letter, index) => (
              <div key={index} className="circle">
                {letter}
              </div>
            ))}
          </div>
          <div className="circle-row">
            {secondRow.map((letter, index) => (
              <div key={index} className="circle">
                {letter}
              </div>
            ))}
          </div>
        </div>
        {/* Two Images Below the Alphabet Circles for English */}
        <div className="additional-images">
          <div className="image-container2">
            <button
              className="share-button"
              onClick={() => {
                const shareData = {
                  title: "Check out this image!",
                  text: "Here is an image I wanted to share with you.",
                  url: window.location.origin + "/btm-img1.png",
                };
                if (navigator.share) {
                  navigator
                    .share(shareData)
                    .catch((error) => console.error("Error sharing", error));
                } else {
                  alert("Sharing is not supported in your browser.");
                }
              }}
            >
              <img
                src="/btm-img2.png"
                alt="Second Image"
                className="additional-image"
              />
            </button>
          </div>
          <div className="image-container">
            <img
              src="/btm-img1.png"
              alt="First Image"
              className="additional-image"
            />
          </div>
        </div>
      </div>
      <div>
        <h1>{[][active]}</h1>
      </div>
      <nav className="navbar">
        <div
          className={active === 0 ? "active" : ""}
          onClick={() => setActive(0)}
        >
          <Link to="/">
            <img src={home} alt="Home" />
          </Link>
        </div>
        <div
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        >
          <Link to="/about-us">
            <img src={info} alt="About us" />
          </Link>
        </div>
        <div
          className={active === 2 ? "active" : ""}
          onClick={goToLikedImages}
        >
          <Link to="/liked-images">
            <img src={rss} alt="Heart Icon" className="heart-icon" />
          </Link>
        </div>
        <div
          className={active === 3 ? "active" : ""}
          onClick={() => setActive(3)}
        >
          <Link to="/settings">
            <img src={settings} alt="Settings" />
          </Link>
        </div>
        <div
          className={active === 4 ? "active" : ""}
          onClick={() => setActive(4)}
        >
          <Link to="/quiz">
            <img src={settings} alt="quiz" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
