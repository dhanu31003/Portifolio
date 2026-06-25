"use client";

import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio-data";
import * as LucideIcons from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="section-block relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            Leadership & Community
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-tertiary to-transparent rounded-full" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadership.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon] || LucideIcons.Users;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card card-content group hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 text-accent-primary group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-medium text-accent-secondary">{item.organization}</span>
                      <span className="text-text-tertiary">•</span>
                      <span className="text-text-tertiary">{item.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
