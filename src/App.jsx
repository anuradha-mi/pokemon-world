import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import CardPage from "./Pages/CardPage";
import CustomCursor from "./Components/customCursor/CustomCursor";
import "./App.css";

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <div className="snap-container">
        <section className="snap-section">
          <HomePage />
        </section>
        <section className="snap-section">
          <CardPage />
        </section>
      </div>
    </Router>
  );
}

export default App;