"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { Mail, Send, Download, CheckCircle2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    // Construct WhatsApp message
    const formattedMessage = `Hello Dhanush,

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919030348946?text=${encodedMessage}`;

    // Simulate form submission status and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-block relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center"
        >
          <h2 className="text-heading mb-4 inline-block relative">
            Let's Connect
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent rounded-full" />
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8 w-full"
          >
            <div className="glass-card p-5 sm:p-7 w-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl glass group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-tertiary">Email</p>
                    <p className="font-medium break-all sm:break-words text-sm sm:text-base">{personalInfo.email}</p>
                  </div>
                </a>

                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl glass group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors">
                    <FiLinkedin size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-tertiary">LinkedIn</p>
                    <p className="font-medium break-all sm:break-words text-sm sm:text-base">www.linkedin.com/in/dhanush-pujari-37173021a</p>
                  </div>
                </a>

                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl glass group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors">
                    <FiGithub size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-tertiary">GitHub</p>
                    <p className="font-medium break-all sm:break-words text-sm sm:text-base">github.com/dhanu31003</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <a href={personalInfo.resumeUrl} className="btn-secondary w-full justify-center" download>
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 w-full"
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-7 w-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                  placeholder="Hello!"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                  placeholder="I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="btn-primary w-full justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle2 size={18} /> Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
