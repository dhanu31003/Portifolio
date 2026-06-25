"use client";

import { motion } from "framer-motion";
import { publications } from "@/data/portfolio-data";
import { BookOpen, ExternalLink } from "lucide-react";

export default function Research() {
  if (publications.length === 0) return null;

  return (
    <section id="research" className="py-28 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            Research & Publications
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-7 md:p-10 relative group"
            >
              <div className="absolute -left-px top-8 bottom-8 w-1 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-r-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary leading-tight mb-3">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <span className="text-accent-secondary flex items-center gap-1.5">
                      <BookOpen size={16} /> {pub.venue}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-text-tertiary">{pub.date}</span>
                  </div>
                </div>
                
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-text-secondary hover:text-white transition-colors whitespace-nowrap"
                  >
                    Read Paper <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="font-semibold text-text-primary/70 mr-2">Abstract:</span>
                {pub.abstract}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
