import React, { useEffect, useRef } from "react";
import pokemonBanner from "../../assets/groupPokemons.png";
import { gsap } from "gsap";
import BackgroundBoxes from "../../Components/BackgroundBoxes/BackgroundBoxes";

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
    <section className="flex items-center justify-center p-0 h-screen w-full box-border text-white overflow-hidden relative bg-slate-950" ref={homeRef}>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[8%] pt-28 pb-12 w-full h-full relative overflow-hidden">
        <BackgroundBoxes className="z-0 pointer-events-auto" />
        <div className="flex-1 max-w-[600px] z-10 text-center lg:text-left">
          <h1 ref={titleRef} className="text-[2.6rem] lg:text-[3.5rem] font-bold leading-[1.2] text-white mb-6">
            Welcome to <span className="text-amber-400 [text-shadow:0_0_14px_rgba(250,204,21,0.8)]">PokéWorld</span> 🌍
          </h1>
          <p ref={textRef} className="mt-3 text-base lg:text-[1.15rem] leading-[1.7] text-slate-200 opacity-95 max-w-[520px] mx-auto lg:mx-0">
            Discover your favorite Pokémon, explore their powers, and dive into the
            ultimate adventure where trainers and legends unite.
          </p>
          <button
            ref={buttonRef}
            onClick={() => {
              const cardsEl = document.getElementById("cards");
              if (cardsEl) cardsEl.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 border-none text-slate-900 font-bold text-base rounded-xl cursor-pointer shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 relative z-20"
          >
            Explore Now
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center z-10 mt-6 lg:mt-0">
          <img ref={imageRef} src={pokemonBanner} alt="Pokémon Banner" className="w-[320px] lg:w-[480px] drop-shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-transform duration-300 ease-in-out hover:scale-[1.05]" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
