import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { FaSearch } from 'react-icons/fa';

const projects = [
  {
    title: 'JashnMart – Full-Stack E-Commerce Application',
    description: 'Built a responsive full-stack e-commerce platform with secure payment integration via Stripe, product browsing, cart management, and personalized shopping experiences.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/Ravi19092004/JasnMart',
  },
  {
    title: 'RaviStore',
    description: 'A full-stack e-commerce application with modern UI and robust backend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Ravi19092004/RAVISTORE',
  },
  {
    title: 'ML-Powered Browser Extension',
    description: 'Designed a machine learning classifier to detect unsafe websites using URL/domain features. Integrated into a Chrome extension for real-time safety detection with caching for performance.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'JavaScript', 'Chrome Extension API', 'SQLite'],
    github: 'https://github.com/Ravi19092004/TheShieldXArc',
  },
  {
    title: 'Authentication Service Provider',
    description: 'Developed a secure authentication system using Next.js and Prisma with robust user access/session management. Implemented OAuth for Google & GitHub logins and email verification via Resend API.',
    tech: ['Next.js', 'Prisma', 'OAuth', 'Resend API', 'TypeScript'],
    github: 'https://github.com/Ravi19092004/Authentication-Service-Provider',
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all unique technologies
  const allTech = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search term and selected tech
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTech = selectedTech === '' || project.tech.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-card/50 border border-primary/20 rounded-full text-light-text placeholder-dark-text focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTech('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTech === '' ? 'bg-primary text-white' : 'bg-dark-card/50 text-dark-text hover:bg-primary/20'
              }`}
            >
              All
            </button>
            {allTech.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === tech ? 'bg-primary text-white' : 'bg-dark-card/50 text-dark-text hover:bg-primary/20'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-card/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 relative glow-effect animate-3d-float cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3), 0 0 90px rgba(0, 212, 255, 0.1)'
              }}
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => openModal(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative z-10">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-dark-text mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-gradient-to-r from-primary/20 to-secondary/20 text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  View on GitHub &rarr;
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;