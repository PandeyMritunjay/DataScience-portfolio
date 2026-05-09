"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string | React.ReactNode;
  code?: string;
  demo?: string;
  additionalLinks?: { label: string; href: string }[];
  hideActions?: boolean;
};

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "High Performance Two-Tower Recommendation System",
      description: "End-to-end semantic retrieval system using fine-tuned MPNet Bi-Encoder with supervised contrastive learning. Implements FAISS HNSW approximate nearest neighbor indexing and ONNX Runtime Int8 quantization for 5x faster CPU inference.",
      code: "https://huggingface.co/spaces/Pandeymp29/Optimised-Amazon-RecSys/tree/main",
      demo: "https://huggingface.co/spaces/Pandeymp29/Optimised-Amazon-RecSys",
    },
    {
      title: "Agent Portfolio and Valuation Advisor (APVA)",
      description: "LangChain-powered agentic framework running multi-LLM pipeline with streaming inference, retry logic, and 5+ API integrations. Developed LLM-driven multi-tier pricing engine with structured JSON parsing and buyer personas.",
      code: "https://github.com/PandeyMritunjay/apva-assignment",
      demo: "https://drive.google.com/file/d/1VxOVuW9qBVgrpZt-T9rTYY-eQiVwKouN/view?usp=sharing",
    },
    {
      title: "Multi-Agent LinkedIn Optimization System",
      description: "Single-agent AI system for profile analysis (0-100 scoring), job fit assessment, content optimization, and career guidance using structured prompt engineering with conversational AI coach.",
      code: "https://github.com/PandeyMritunjay/linkedin-test",
      demo: "https://github.com/PandeyMritunjay/linkedin-test",
    },
    {
      title: "Additional projects:",
      description: (
        <>
          See{" "}
          <a
            href="https://github.com/PandeyMritunjay/Medicine-Recommendation-Systems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            Medicine Recommendation System
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/PandeyMritunjay/Intelligent-Image-Processing-System-Based-on-Virtual-Painting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-300 transition-colors "
          >
            Virtual Painting Studio
          </a>
          .
        </>
      ),
      hideActions: true,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredCard !== index) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="projects" className="py-16 md:py-20 w-full bg-black px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header - 03. PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[18px] font-mono uppercase tracking-[0.5em] text-neutral-600">
            PROJECTS
          </h2>
        </motion.div>

        {/* Visual spec from reference:
           - Generous inner tile padding
           - Medium-large clean title
           - Softer description
           - Subtle visible border
           - Top-right circular outbound arrow
           - No tech pills */}
        <div className="flex flex-col gap-9">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-neutral-950/35 backdrop-blur-2xl border border-white/10 rounded-[1.8rem] p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 cursor-default overflow-hidden min-h-[210px]"
            >
              {/* Spotlight Effect */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: hoveredCard === index ? 1 : 0,
                  background: `radial-gradient(circle 420px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.055), transparent 80%)`,
                }}
              />

              <div className="relative z-10 h-[7cm] min-h-[160px] flex items-center justify-center">
                <div className="w-full max-w-[86%] sm:max-w-[88%] pr-10 sm:pr-14 mx-auto">
                  <h3 
                    className={`text-[1.45rem] md:text-[1.65rem] leading-[1.2] font- tracking-[-0.01em] mb-3 transition-colors duration-500 break-words ${
                      index === 0 ? 'text-white/92' : 'text-white/92'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {project.additionalLinks ? (
                    <div className="flex flex-col gap-2">
                      {project.additionalLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-300 text-[0.98rem] md:text-[1.05rem] underline underline-offset-4 decoration-neutral-500/60 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-500/90 text-[0.94rem] md:text-[1rem] leading-[1.7] font-light max-w-[82ch] break-words">
                      {project.description}
                    </p>
                  )}
                </div>

                {!project.hideActions && (
                  <div className="absolute top-1/2 right-24 -translate-y-1/2 flex flex-col gap-4">
                    <motion.a
                      href={project.code ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-4 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 min-w-[80px]"
                    >
                      <span className="text-sm sm:text-base font-medium text-neutral-500 group-hover:text-cyan-200 transition-colors">
                        Code
                      </span>
                    </motion.a>
                    <motion.a
                      href={project.demo ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-4 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 min-w-[80px]"
                    >
                      <span className="text-sm sm:text-base font-medium text-neutral-500 group-hover:text-cyan-200 transition-colors">
                        Demo
                      </span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}