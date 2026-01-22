import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      }, 1000);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-dark-bg to-dark-card text-dark-text py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Newsletter Signup */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-light-text">Stay Updated</h3>
          <p className="text-dark-text mb-4">Subscribe to get the latest updates on my projects and tech insights.</p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-dark-card/50 border border-primary/20 rounded-full text-light-text placeholder-dark-text focus:outline-none focus:border-primary transition-colors"
              required
            />
            <motion.button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
            >
              <FaPaperPlane />
              <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/Ravi19092004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ravishankar-gharabidi-35bb2b262/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <FaLinkedin size={28} />
          </motion.a>
          {/* Add other social links here */}
        </motion.div>
        <motion.p
          className="text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &copy; {year} Ravishankar Gharabidi. All Rights Reserved.
        </motion.p>
        <motion.div
          className="mt-4 text-xs text-dark-text/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Built with ❤️ using React & Tailwind CSS
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
