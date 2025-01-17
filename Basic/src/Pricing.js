import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom"; // If you're using React Router for routing
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";
import info from "./assets/info.svg";
import quiz from "./assets/quiz.svg";

const PricingTable = () => {
  const [active, setActive] = useState(); // Active menu state

  return (
    <div className="pricing-table">
      <h1>Select uw Plan</h1>
      <div className="plans">
        {/* Trial Plan */}
        <div className="plan">
          <h2>Proefversie - 3 dagen</h2>
          <ul>
            <li>
              <span className="no1">✖</span> Toegang tot 20 plaatjes
            </li>
            <li>
              <span className="no1">✖</span> Op spreekwoorden zoeken
            </li>
            <li>
              <span className="no1">✖</span> Op betekenis zoeken
            </li>
            <li>
              <span className="no1">✖</span> Plaatjes doorsturen
            </li>
            <li>
              <span className="no1">✖</span> Geen downloads
            </li>
            <li>
              <span className="yes1">✔</span> Quizen spelen beperkt
            </li>
            <li>
              <span className="no1">✖</span> Eigen quizen maken
            </li>
          </ul>
          <p className="price">€0.00 / maand</p>
          <button>Probeer 3 dagen gratis</button>
        </div>

        {/* Basic Plan */}
        <div className="plan2">
          <h2>Basis Abonnement</h2>
          <ul>
            <li>
              <span className="yes1">✔</span> Toegang tot 20 plaatjes
            </li>
            <li>
              <span className="yes1">✔</span> Op spreekwoorden zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Op betekenis zoeken
            </li>
            <li>
              <span className="yes1">✔</span> 5 plaatjes per maand doorsturen
            </li>
            <li>
              <span className="yes1">✔</span> 5 plaatjes per maand downloaden
            </li>
            <li>
              <span className="yes1">✔</span> Quizen spelen
            </li>
            <li>
              <span className="yes1">✔</span> Eigen quizen maken
            </li>
          </ul>
          <p className="price">€2.99 / maand</p>
          <button>Koop nu!</button>
        </div>

        {/* Premium Plan */}
        <div className="plan2">
          <h2>Premium Abonnement</h2>
          <ul>
            <li>
              <span className="yes1">✔</span> Toegang tot alle plaatjes
            </li>
            <li>
              <span className="yes1">✔</span> Op spreekwoorden zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Op betekenis zoeken
            </li>
            <li>
              <span className="yes1">✔</span> 20 plaatjes per maand doorsturen
            </li>
            <li>
              <span className="yes1">✔</span> 20 plaatjes per maand downloaden
            </li>
            <li>
              <span className="yes1">✔</span> Quizen spelen
            </li>
            <li>
              <span className="yes1">✔</span> Eigen quizen maken
            </li>
          </ul>
          <p className="price">€3.99 / maand</p>
          <button>Koop nu!</button>
        </div>

        {/* Professional Plan */}
        <div className="plan2">
          <h2>Professional Abonnement</h2>
          <ul>
            <li>
              <span className="yes1">✔</span> Toegang tot alle plaatjes
            </li>
            <li>
              <span className="yes1">✔</span> Op spreekwoorden zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Op betekenis zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Onbeperkt plaatjes per maand
              doorsturen
            </li>
            <li>
              <span className="yes1">✔</span> Onbeperkt plaatjes downloaden
            </li>
            <li>
              <span className="yes1">✔</span> Quizen spelen
            </li>
            <li>
              <span className="yes1">✔</span> Eigen quizen maken
            </li>
          </ul>
          <p className="price">€5.99 / maand</p>
          <button>Koop nu!</button>
        </div>

        {/* Education Plan */}
        <div className="plan2">
          <h2>Onderwijsinstelling abonnement</h2>
          <ul>
            <li>
              <span className="yes1">✔</span> Toegang tot alle plaatjes
            </li>
            <li>
              <span className="yes1">✔</span> Op spreekwoorden zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Op betekenis zoeken
            </li>
            <li>
              <span className="yes1">✔</span> Onbeperkt plaatjes per maand
              doorsturen
            </li>
            <li>
              <span className="yes1">✔</span> Onbeperkt plaatjes downloaden
            </li>
            <li>
              <span className="yes1">✔</span> Quizen spelen
            </li>
            <li>
              <span className="yes1">✔</span> Eigen quizen maken
            </li>
          </ul>
          <p className="price">€9.99 / maand</p>
          <button>Koop nu!</button>
        </div>
      </div>
      <nav className="navbar2">
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
        <div className={active === 2 ? "active" : ""}>
          <Link to="/pricing">
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
  );
};

export default PricingTable;
