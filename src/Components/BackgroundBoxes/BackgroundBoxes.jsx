import React, { useState, useEffect, useRef } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function BackgroundBoxes({
  width = 80,
  height = 140,
  gapX = 10,
  gapY = 10,
  grid = [42, 5],
  className = "",
  rectClassName = "",
  borderRadius = 8,
  ...props
}) {
  const [columns, rows] = grid;
  const [hoveredRect, setHoveredRect] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);

  const totalWidth = columns * (width + gapX);
  const totalHeight = rows * (height + gapY);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (
        mouseX >= -100 &&
        mouseX <= rect.width + 100 &&
        mouseY >= -100 &&
        mouseY <= rect.height + 100
      ) {
        setMousePos({ x: mouseX, y: mouseY });

        // Calculate column and row for active box highlight
        const col = Math.floor(mouseX / (width + gapX));
        const row = Math.floor(mouseY / (height + gapY));

        if (col >= 0 && col < columns && row >= 0 && row < rows) {
          setHoveredRect(row * columns + col);
        } else {
          setHoveredRect(null);
        }
      } else {
        setHoveredRect(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [columns, rows, width, height, gapX, gapY]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none", className)}
    >
      {/* Background Radial Glow behind text & image */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.35) 0%, rgba(239, 68, 68, 0.15) 180px, transparent 350px)
          `,
        }}
      />

      {/* Skewed Box Grid */}
      <svg
        width={totalWidth}
        height={totalHeight}
        className="absolute inset-0 h-full w-full pointer-events-none"
        {...props}
      >
        {Array.from({ length: columns * rows }).map((_, index) => {
          const col = index % columns;
          const row = Math.floor(index / columns);
          const x = col * (width + gapX);
          const y = row * (height + gapY);

          const isHovered = hoveredRect === index;

          return (
            <g key={index} transform={`translate(${x}, ${y}) skewX(-15)`}>
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                rx={borderRadius}
                ry={borderRadius}
                className={cn(
                  "stroke-slate-800/80 transition-all duration-300 ease-out [&:not(:hover)]:duration-1000",
                  isHovered
                    ? "fill-purple-600/70 stroke-purple-400"
                    : "fill-transparent",
                  rectClassName
                )}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default BackgroundBoxes;
