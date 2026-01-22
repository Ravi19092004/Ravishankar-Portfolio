import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software, from code generation to automated testing.',
    tags: ['AI', 'Software Development', 'Future Tech'],
    readTime: '5 min read',
    date: '2024-01-15'
  },
  {
    title: 'Building Secure Authentication Systems',
    excerpt: 'A comprehensive guide to implementing robust authentication and authorization in modern web applications.',
    tags: ['Security', 'Authentication', 'Web Development'],
    readTime: '8 min read',
    date: '2024-01-10'
  },
  {
    title: 'Optimizing React Performance',
    excerpt: 'Advanced techniques for improving React application performance, from memoization to code splitting.',
    tags: ['React', 'Performance', 'JavaScript'],
    readTime: '6 min read',
    date: '2024-01-05'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-light-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Latest Articles
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-dark-card/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-primary/20 to-secondary/20 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{post.title}</h3>
              <p className="text-dark-text mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-dark-text/70">
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <motion.button
                className="mt-4 text-primary hover:text-secondary transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More →
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
