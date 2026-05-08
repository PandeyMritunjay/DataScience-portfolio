'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const navLinks = ['about', 'skills', 'experience', 'education', 'projects'];

  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY > 80 && delta > 6) setHidden(true);
        if (delta < -6) setHidden(false);

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* LEFT TOP - RESUME */}
      <motion.a
        href="https://drive.google.com/file/d/1sDdnDEQUMfyNy2M_1eSwazplsbOg5jg9/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed top-8 left-[2cm] z-[100]
          overflow-hidden
          inline-flex items-center justify-center gap-2
          rounded-[15px]
          px-8 py-3
          min-w-[120px] h-[52px]
          text-white text-[16px] font-semibold
          shadow-[0_0_35px_rgba(255,0,170,0.35)]
          pointer-events-auto
        "
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Rainbow Background */}
        <span
          className="
            absolute inset-0
            bg-[linear-gradient(170deg,#ffe600_0%,#00d4ff_30%,#ff00b7_60%,#ffb300_100%)]
          "
        />

        {/* Wavy Gloss */}
        <span
          className="
            absolute inset-0
            opacity-60
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.28) 48%, transparent 62%)",
            clipPath:
              "polygon(0 40%, 15% 46%, 28% 42%, 40% 54%, 55% 46%, 70% 57%, 85% 48%, 100% 56%, 100% 100%, 0 100%)",
          }}
        />

        {/* Glow */}
        <span
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_35%)]
          "
        />

        {/* Text */}
        <span className="relative z-10 whitespace-nowrap">
          Resume
        </span>

        {/* Arrow */}
        <svg
          className="relative z-10"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </motion.a>

      {/* RIGHT TOP - MEETING */}
      <motion.a
        href="https://calendly.com/mritunjaypandey0429/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed top-8 left-[33cm] z-[60]
          relative overflow-hidden
          inline-flex items-center justify-center
          rounded-[18px]
          px-8 py-3
          min-w-[180px] h-[52px]
          text-white text-[16px] font-normal
          shadow-[0_0_35px_rgba(255,0,170,0.35)]
        "
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Rainbow Background */}
        <span
          className="
            absolute inset-0
            bg-[linear-gradient(20deg,#ffe500_10%,#00d4ff_10%,#ff00b7_60%,#ffb300_100%)]
          "
        />

        {/* Wavy Gloss */}
        <span
          className="
            absolute inset-0
            opacity-60
          "
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.28) 48%, transparent 62%)",
            clipPath:
              "polygon(0 40%, 15% 46%, 28% 42%, 40% 54%, 55% 46%, 70% 57%, 85% 48%, 100% 56%, 100% 100%, 0 100%)",
          }}
        />

        {/* Glow */}
        <span
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_150%)]
          "
        />

        {/* Text */}
        <span className="relative z-10 whitespace-nowrap">
          Schedule a Meeting
        </span>
      </motion.a>

      {/* NAVBAR */}
      <motion.header
        className="fixed top-8 left-[2cm] right-[1cm] z-50"
        animate={hidden ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: hidden ? "none" : "auto" }}
      >
        <div className="max-w-7xl w-full flex items-center justify-center">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className="
                  text-[#A1A1AA]
                  text-sm
                  font-medium
                  hover:text-white
                  transition-colors
                  capitalize
                "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
}