import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Senior Developer at TechCorp',
    content: 'Ravishankar is an exceptional developer with deep knowledge in AI/ML and full-stack development. His work on our e-commerce platform exceeded expectations.',
    rating: 5,
    avatar: 'https://picsum.photos/60/60?random=1'
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager at InnovateLabs',
    content: 'Working with Ravishankar was a pleasure. His attention to detail and problem-solving skills helped us deliver our ML project on time and with high quality.',
    rating: 5,
    avatar: 'https://picsum.photos/60/60?random=2'
  },
  {
    name: 'Mike Johnson',
    role: 'CTO at StartupXYZ',
    content: 'Ravishankar\'s expertise in React and Node.js transformed our application. His code is clean, efficient, and well-documented.',
    rating: 5,
    avatar: 'https://picsum.photos/60/60?random=3'
  }
];

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-secondary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-dark-card/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 relative glow-effect animate-3d-float"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(255, 0, 128, 0.5), 0 0 60px rgba(255, 0, 128, 0.3), 0 0 90px rgba(255, 0, 128, 0.1)'
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-4 left-4 text-secondary/30">
                <FaQuoteLeft size={24} />
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-secondary"
                />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                  <p className="text-sm text-dark-text">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-dark-text mb-4 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
