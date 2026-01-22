import React from 'react';
import { motion } from 'framer-motion';
import PersonUsingComputer from './PersonUsingComputer';

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10 animate-rotate-3d"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float"
          initial={{ opacity: 0, y: -50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          AI/ML Engineer & Full-Stack Developer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-dark-text mb-8"
          initial={{ opacity: 0, y: 50, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          Building intelligent, secure, and scalable AI-powered applications
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 animate-bounce-3d"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Projects section"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Resume for AIML & Software Development.pdf"
            download="Ravishankar Resume.pdf"
            className="inline-block px-8 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 animate-bounce-3d"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Ravishankar's Resume"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/Ravi19092004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 animate-bounce-3d"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit Ravishankar's GitHub Profile"
          >
            GitHub Profile
          </motion.a>
        </div>
      </div>
      <motion.div
        className="relative z-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <PersonUsingComputer />
      </motion.div>
    </section>
  );
};

export default Hero;
