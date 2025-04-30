import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { staggerChildren, fadeInUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div className="md:w-1/2 mb-10 md:mb-0" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Shyam</span>
            </h1>
            <div className="h-1 w-20 bg-[color:hsl(var(--terminal))] my-6"></div>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 font-mono">
              Security & Quality Assurance <span className="text-[color:hsl(var(--terminal))]">Specialist</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Ethical hacker and security expert with a passion for uncovering vulnerabilities and building secure systems.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                className="px-6 py-3 bg-[color:hsl(var(--terminal))] text-gray-900 font-bold rounded-md hover:bg-[color:hsl(var(--terminal-dim))] transition"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3 border border-[color:hsl(var(--terminal))] text-[color:hsl(var(--terminal))] font-bold rounded-md hover:bg-[color:hsl(var(--terminal))]/10 transition"
                asChild
              >
                <a href="#terminal">Try Terminal</a>
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://www.instagram.com/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/shyam-the-hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://linktr.ee/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fas fa-link text-2xl"></i>
              </a>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2 flex justify-center" variants={fadeInUp}>
            <Terminal id="terminal" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
