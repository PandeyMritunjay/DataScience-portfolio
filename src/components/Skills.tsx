"use client";

import { motion } from "framer-motion";
import skillsImage from "../../logos/skills.png";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 text-white"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        
        {/* Heading */}
        <div className="text-center mb-2">
          <h2 className="text-[16px] md:text-lg font-mono uppercase tracking-[0.28em] text-white/95">
            Skills
          </h2>
        </div>

        {/* Skills Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center mt-2"
        >
          <img
            src={skillsImage.src}
            alt="Skills Visualization"
            className="w-full sm:w-[95%] md:w-[90%] max-w-none object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}