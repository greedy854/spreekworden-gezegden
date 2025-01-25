import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutUs from "./AboutUs";
import SettingsPage from "./SettingsPage";
import TermsPage from "./TermsPage";
import PrivacyPage from "./PrivacyPage";
import Credits from "./Credits";
import Quiz from "./Quiz";
import Pricing from "./Pricing";
import reportWebVitals from "./reportWebVitals";

const routes = [
  { path: "/", element: <App /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/gebruikersvoorwaarden", element: <TermsPage /> },
  { path: "/privacyverklaring", element: <PrivacyPage /> },
  { path: "/credits", element: <Credits /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/pricing", element: <Pricing /> },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
