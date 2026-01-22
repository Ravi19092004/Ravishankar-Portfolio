import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
  "AI/ML Tools": ["Machine Learning", "NLP", "Computer Vision", "TensorFlow", "Scikit-learn", "Keras", "PyTorch", "Pandas", "NumPy", "Matplotlib"],
  "Frameworks": ["Next.js", "Node.js", "React.js", "Express.js"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Neon Console"],
  "Web Development": ["MERN Stack", "HTML5", "CSS3", "Tailwind CSS"],
  "DevOps & Cloud": ["MLOps", "AWS", "Azure", "GCP", "Docker"],
  "Other Tools": ["Git", "GitHub", "REST APIs", "Power BI"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-primary mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
              >
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="bg-dark-card text-dark-text px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden glow-effect animate-3d-float"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      bounce: 0.4
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3), 0 0 90px rgba(0, 212, 255, 0.1)'
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
