"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/portfolio-data";
import { ExternalLink, ArrowRight, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-block relative overflow-hidden">
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
            Featured Projects
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent rounded-full" />
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A selection of my best work in AI, Full-Stack development, and XR.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary glass"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="projectFilterBg"
                  className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-accent-primary to-accent-secondary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Top color bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${
                  project.category === "AI/ML" ? "from-purple-500 to-indigo-500" :
                  project.category === "Full-Stack" ? "from-emerald-400 to-cyan-500" :
                  "from-pink-500 to-rose-500"
                }`} />

                <div className="p-7 md:p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-white/5 text-text-secondary border border-white/10">
                      {project.category}
                    </span>
                    <div className="flex gap-3 text-text-tertiary">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-text-primary transition-colors">
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-text-primary transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-tertiary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-accent-secondary mb-5">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-text-secondary text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs font-medium text-text-tertiary">
                          #{tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-medium text-text-tertiary">...</span>
                      )}
                    </div>

                    <div className="flex items-center text-sm font-medium text-accent-primary group-hover:text-accent-secondary transition-colors">
                      View Details
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 modal-overlay backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-panel rounded-2xl shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 text-text-secondary hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-accent-primary/20 text-accent-primary">
                    {selectedProject.category}
                  </span>
                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-white transition-colors">
                        <FiGithub size={16} /> Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-white transition-colors">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <h3 className="text-xl text-accent-secondary font-medium mb-8">{selectedProject.subtitle}</h3>

                <div className="prose prose-invert max-w-none">
                  <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                  <p className="text-text-secondary leading-relaxed mb-8">{selectedProject.longDescription}</p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-secondary">
                            <span className="text-accent-primary mt-1">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-text-primary border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 p-6 rounded-xl bg-white/5 border border-white/5">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-text-tertiary mb-2">The Challenge</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-accent-primary mb-2">The Outcome</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.outcomes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
