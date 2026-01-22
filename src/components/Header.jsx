import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-20 transition-all duration-300 ${scrolled ? 'bg-dark-card/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-primary">RG</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-light-text">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#work-experience" className="hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
          <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
          <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
          <li><a href="#github-stats" className="hover:text-primary transition-colors">GitHub</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-card hover:bg-primary/20 transition-colors duration-300 mr-2"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-dark-card hover:bg-primary/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-light-text" /> : <FaBars className="text-light-text" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-sm shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-4 text-light-text">
            <li><a href="#about" className="hover:text-primary transition-colors block" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors block" onClick={closeMenu}>Skills</a></li>
            <li><a href="#work-experience" className="hover:text-primary transition-colors block" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors block" onClick={closeMenu}>Projects</a></li>
            <li><a href="#certifications" className="hover:text-primary transition-colors block" onClick={closeMenu}>Certifications</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors block" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#blog" className="hover:text-primary transition-colors block" onClick={closeMenu}>Blog</a></li>
            <li><a href="#github-stats" className="hover:text-primary transition-colors block" onClick={closeMenu}>GitHub</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors block" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;