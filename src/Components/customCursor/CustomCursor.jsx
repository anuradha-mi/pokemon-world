import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    // Fast cursor movement
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.08,
      ease: "none",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.08,
      ease: "none",
    });

    // Glow follows cursor
    const glowX = gsap.quickTo(glow, "x", {
      duration: 0.12,
      ease: "none",
    });

    const glowY = gsap.quickTo(glow, "y", {
      duration: 0.12,
      ease: "none",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      glowX(e.clientX);
      glowY(e.clientY);

      gsap.to(cursor, {
        rotation: "+=15",
        duration: 0.15,
        overwrite: "auto",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.3,
        filter: "drop-shadow(0 0 25px #facc15)",
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        filter: "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
        duration: 0.2,
      });
    };

    const handleClick = () => {
      gsap.fromTo(
        cursor,
        {
          scale: 1.3,
          rotation: "+=90",
        },
        {
          scale: 1,
          rotation: "+=180",
          duration: 0.4,
          ease: "elastic.out(1,0.4)",
        }
      );
    };

    // Idle breathing
    gsap.to(cursor, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });

    // Glow pulse
    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.9,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    const interactives = document.querySelectorAll("a, button, .card");

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);

      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[55px] h-[55px] bg-[url('/Pokeball-Cursor.png')] bg-no-repeat bg-center bg-contain rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_0_5px_rgba(255,215,0,0.3))]"
      />

      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[60px] h-[60px] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-60 [background:radial-gradient(circle,rgba(250,204,21,0.25),rgba(0,0,0,0)_70%)]"
      />
    </>
  );
};

export default CustomCursor;