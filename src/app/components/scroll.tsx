// components/Scroll.tsx
"use client";
import React, { useState, useEffect, CSSProperties } from "react";

export interface ScrollProps {
  /** URL of the stripe image */
  bgImage: string;
  /** Size of each tile in CSS syntax (e.g., "30px 30px", "2rem") */
  tileSize?: string;
  /** How many px to move each frame (defaults to 0.5) */
  speed?: number;
  /** Scroll direction */
  direction?: "left" | "right" | "up" | "down";
  /** Additional CSS classes for the wrapper */
  className?: string;
}

const Scroll: React.FC<ScrollProps> = ({
  bgImage,
  tileSize = "30px 30px",
  speed = 0.5,
  direction = "left",
  className = "",
}) => {
  const [{ x, y }, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // compute delta per frame
    const deltaX =
      direction === "left" ? -speed : direction === "right" ? speed : 0;
    const deltaY =
      direction === "up" ? -speed : direction === "down" ? speed : 0;

    const interval = setInterval(() => {
      setScroll((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [direction, speed]);

  const style: CSSProperties = {
    backgroundImage: `url('${bgImage}')`,
    backgroundRepeat: "repeat",
    backgroundSize: tileSize,
    backgroundPosition: `${x}px ${y}px`,
  };

  return <div className={className} style={style} />;
};

export default Scroll;
