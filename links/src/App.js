// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import Verification from "./components/verification";
import "./App.css"; // Assuming you have a CSS file for styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
