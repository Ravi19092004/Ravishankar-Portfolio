import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', date: 'Aug 2024' },
    { name: 'Oracle Fusion AI Studio Foundations Associate – Rel 1', issuer: 'Oracle', date: 'Aug 2024' },
    { name: 'AI Fundamentals with IBM SkillsBuild', issuer: 'IBM & Cisco', date: 'Sep 2024' },
    { name: 'Computer Networks and Internet Protocol', issuer: 'IIT Kharagpur (NPTEL)', date: 'Apr 2024' },
    { name: 'Introduction to Internet of Things', issuer: 'IIT Kharagpur (NPTEL)', date: 'Oct 2024' },
    { name: 'Power BI for Beginners: Zero to Hero Fast Track', issuer: 'Self-paced', date: 'Jan 2025' },
    { name: 'Certificate of Appreciation – Scroll Hack Hackathon', issuer: 'Scroll Hack', date: 'Aug 2024' },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-secondary/10 via-transparent to-primary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications & Achievements
        </motion.h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg bg-dark-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden glow-effect animate-3d-float"
              initial={{ opacity: 0, y: 50, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: 'spring',
                bounce: 0.4
              }}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
                boxShadow: '0 20px 40px rgba(255, 0, 128, 0.5), 0 0 60px rgba(255, 0, 128, 0.3), 0 0 90px rgba(255, 0, 128, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="text-primary mt-1 flex-shrink-0 relative z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCertificate size={24} />
              </motion.div>
              <div className="relative z-10">
                <motion.h3
                  className="text-lg font-semibold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {cert.name}
                </motion.h3>
                <motion.p
                  className="text-dark-text text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {cert.issuer} &bull; {cert.date}
                </motion.p>
                {/* If you have a link, you can add it here */}
                {/* <a href={cert.link} className="text-primary text-sm hover:underline">View Certificate</a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
