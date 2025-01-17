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
import quiz from "./assets/quiz.svg";

const SettingsPage = () => {
  const [active, setActive] = useState(4); // Initially, the "Settings" icon should be active

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

            <div className="image-container4">
              <Link to="/credits">
                <button>Credits</button>
              </Link>
            </div>
          </div>
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
            onClick={() => setActive(2)}
          >
            <Link to="/">
              <img src={rss} alt="Heart Icon" className="heart-icon" />
            </Link>
          </div>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <Link to="/quiz">
              <img src={quiz} alt="Quiz" />
            </Link>
          </div>
          <div
            className={active === 4 ? "active" : ""}
            onClick={() => setActive(4)}
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
