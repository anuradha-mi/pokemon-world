import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To detect active page

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="nav-logo">PokéWorld</div>

      {/* Hamburger Icon */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cards"
            onClick={() => setIsOpen(false)}
            className={location.pathname === "/cards" ? "active-link" : ""}
          >
            Pokémons
          </Link>
        </li>
        <li>
          <Link
            to="/types"
            onClick={() => setIsOpen(false)}
            className={location.pathname === "/types" ? "active-link" : ""}
          >
            Types
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
