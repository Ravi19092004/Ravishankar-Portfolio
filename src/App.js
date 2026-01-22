import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-light-text relative" style={{ perspective: '1000px' }}>
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Blog />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;