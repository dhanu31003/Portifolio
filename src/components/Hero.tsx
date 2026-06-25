"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio-data";
import Image from "next/image";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
    });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 70%)"
      }} />

      <div className="section-container w-full pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-text-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              <span className="block text-text-primary">Building Intelligent</span>
              <span className="block gradient-text">Systems</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-text-secondary mb-6 font-medium">
              {personalInfo.subtitle}
            </motion.p>

            <motion.p variants={item} className="text-text-tertiary max-w-lg mb-10 leading-relaxed">
              I engineer production AI systems — from diffusion model try-on platforms to real-time voice companions — shipping code that turns research into products people use.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                <span><span>View Projects</span><ArrowDown size={16} className="inline ml-1 -rotate-90" /></span>
              </a>
              <a href={personalInfo.resumeUrl} className="btn-secondary" download>
                <Download size={16} /> Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass hover:bg-white/10 text-text-tertiary hover:text-text-primary transition-all" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass hover:bg-white/10 text-text-tertiary hover:text-text-primary transition-all" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-lg glass hover:bg-white/10 text-text-tertiary hover:text-text-primary transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — 3D floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
              className="relative animate-float"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-72 md:w-80 rounded-2xl overflow-hidden glass-card glow-indigo"
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transition: "transform 0.15s ease-out",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient top bar */}
                <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)" }} />

                <div className="p-8 text-center">
                  {/* Profile image */}
                  <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-accent-primary/30 ring-offset-2 ring-offset-transparent">
                    <Image 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name} 
                      fill 
                      sizes="(max-width: 768px) 112px, 112px"
                      className="object-cover" 
                      priority 
                    />
                  </div>

                  <h2 className="text-xl font-bold text-text-primary mb-1">{personalInfo.name}</h2>
                  <p className="text-sm text-accent-primary font-medium mb-4">AI Engineer & Software Developer</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {["Python", "PyTorch", "React", "Three.js"].map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-text-secondary border border-white/8">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/8">
                    <div>
                      <p className="text-lg font-bold gradient-text">15+</p>
                      <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Projects</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold gradient-text">30+</p>
                      <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Skills</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold gradient-text">3+</p>
                      <p className="text-[10px] text-text-tertiary uppercase tracking-wider">XR Apps</p>
                    </div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 opacity-10" style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, transparent 50%)",
                    animation: "shimmer 4s infinite",
                  }} />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-xl glass rotate-12 opacity-50 animate-pulse-glow flex items-center justify-center text-xl">🤖</div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 rounded-xl glass -rotate-6 opacity-50 animate-pulse-glow flex items-center justify-center text-lg" style={{ animationDelay: "1s" }}>⚡</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-tertiary tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className="text-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
