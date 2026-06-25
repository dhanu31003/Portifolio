"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio-data";
import * as LucideIcons from "lucide-react";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-block relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            Certifications
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = (LucideIcons as any)[cert.icon] || LucideIcons.Award;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="glass-card card-content h-full flex items-center gap-5 group hover:bg-white/5 transition-colors">
                  <div className="p-3 rounded-full bg-white/5 text-text-tertiary group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary leading-tight mb-2 group-hover:text-accent-secondary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-sm text-text-secondary">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-text-tertiary mt-1 font-medium">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
