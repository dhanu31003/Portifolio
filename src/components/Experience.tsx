"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-block relative overflow-hidden">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            Experience & Education
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent rounded-full" />
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const Icon = 
              exp.type === "work" ? Briefcase : 
              exp.type === "education" ? GraduationCap : Award;

            return (
              <div key={exp.id} className="relative mb-20 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <div className="absolute inset-1 rounded-full bg-accent-primary animate-pulse" />
                </div>

                <div className={`flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <div className="glass-card p-7 md:p-8 relative group hover:border-accent-primary/30 transition-colors">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-white/5 text-accent-primary">
                          <Icon size={20} />
                        </div>
                        <span className="text-sm font-medium text-text-tertiary">
                          {exp.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-accent-secondary font-medium mb-5">
                        {exp.organization}
                      </h4>

                      <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 size={16} className="text-accent-tertiary shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-text-tertiary border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
