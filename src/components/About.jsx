import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-bg to-dark-card text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg to-dark-card opacity-50"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
          whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateY: 10, scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-glow"></div>
          <img
            src="/Ravishankar.jpg"
            alt="Ravishankar Gharabidi"
            className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-primary/50"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-dark-text mb-6 max-w-2xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            B.Tech CSE (AI Specialization) student with a strong interest in AI/ML, cybersecurity, and MLOps. Hands-on experience with real-world AI projects, passionate about building production-ready intelligent systems.
          </motion.p>
          <motion.div
            className="text-lg text-dark-text mb-6 max-w-2xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <strong>Education:</strong> B. Tech CSE with Specialization in AI (Artificial Intelligence) from Parul Institute of Technology (2022-26, 6.54 CGPA)
          </motion.div>
          <motion.div
            className="text-lg text-dark-text mb-6 max-w-2xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <strong>Location:</strong> Mumbai, India
          </motion.div>
          <motion.a
            href="/Resume for AIML & Software Development.pdf"
            download="Ravishankar Resume.pdf"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
