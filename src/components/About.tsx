"use client";

import { motion, Variants } from "framer-motion";
import { aboutData, personalInfo } from "@/data/portfolio-data";
import Image from "next/image";

export default function About() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-20"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-transparent rounded-full" />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[400px] w-full max-w-[400px] mx-auto lg:h-[500px]">
              {/* Abstract background shapes behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-tertiary/20 rounded-3xl blur-2xl transform -rotate-6 scale-105" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass-strong z-10 border-border">
                <Image 
                  src={personalInfo.profileImageFull} 
                  alt="Profile" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 500px"
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-primary/20 to-accent-tertiary/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 mb-8">
              {aboutData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={item}
                  className="text-text-secondary text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {aboutData.highlights.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="glass-card px-3 py-7 sm:px-4 sm:py-8 md:px-3 md:py-8 lg:px-4 lg:py-8 text-center group"
                >
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4 transition-transform duration-300 group-hover:scale-110 whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-text-tertiary uppercase tracking-wider text-center leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
