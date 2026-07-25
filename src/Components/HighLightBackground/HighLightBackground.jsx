import React, { useEffect, useState, useRef } from "react";

const HighLightBackground = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 356, y: 167 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-slate-950 overflow-hidden ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.22) 0%, rgba(245, 158, 11, 0.1) 200px, transparent 350px),
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.04) 150px, transparent 250px),
          radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 24px 24px",
        backgroundAttachment: "local",
      }}
    >
      {children}
    </div>
  );
};

export default HighLightBackground;
