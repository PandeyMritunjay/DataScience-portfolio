"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useState, useEffect } from "react";

const SpotlightCursor = () => {
  const mousePosition = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="splight-cursor pointer-events-none fixed z-30"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

export default SpotlightCursor;
