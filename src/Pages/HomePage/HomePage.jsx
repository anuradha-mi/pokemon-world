import React, { useEffect, useRef } from "react";
import "./HomePage.css";
import pokemonBanner from "../../assets/groupPokemons.png";
import { gsap } from "gsap";

const HomePage = () => {
  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    // Add a subtle background fade-in
  

    // Title with glowing and bounce-in motion
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.3,
        ease: "elastic.out(1, 0.7)",
      }
    )
      // Paragraph fade-in with slight delay and upward motion
      .fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      // Button pop + scale effect
      .fromTo(
        buttonRef.current,
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      // Pokémon image parallax-like slide with rotation
      .fromTo(
        imageRef.current,
        { x: 120, opacity: 0, rotate: 5, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1"
      );

    // Subtle floating effect for the Pokémon image (infinite loop)
    gsap.to(imageRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="home" ref={homeRef}>
      <div className="home-content">
        <h1 ref={titleRef}>
          Welcome to <span>PokéWorld</span> 🌍
        </h1>
        <p ref={textRef}>
          Discover your favorite Pokémon, explore their powers, and dive into the
          ultimate adventure where trainers and legends unite.
        </p>
        <button className="explore-btn" ref={buttonRef}>
          Explore Now
        </button>
      </div>

      <div className="home-image">
        <img ref={imageRef} src={pokemonBanner} alt="Pokémon Banner" />
      </div>
    </section>
  );
};

export default HomePage;
