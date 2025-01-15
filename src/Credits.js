import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assuming the provided CSS is in App.css or relevant CSS file
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";
import info from "./assets/info.svg";
import quiz from "./assets/quiz.svg";

const PrivacyPage = () => {
  const [active, setActive] = useState(1); // Initially, the "Heart" (rss) icon should be active

  return (
    <div className="App2">
      {/* Logo Section */}
      <div className="logo-header">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      <div className="content-container">
        {/* Privacy Content */}
        <div className="card">
          <div className="card-body">
            <h2>Credits</h2>
            <p className="card-text">
              <h1>Wie hebben aan dit project gewerkt?</h1>
              <h2>Developers</h2>
              <p>Sem Bruijnesteijn</p>
              <p>Kjell Durge</p>
              <h2>Logo</h2>
              <p>Jada Benjamin</p>
              <p>Seth Walker</p>
              <p>Maria López Correa.</p>
              <h2>Prototype</h2>
              <p>Seth Walker</p>
              <h2>Rest</h2>
              <p>Isis Pankeet </p>
              <p>Thomas Pallarés Sikkes </p>
              <p>Yuna Tydall</p>
              <p>Mandy Rasenberg </p>
              <p>Anna Seijsener </p>
              <p>Femke Klomp </p>
              <p>Yuna Tydall </p>
              <p>Maan Dekker 1-20 </p>
              <p>Rayan Fari 21 – ….. </p>
              <p>Anna Seijsener 1-37 </p>
              <p>Femke Klomp </p>
              <p>Cheverney Adams </p>
              <p>Vanja Jakovljevic 161-322 </p>
              <h3>Versie: februari 2025</h3>
            </p>
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

export default PrivacyPage;
