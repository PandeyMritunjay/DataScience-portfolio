"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../../img.png";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.7-6.3 3.7 1.7-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 7.5L12 13.2L19.5 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.4 8.2a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM4.9 9.8h3v9.3h-3zM10.2 9.8h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2.1 3.7 4.8v4.8h-3v-4.3c0-1-.1-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.4h-3V9.8z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.7.1-3.5 0 0 1.1-.3 3.6 1.3a12 12 0 016.5 0c2.5-1.6 3.6-1.3 3.6-1.3.7 1.8.3 3.2.1 3.5.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0012 .5z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 3.8h3.1l1.3 3.2c.2.5.1 1.1-.3 1.5L9.2 10a15.5 15.5 0 004.8 4.8l1.5-1.5c.4-.4 1-.5 1.5-.3l3.2 1.3v3.1c0 .8-.6 1.5-1.4 1.6-8.4.9-15-5.8-14.1-14.2.1-.8.8-1.4 1.6-1.4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type AboutRow = {
  label: string;
  value: React.ReactNode;
  color: string;
  colorDark: string;
};

export default function About() {
  const rows: AboutRow[] = [
    {
      label: "Role Worked",
      value:
        "Data Scientist, AI Engineer, ML Engineer, SFT & RLHF Prompt Engineer",
      color: "#2E5965",
      colorDark: "#244752",
    },
    {
      label: "Relevant Experience in AI",
      value: "1.2 years",
      color: "#FF4A3D",
      colorDark: "#C53A31",
    },
    {
      label: "Education",
      value: "National Institute of Technology Jalandhar (B.Tech, 2025)",
      color: "#171A22",
      colorDark: "#0F1218",
    },
    {
      label: "Skills",
      value:
        "Supervised & Unsupervised Machine Learning, Deep Learning, Natural Language Processing, Sequence Models (Transformers), LLMs, RAG, LangChain (SQL, Pandas, PyTorch, FAISS, Azure ML, Hugging Face)",
      color: "#3A424F",
      colorDark: "#2B313B",
    },
    {
      label: "Paper",
      value: (
        <a
          href="https://arxiv.org/abs/2602.00899"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-200/95 hover:text-yellow-200 underline underline-offset-4 decoration-yellow-200/60"
        >
          E-commerce Content Based Recommendation
        </a>
      ),
      color: "#1E6B6A",
      colorDark: "#165352",
    },
  ];

  const contactLinks = [
    {
      label: "Email",
      href: "mailto:mritunjay@thedatascientist.live",
      icon: EmailIcon,
      iconBg:
        "bg-gradient-to-br from-[#2F80ED] to-[#1E5FD3] hover:from-[#3F8CF1] hover:to-[#2D6BE0]",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pandeym29/",
      icon: LinkedInIcon,
      iconBg:
        "bg-gradient-to-br from-[#4F46E5] to-[#3B38C9] hover:from-[#5B54EE] hover:to-[#4A46D8]",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/PandeyMritunjay",
      icon: GitHubIcon,
      iconBg:
        "bg-gradient-to-br from-[#4B5563] to-[#374151] hover:from-[#596577] hover:to-[#455063]",
      external: true,
    },
    {
      label: "Phone",
      href: "tel:+916204555570",
      icon: PhoneIcon,
      iconBg:
        "bg-gradient-to-br from-[#2FA6F5] to-[#1D82D8] hover:from-[#42B2FA] hover:to-[#2D90E6]",
    },
  ];

  return (
    <section id="about" className="py-32 min-h-screen flex items-center">
      <div className="max-w-7xl w-full">
        <div className="relative isolate grid grid-cols-1 lg:grid-cols-[0.45fr_1.55fr] gap-8 lg:gap-15 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-0"
          >
            <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] overflow-hidden rounded-2xl">
              <Image
                src={profileImage}
                alt="Mritunjay Pandey profile photo"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="mt-[2cm] flex items-center justify-between max-w-[280px]">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className={`h-7 w-10 rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 ${item.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center"
          >
            <div className="w-full space-y-7">
              <div className="space-y-4">
                <p className="text-sm font-mono uppercase tracking-[0.22em] text-white/55">
                  GET TO KNOW ME
                </p>
                <h2 className="text-4xl md:text-5xl font-parisienne text-white tracking-tight">
                  Mritunjay Pandey
                </h2>
              </div>

              <div aria-hidden="true" className="h-10" />

              <div
                className="text-[15px] md:text-base leading-relaxed text-neutral-200"
                style={{
                  fontFamily: 'Times new Roman',
                }}
              >
                <div className="flex flex-col gap-4">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-stretch gap-2 py-1">
                      <div
                        className="w-[230px] shrink-0 text-white flex items-center justify-center shadow-[0_12px_26px_rgba(0,0,0,0.45)] px-4 py-7"
                        style={{ background: row.colorDark }}
                      >
                        <div className="text-[15px] md:text-[18px] font-normal text-center leading-snug opacity-95">
                          {row.label}
                        </div>
                      </div>

                      <div className="relative flex-1">
                        <div
                          className="px-10 py-7 shadow-[0_12px_26px_rgba(0,0,0,0.35)] flex items-center justify-center"
                          style={{
                            background: row.color,
                            clipPath:
                              "polygon(0 0, 90% 0, 100% 0%, 96% 100%, 0 100%, 0% 50%)",
                          }}
                        >
                          <div className="text-white/95 text-center max-w-[65ch]">
                            <div className="text-[17px] md:text-[17px] leading-relaxed text-white/90">
                              {row.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-5 text-neutral-200">
                  <StarIcon className="mt-0.5 h-7 w-5 text-yellow-200/90 shrink-0" />
                  <p>
                    Strong understanding of fundamentals with mathematics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
