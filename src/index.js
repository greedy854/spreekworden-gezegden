import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutUs from "./AboutUs"; // Import the About Us page
import SettingsPage from "./SettingsPage"; // Import the Settings page
import TermsPage from "./TermsPage"; // Import the Terms page
import PrivacyPage from "./PrivacyPage"; // Import the Privacy Policy page
import Quiz from "./Quiz"; // Import the Privacy Policy page
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
        <Route path="/settings" element={<SettingsPage />} /> {/* Settings page route */}
        <Route path="/gebruikersvoorwaarden" element={<TermsPage />} /> {/* Gebruikersvoorwaarden route */}
        <Route path="/privacyverklaring" element={<PrivacyPage />} /> {/* Privacyverklaring route */}
        <Route path="/quiz" element={<Quiz />} /> {/* Privacyverklaring route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
