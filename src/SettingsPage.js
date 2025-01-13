import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assuming the provided CSS is in App.css or relevant CSS file
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";

const SettingsPage = () => {
  const [active, setActive] = useState(2); // Initially, the "Settings" icon should be active

  return (
    <div className="App2">
      {/* Logo Section */}
      <div className="logo-header">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      <div className="content-container">
        {/* Settings Content */}
        <div className="card">
          <div className="card-body2">
            <h2>Settings Dashboard</h2>
            <p className="card-text">
              Manage your settings and preferences here.
            </p>

            <div className="image-container3">
              <Link to="/gebruikersvoorwaarden">
                <button>Gebruikersvoorwaarden</button>
              </Link>
            </div>

            <div className="image-container4">
              <Link to="/privacyverklaring">
                <button>Privacyverklaring</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar */}
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
              <img src={rss} alt="Heart Icon" className="heart-icon" />
            </Link>
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <Link to="/settings">
              <img src={settings} alt="Settings" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SettingsPage;
