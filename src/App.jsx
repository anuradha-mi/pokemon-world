import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import CardPage from "./Pages/CardPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#070b14] m-0 p-0 [scrollbar-width:thin] [scrollbar-color:#334155_#070b14]">
        <section id="home" className="h-screen w-full snap-start overflow-hidden relative bg-[#070b14] m-0 p-0">
          <HomePage />
        </section>
        <section id="cards" className="h-screen w-full snap-start overflow-hidden relative bg-[#070b14] m-0 p-0">
          <CardPage />
        </section>
      </div>
    </Router>
  );
}

export default App;