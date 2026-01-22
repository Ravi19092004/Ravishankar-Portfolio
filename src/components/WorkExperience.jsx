import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      title: "AI/ML Developer Intern",
      company: "Mamo Techno Labs, Vadodara",
      duration: "Sep 2024 – Present",
      description: [
        "Developed and deployed applied machine learning models to solve client-specific business challenges.",
        "Preprocessed and engineered datasets to improve model accuracy and efficiency.",
        "Collaborated with cross-functional teams to design AI/ML solutions aligned with real-world requirements.",
        "Strengthened expertise in Python, TensorFlow, Scikit-learn, and cloud deployment, contributing to scalable and production-ready systems.",
        "Delivered insights and prototypes that supported decision-making and accelerated project timelines.",
      ],
    },
    {
      title: "AI Developer Intern",
      company: "VISWAM.AI",
      duration: "Jun 2024 – Jul 2024",
      description: [
        "Participated in a 4-week Summer of AI Internship conducted in collaboration with Mela, Swecha Telangana, and IIIT Hyderabad.",
        "Worked on building impactful, responsible AI and technology solutions focused on challenges faced by the Global South.",
      ],
    },
    {
      title: "Trainee – Corporate Readiness Program",
      company: "Hitbullseye",
      duration: "May 2025",
      description: [
        "Completed an intensive 20-day professional development program focused on quantitative aptitude and logical reasoning.",
        "Engaged in rigorous training sessions to improve problem-solving speed and analytical thinking.",
        "Earned formal certification for successful completion.",
      ],
    },
  ];

  return (
    <section
      id="work-experience"
      className="scroll-mt-28 py-20 bg-gradient-to-br from-dark-bg to-dark-card text-light-text relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 p-6 rounded-lg bg-dark-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, x: -50, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <motion.div
                  className="text-primary mt-1 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaBriefcase size={24} />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl font-semibold mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    className="text-primary text-lg mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {exp.company} &bull; {exp.duration}
                  </motion.p>
                  <ul className="text-light-text list-disc list-inside space-y-1 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <motion.li
                        key={i}
                        className="text-light-text leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.1 + i * 0.1,
                        }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
