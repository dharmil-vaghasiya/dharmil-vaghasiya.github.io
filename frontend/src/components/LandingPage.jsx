import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Terminal, Folder, File, ChevronRight } from 'lucide-react';
import { personalInfo, aboutData, projectsData, skillsData, contactData } from '../data/mockData';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    personalInfo.name,
    personalInfo.title,
    personalInfo.tagline
  ];

  // Typing animation effect
  useEffect(() => {
    if (currentCommand >= commands.length) return;
    
    const fullText = commands[currentCommand];
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentCommand((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentCommand, commands]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Fixed Header */}
      <header className={`fixed-header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
          <nav className="nav-menu">
            <button 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="contact-btn"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-graphic" style={{ transform: `rotate(${scrollY * 0.1}deg)` }}>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
          </div>
          <h1 className="hero-headline">{personalInfo.name}</h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-meta">
            <span>{personalInfo.yearsOfExperience} years experience</span>
            <span className="separator">•</span>
            <span>{personalInfo.currentRole}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-header">About</h2>
          <div className="about-content">
            <p className="about-bio">{aboutData.bio}</p>
            <div className="highlights-grid">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-dot"></div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-header">Selected Work</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-year">{project.year}</div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-link">
                  <ExternalLink size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-header">Skills & Technologies</h2>
          <div className="skills-content">
            <div className="skill-category">
              <h3 className="skill-category-title">Primary Focus</h3>
              <div className="skill-tags">
                {skillsData.primary.map((skill, index) => (
                  <span key={index} className="skill-tag primary">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Languages</h3>
              <div className="skill-tags">
                {skillsData.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Technologies & Tools</h3>
              <div className="skill-tags">
                {skillsData.technologies.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Practices</h3>
              <div className="skill-tags">
                {skillsData.practices.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-header">Get In Touch</h2>
          <p className="contact-text">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="contact-links">
            <a 
              href={`mailto:${contactData.email}`} 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href={`https://github.com/${contactData.github}`}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href={`https://linkedin.com/in/${contactData.linkedin}`}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={`https://twitter.com/${contactData.twitter}`}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>© 2024 {personalInfo.name}. All rights reserved.</p>
          <p className="footer-tagline">Crafted with precision and care.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
