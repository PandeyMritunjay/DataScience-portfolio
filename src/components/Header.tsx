'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const navLinks = ['about', 'skills', 'experience', 'education', 'projects'];

  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-[100]
          overflow-hidden
          inline-flex items-center justify-center gap-2
          rounded-[15px]
          px-4 sm:px-6 md:px-8 py-2 sm:py-3
          min-w-[100px] sm:min-w-[120px] h-[40px] sm:h-[52px]
          text-white text-sm sm:text-[16px] font-semibold
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

        {/* Text - hidden on mobile, icon shown instead */}
        <span className="relative z-10 whitespace-nowrap hidden sm:inline">
          Resume
        </span>
        <svg
          className="relative z-10 sm:hidden"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>

        {/* Arrow - hidden on mobile */}
        <svg
          className="relative z-10 hidden sm:block"
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
          hidden lg:flex
          fixed top-6 right-6 lg:top-8 lg:right-8 z-[60]
          overflow-hidden
          items-center justify-center
          rounded-[18px]
          px-6 py-2 md:px-8 md:py-3
          min-w-[160px] md:min-w-[180px] h-[44px] md:h-[52px]
          text-white text-sm md:text-[16px] font-normal
          shadow-[0_0_35px_rgba(255,0,170,0.35)]
        "
        animate={hidden ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: hidden ? "none" : "auto" }}
        whileHover={{ scale: 1.05 }}
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

      {/* MOBILE HAMBURGER BUTTON */}
      <motion.button
        className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:hidden z-[90] w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full"
            animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full"
            animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </div>
      </motion.button>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 sm:top-20 sm:left-6 sm:right-6 z-[85] lg:hidden rounded-2xl bg-black/95 border border-white/10 backdrop-blur-xl p-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-medium capitalize py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVBAR */}
      <motion.header
        className="fixed top-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12 z-50 hidden lg:block"
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