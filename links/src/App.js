import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import Verification from "./components/verification";
import "./App.css"; // Assuming you have a CSS file for styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Navigate to="/terms-conditions" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;