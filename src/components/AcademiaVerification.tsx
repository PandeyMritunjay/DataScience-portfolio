"use client";

import { motion } from "framer-motion";
import clgLogo from "../../logos/clg.png";

export default function AcademiaVerification() {
  const certifications = [
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      link: "https://coursera.org/verify/specialization/NT7WWU2TTCWD",
      icon: "🎓"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      link: "https://coursera.org/verify/specialization/NT7WWU2TTCWD",
      icon: "🎓"
    },
    {
      name: "Mathematics for Machine Learning and Data Science",
      issuer: "Coursera",
      link: "#",
      icon: "🎓"
    },
    {
      name: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      link: "https://www.coursera.org/account/accomplishments/certificate/6PANPBE6A799",
      icon: "🎓"
    },
    {
      name: "SQL for Data Analysis",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/9327f6f17d939589b56d2640012be7b7730dbcc2352f450fabcb60195642de85",
      icon: "🎓"
    },
    {
      name: "Hacktoberfest 2022",
      issuer: "Open Source Contributor",
      link: "https://www.holopin.io/@pandeymritunjay",
      icon: "🎃"
    },
    {
      name: "Google Cloud Facilitators Programme",
      issuer: "Google Cloud",
      link: "https://www.cloudskillsboost.google/public_profiles/7c73939c-b400-488e-ae3e-c3971437139e",
      icon: "☁️"
    },
    {
      name: "Mastering Data Structures and Algorithms using C++",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-cc4b736c-b973-44eb-9d0b-59168b32a68e/",
      icon: "🎓"
    }
  ];

  return (
    <section id="education" className="py-24 text-white">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-5 items-start"
        >
          <div className="md:pr-12">
            <h2 className="text-[18px] font-mono uppercase tracking-[0.5em] text-neutral-600 mb-7 leading-none">
              EDUCATION
            </h2>
            <div>
              <img
                src={clgLogo.src}
                alt="NIT Jalandhar logo"
                className="w-[560px] max-w-[90%] h-auto select-none"
              />
            </div>
          </div>

          <div className="md:pl-12">
            <h2 className="text-[18px] font-mono uppercase tracking-[0.5em] text-neutral-600 mb-7 leading-none md:-mt-1">
              CERTIFICATION
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="block text-[20px] md:text-md leading-relaxed"
                >
                  <span className="font-normal text-[#FACC15] hover:text-[#FDE047] transition-colors">
                    {cert.name}
                  </span>
                  <span className="text-[#A1A1AA]"> | {cert.issuer}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
