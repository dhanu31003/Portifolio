"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, allSkillNames } from "@/data/portfolio-data";
import * as LucideIcons from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSkills =
    skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-block relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

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
            Technical Arsenal
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-tertiary to-transparent rounded-full" />
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, spanning across machine learning, software engineering, and immersive technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: 3D Sphere Visualization (CSS-only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center min-h-[500px] relative perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-80 h-80 animate-spin-slow" style={{ transformStyle: "preserve-3d" }}>
              {mounted && allSkillNames.slice(0, 24).map((skill, i) => {
                const total = 24;
                const phi = Math.acos(-1 + (2 * i) / total);
                const theta = Math.sqrt(total * Math.PI) * phi;
                const radius = 160;
                
                const x = Math.cos(theta) * Math.sin(phi) * radius;
                const y = Math.sin(theta) * Math.sin(phi) * radius;
                const z = Math.cos(phi) * radius;

                return (
                  <div
                    key={skill}
                    className="absolute left-1/2 top-1/2 text-sm font-medium whitespace-nowrap text-text-secondary/80 hover:text-accent-primary transition-colors"
                    style={{
                      transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) translate(-50%, -50%)`,
                      textShadow: "0 0 10px rgba(99,102,241,0.5)",
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
            
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-32 h-32 bg-accent-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Skills List */}
          <div className="lg:col-span-7">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {skillCategories.map((cat) => {
                const isActive = activeCategory === cat.name;
                const Icon = (LucideIcons as any)[cat.icon] || LucideIcons.Code;
                
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "text-white"
                        : "text-text-secondary hover:text-text-primary glass"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ backgroundColor: cat.color }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="flex items-center gap-2">
                      <Icon size={16} className={isActive ? "text-white" : ""} style={{ color: !isActive ? cat.color : undefined }} />
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Skills Cards */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="glass-card p-5 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-xs text-text-tertiary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: skillCategories.find(c => c.name === activeCategory)?.color || "#6366f1"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
