import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaCodeBranch, FaStar, FaUsers, FaEye } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'Ravi19092004';
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        const userData = userResponse.data;
        const reposData = reposResponse.data;

        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          stars: totalStars
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError('Failed to load GitHub stats');
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const statItems = [
    { icon: FaCodeBranch, label: 'Repositories', value: stats.repos, color: 'from-primary to-secondary' },
    { icon: FaUsers, label: 'Followers', value: stats.followers, color: 'from-secondary to-accent' },
    { icon: FaEye, label: 'Following', value: stats.following, color: 'from-accent to-primary' },
    { icon: FaStar, label: 'Total Stars', value: stats.stars, color: 'from-primary to-accent' }
  ];

  if (loading) {
    return (
      <section id="github-stats" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            GitHub Stats
          </motion.h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-stats" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            GitHub Stats
          </motion.h2>
          <div className="text-center text-dark-text">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-stats" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GitHub Stats
          </h2>
          <a
            href="https://github.com/Ravi19092004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
          >
            <FaGithub />
            <span>View Profile</span>
          </a>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-dark-card/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative glow-effect animate-3d-float text-center`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3), 0 0 90px rgba(0, 212, 255, 0.1)'
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                <item.icon className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{item.value.toLocaleString()}</div>
              <div className="text-dark-text">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
