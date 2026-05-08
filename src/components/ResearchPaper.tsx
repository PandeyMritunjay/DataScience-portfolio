"use client";

import { motion } from "framer-motion";

export default function ResearchPaper() {
  const publication = {
    title: "Domain-Adaptive and Scalable Dense Retrieval for Content-Based Recommendation",
    authors: "Pandey, M.",
    journal: "Journal of the ACM (JACM), submitted/under review [Manuscript ID: JACM-2026-002]",
    doi: "https://doi.org/10.48550/arXiv.2602.00899",
    arxivUrl: "https://arxiv.org/abs/2602.00899",
    pdfUrl: "https://arxiv.org/pdf/2602.00899.pdf"
  };

  return (
    <section id="research" className="py-32 min-h-screen flex items-center">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-[#555555] mb-8">
            RESEARCH PAPER
          </h2>
        </motion.div>

        {/* Content Grid - Left Aligned Content, Right PDF Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Research Paper Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h3 className="text-4xl md:text-3xl font-parisienne text-white tracking-wider">
                {publication.title}
              </h3>
              <p className="text-[#A1A1AA] text-lg" style={{ fontFamily: '"TypeScript", monospace' }}>
                {publication.authors} • {publication.journal}
              </p>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-8">
              <span className="px-8 py-4 rounded-full bg-neutral-800/60 border border-neutral-700 text-neutral-400 text-sm" style={{ fontFamily: '"TypeScript", monospace' }}>
                DOI: {publication.doi}
              </span>

            </div>
          </motion.div>

          {/* Right Column - Embedded PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full h-96 lg:h-full min-h-[500px]"
          >
            <div className="bg-neutral-900/40 backdrop-blur-lg border border-neutral-800 rounded-xl overflow-hidden h-full">
              <iframe
                src={publication.pdfUrl}
                className="w-full h-full"
                title="Research Paper PDF"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
