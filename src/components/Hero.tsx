"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Company = {
  name: string;
  logo: string;
  pos: string; // tailwind position classes
  size?: string; // tailwind size override
  bubble?: "a" | "b" | "c" | "d";
};

// Bump this when you replace files but keep names (cache-busting).
const LOGO_VERSION = "2026-05-08-2254";

function randomBrightRgb() {
  // Keep it bright and readable on black.
  const ch = () => 120 + Math.floor(Math.random() * 136); // 120..255
  return `rgb(${ch()}, ${ch()}, ${ch()})`;
}

function scrambleString(length: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}

function DoodleStar({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      <path d="M4.6 4.6l4.2 4.2M15.2 15.2l4.2 4.2M19.4 4.6l-4.2 4.2M8.8 15.2l-4.2 4.2" />
    </svg>
  );
}

function DoodleArrow({ className, d }: { className: string; d: string }) {
  return (
    <svg className={className} viewBox="0 0 500 0" fill="none" aria-hidden="true">

      <path
        d="M172 74l12 6-12 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompanyCutout({ company, index }: { company: Company; index: number }) {
  const bubble = company.bubble ?? "a";
  const bubbleRadius =
    bubble === "a"
      ? "rounded-[30px]"
      : bubble === "b"
        ? "rounded-[24px_34px_26px_34px]"
        : bubble === "c"
          ? "rounded-[34px_24px_34px_26px]"
          : "rounded-[26px_26px_36px_22px]";

  const tailPos =
    bubble === "a"
      ? "left-10"
      : bubble === "b"
        ? "right-10"
        : bubble === "c"
          ? "left-16"
          : "right-14";

  return (
    <motion.div
      className={`absolute ${company.pos} ${
        company.size ?? "w-[190px] h-[120px]"
      } hidden md:flex`}
      initial={{ opacity: 0, y: 10, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 1.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3, rotate: 0.3 }}
    >
      <div className="relative w-full h-full">
        <div
          className={`relative w-full h-full ${bubbleRadius} overflow-hidden flex items-center justify-center p-4`}
        >
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={520}
            height={260}
            unoptimized
            className="relative z-10 w-full h-full object-contain"
          />
        </div>

      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [showDecor, setShowDecor] = useState(false);
  const [clarityText, setClarityText] = useState("CLARITY");
  const [clarityResolved, setClarityResolved] = useState(false);

  useEffect(() => {
    const target = "clarity";
    const durationMs = 1000;
    const tickMs = 140;

    const startedAt = Date.now();
    setShowDecor(false);
    setClarityResolved(false);
    setClarityText(scrambleString(target.length));

    const id = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      if (elapsed >= durationMs) {
        window.clearInterval(id);
        setClarityText(target);
        setClarityResolved(true);
        setShowDecor(true);
        return;
      }
      setClarityText(scrambleString(target.length));
    }, tickMs);

    return () => window.clearInterval(id);
  }, []);

  const companies = useMemo<Company[]>(
    () => [
      {
        name: "Namekart",
        logo: `/logos/NK.png?v=${LOGO_VERSION}`,
        pos: "left-[4%] top-[50%]",
        size: "w-[200px] h-[200px]",
        bubble: "b",
      },
      {
        name: "Invisible",
        logo: `/logos/inv.png?v=${LOGO_VERSION}`,
        pos: "left-[4%] top-[22%]",
        size: "w-[250px] h-[200px]",
        bubble: "a",
      },
      {
        name: "Aditya Birla Group",
        logo: `/logos/ABG.png?v=${LOGO_VERSION}`,
        pos: "right-[6%] top-[18%]",
        size: "w-[200px] h-[182px]",
        bubble: "c",
      },
      {
        name: "SEIL",
        logo: `/logos/seil.png?v=${LOGO_VERSION}`,
        pos: "right-[0%] top-[44%]",
        size: "w-[200px] h-[200px]",
        bubble: "d",
      },
      {
        name: "Remotasks",
        logo: `/logos/remo.png?v=${LOGO_VERSION}`,
        pos: "left-[74%] top-[65%]",
        size: "w-[250px] h-[200px]",
        bubble: "b",
      },
    ],
    []
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* cinematic glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(232,121,249,0.10),transparent_55%),radial-gradient(circle_at_50%_70%,rgba(250,204,21,0.10),transparent_60%)] opacity-100" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 min-h-screen flex items-center justify-center py-24">
        {/* company cutouts */}
        {showDecor &&
          companies.map((c, i) => (
            <CompanyCutout key={c.name} company={c} index={i} />
          ))}

        {/* doodles */}
        {showDecor && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DoodleStar className="hidden md:block absolute left-[24%] top-[26%] w-[22px] h-[22px] text-white/55 pointer-events-none" />
            <DoodleStar className="hidden md:block absolute right-[22%] top-[26%] w-[25px] h-[25px] text-white/55 pointer-events-none" />
            <DoodleStar className="hidden md:block absolute right-[24%] top-[70%] w-[22px] h-[22px] text-white/55 pointer-events-none" />

            <DoodleArrow
              className="hidden md:block absolute left-[18%] top-[40%] w-[200px] h-[126px] text-white/45 pointer-events-none"
              d="M12 22c30 6 52 28 70 46 18 18 44 30 92 26"
            />
            <DoodleArrow
              className="hidden md:block absolute right-[18%] top-[40%] w-[200px] h-[126px] text-white/45 scale-x-[-1] pointer-events-none"
              d="M12 22c30 6 52 28 70 46 18 18 44 30 92 26"
            />
          </motion.div>
        )}

        {/* center copy */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-allura font-normal tracking-wider text-black"
          >
            <span className="text-white">Hey, I&apos;m</span> Mritunjay
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            className="text-[clamp(1.8rem,4.1vw,3.05rem)] leading-[1.06] tracking-[-0.03em] font-extrabold text-white max-w-[18ch]"
          >
            <span className="font-parisienne font-medium tracking-normal">Decoding</span>{" "}
            <span className="font-allura font-normal tracking-normal">complexity</span>.
            <br />
            <span className="inline-block mt-1">
              <span className="font-allura font-normal tracking-normal">
                Delivering{" "}
                <span
                  className={[
                    "inline-block min-w-[7ch]",
                    "drop-shadow-[0_0_18px_rgba(250,204,21,0.45)]",
                    clarityResolved ? "serif-accent text-yellow-200" : "text-white/80",
                  ].join(" ")}
                  style={clarityResolved ? { filter: "brightness(1.18)" } : undefined}
                >
                  {clarityText}
                </span>
              </span>
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

