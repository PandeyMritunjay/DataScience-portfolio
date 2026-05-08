"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiences = [
    {
      title: "Business Analyst",
      company: "Aditya Birla Group - Grasim",
      location: "Mumbai, India",
      period: "Aug 2025 - Present",
      highlights: [
        "Converted SAP sales data into Excel and Power BI dashboards for MIS insights.",
        "Daily production analysis through Birla Assure to detect deviations across 3200 TPD plants.",
        "Supported Business Development."
      ],
    },
    {
      title: "AI Engineer",
      company: "Namekart Pvt. Ltd.",
      location: "Noida, India",
      period: "Jan 2025 - Aug 2025",
      highlights: [
        "Trained Transformer + MLP on 767K+ domains for price prediction (L1 $270, L2 $500).",
        "Built DistilBERT + MLP with SE-block fusion and Huber Loss.",
        "Automated lead discovery and classification using LangChain and LinkedIn scraping.",
      ],
    },
    {
      title: "LLM Context Engineer",
      company: "Invisible Technologies",
      location: "Remote, USA",
      period: "Sep 2024 - Jan 2025",
      highlights: [
        "Created 700+ gold-standard triads for Python and STEM SFT and RLHF training.",
        "Achieved 98% QC accuracy; promoted to Reviewer for LLM dataset validation.",
        "Evaluated 2,000+ prompts using SOPs and Human-in-the-Loop review to reduce hallucinations."
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Statcon Electronics India Limited",
      location: "Delhi, India",
      period: "May 2024 - Aug 2024",
      highlights: [
        "Built CNN-LSTM SoH model with 96% accuracy and RMSE 0.02.",
        "Processed 10K+ cycles and predicted failures 50 steps ahead.",
        "Deployed Streamlit demo with sub-150 ms inference."
      ],
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredCard !== index) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className="py-24 text-white">
      <div className="max-w-9xl w-full mx-auto px-6 md:px-10">
        {/* Section Header - 07. EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[18px] font-mono uppercase tracking-[0.5em] text-neutral-600">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="relative overflow-x-auto">
          {/* <div className="absolute left-0 right-0 top-3 h-px bg-cyan-300/20" /> */}

          <div className="grid grid-cols-4 gap-15 pt-6 min-w-[1180px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: 30, scale: 1 }}
              className="relative"
            >
              <div
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-2 rounded-2xl hover:bg-cyan-300/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: hoveredCard === index ? 1 : 0,
                    background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-300/10 text-cyan-200 text-[10px] font-normal mb-3 whitespace-nowrap">
                      {exp.period}
                    </div>
                    <div>
                      <h3 className="text-[1rem] md:text-[1rem] leading-[1.5] font-normal text-white group-hover:text-white/95 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-300 text-[0.95rem] mt-1 group-hover:text-cyan-200 transition-colors">{exp.company}</p>
                      <p className="text-neutral-500 text-[0.8rem] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-neutral-400 text-[0.9rem] leading-relaxed">
                        <span className="text-cyan-300 mt-0.5">▶</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
