import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Grid,
  Layers,
  Info,
  Menu,
  X,
  Zap,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === "/cards") return "Pokémons";
    if (location.pathname === "/types") return "Types";
    if (location.pathname === "/about") return "About";
    return "Home";
  });

  const navLinks = [
    { name: "Home", path: "/", sectionId: "home", icon: Home },
    { name: "Pokémons", path: "/cards", sectionId: "cards", icon: Grid },
    { name: "Types", path: "/types", sectionId: "cards", icon: Layers },
    { name: "About", path: "/about", sectionId: "home", icon: Info },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle direct URL navigation
  useEffect(() => {
    if (location.pathname === "/cards") {
      const cardsEl = document.getElementById("cards");
      if (cardsEl) cardsEl.scrollIntoView({ behavior: "smooth" });
      setActiveTab("Pokémons");
    } else if (location.pathname === "/types") {
      const cardsEl = document.getElementById("cards");
      if (cardsEl) cardsEl.scrollIntoView({ behavior: "smooth" });
      setActiveTab("Types");
    } else if (location.pathname === "/about") {
      const homeEl = document.getElementById("home");
      if (homeEl) homeEl.scrollIntoView({ behavior: "smooth" });
      setActiveTab("About");
    } else if (location.pathname === "/") {
      const homeEl = document.getElementById("home");
      if (homeEl) homeEl.scrollIntoView({ behavior: "smooth" });
      setActiveTab("Home");
    }
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.name) {
      setActiveTab(link.name);
    }
    const targetElement = document.getElementById(link.sectionId || "home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/60 py-2.5"
          : "bg-slate-950/25 backdrop-blur-sm border-b border-slate-800/30 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={() => handleNavClick({ name: "Home", sectionId: "home" })}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {/* Simple Pokéball Icon */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700/80 shadow-sm overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-6 h-6">
                <path d="M 50 10 A 40 40 0 0 1 90 50 L 68 50 A 18 18 0 0 0 32 50 L 10 50 A 40 40 0 0 1 50 10 Z" fill="#ef4444" />
                <path d="M 10 50 L 32 50 A 18 18 0 0 0 68 50 L 90 50 A 40 40 0 0 1 10 50 Z" fill="#f8fafc" />
                <rect x="5" y="46" width="90" height="8" fill="#0f172a" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#0f172a" strokeWidth="6" />
                <circle cx="50" cy="50" r="10" fill="#0f172a" />
                <circle cx="50" cy="50" r="5" fill="#f8fafc" />
              </svg>
            </div>

            {/* Simple Title */}
            <span className="font-bold text-xl sm:text-2xl text-white tracking-wide">
              PokéWorld
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.name;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 select-none ${
                    isActive
                      ? "text-red-400 bg-slate-800/90 shadow-md border border-slate-700/60 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "text-red-400 scale-110" : "text-slate-500"
                    }`}
                  />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1.5 mt-2 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.name;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-red-500/15 to-transparent text-red-400 border-l-4 border-red-500 font-semibold"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-red-400" : "text-slate-400"}`} />
                <span>{link.name}</span>
                {isActive && (
                  <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-md bg-red-500/20 text-red-400">
                    Active
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-2 mt-2 border-t border-slate-800/60">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Dark Mode Active
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                v2.0
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
