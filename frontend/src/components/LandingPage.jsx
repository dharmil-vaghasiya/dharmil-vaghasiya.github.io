import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Terminal, Folder, File, ChevronRight } from 'lucide-react';
import { personalInfo, aboutData, projectsData, skillsData, contactData } from '../data/mockData';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const commands = [
      personalInfo.name,
      personalInfo.title,
      personalInfo.tagline
    ];
    
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
    <div className="terminal-page">
      {/* Terminal Header */}
      <header className="terminal-header">
        <div className="terminal-window-controls">
          <span className="control-btn close"></span>
          <span className="control-btn minimize"></span>
          <span className="control-btn maximize"></span>
        </div>
        <div className="terminal-title">
          <Terminal size={16} />
          <span>alex@portfolio: ~</span>
        </div>
        <nav className="terminal-nav">
          <button 
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            ./about
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            ./projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            ./skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="contact-cmd"
          >
            ./contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="terminal-hero">
        <div className="ascii-art">
          <pre>{`
    ╔═══════════════════════════════════════╗
    ║     DEVELOPER  PORTFOLIO  v1.0        ║
    ╚═══════════════════════════════════════╝
          `}</pre>
        </div>
        <div className="command-prompt">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat developer.txt</span>
        </div>
        <div className="terminal-output">
          <h1 className="terminal-headline">
            <span className="prompt-symbol">&gt;</span> {personalInfo.name}
          </h1>
          <p className="terminal-subtitle">
            <span className="comment">#</span> {personalInfo.title}
          </p>
          <p className="terminal-tagline">
            <span className="comment">//</span> {personalInfo.tagline}
          </p>
          <div className="terminal-info">
            <div className="info-line">
              <ChevronRight size={14} className="chevron" />
              <span className="key">Experience:</span>
              <span className="value">{personalInfo.yearsOfExperience} years</span>
            </div>
            <div className="info-line">
              <ChevronRight size={14} className="chevron" />
              <span className="key">Role:</span>
              <span className="value">{personalInfo.currentRole}</span>
            </div>
            <div className="info-line">
              <ChevronRight size={14} className="chevron" />
              <span className="key">Location:</span>
              <span className="value">{personalInfo.location}</span>
            </div>
          </div>
        </div>
        <div className="typing-indicator">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="typed-text">{typedText}</span>
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>█</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="terminal-section">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat about.txt</span>
        </div>
        <div className="terminal-content">
          <div className="file-header">
            <File size={16} />
            <span>about.txt</span>
          </div>
          <div className="about-output">
            <p className="bio-text">{aboutData.bio}</p>
            <div className="highlights">
              <div className="highlight-header">
                <span className="comment"># Key Highlights</span>
              </div>
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-line">
                  <span className="line-number">{String(index + 1).padStart(2, '0')}</span>
                  <ChevronRight size={14} className="chevron" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="terminal-section">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">ls -la ./projects</span>
        </div>
        <div className="terminal-content">
          <div className="ls-header">
            <span>total {projectsData.length}</span>
          </div>
          <div className="projects-list">
            {projectsData.map((project, index) => (
              <div key={project.id} className="project-item">
                <div className="project-meta">
                  <Folder size={16} className="folder-icon" />
                  <span className="permissions">drwxr-xr-x</span>
                  <span className="date">{project.year}</span>
                  <span className="project-name">{project.name}</span>
                </div>
                <div className="project-details">
                  <p className="project-desc">
                    <span className="comment">#</span> {project.description}
                  </p>
                  <div className="tech-stack">
                    <span className="stack-label">tech_stack:</span>
                    <span className="stack-values">
                      [{project.technologies.map(tech => `"${tech}"`).join(', ')}]
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="terminal-section">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat skills.json</span>
        </div>
        <div className="terminal-content">
          <div className="json-output">
            <div className="json-line">
              <span className="bracket">{'{'}</span>
            </div>
            
            <div className="json-property">
              <span className="key">"primary_focus"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.primary.map((skill, idx) => (
                  <span key={idx} className="skill-value primary">
                    "{skill}"{idx < skillsData.primary.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div className="json-property">
              <span className="key">"languages"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.languages.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.languages.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div className="json-property">
              <span className="key">"technologies"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.technologies.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.technologies.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div className="json-property">
              <span className="key">"practices"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.practices.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.practices.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>]</span>
            </div>

            <div className="json-line">
              <span className="bracket">{'}'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="terminal-section">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat contact.info</span>
        </div>
        <div className="terminal-content">
          <div className="contact-output">
            <p className="contact-intro">
              <span className="comment"># Available for new opportunities and collaborations</span>
            </p>
            <div className="contact-links">
              <a 
                href={`mailto:${contactData.email}`} 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
                <span className="link-text">email: {contactData.email}</span>
              </a>
              <a 
                href={`https://github.com/${contactData.github}`}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <span className="link-text">github: /{contactData.github}</span>
              </a>
              <a 
                href={`https://linkedin.com/in/${contactData.linkedin}`}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                <span className="link-text">linkedin: /{contactData.linkedin}</span>
              </a>
              <a 
                href={`https://twitter.com/${contactData.twitter}`}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
                <span className="link-text">twitter: @{contactData.twitter}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terminal-footer">
        <div className="footer-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">echo "© 2024 {personalInfo.name} | Built with &lt;code/&gt;"</span>
        </div>
        <div className="footer-output">
          © 2024 {personalInfo.name} | Built with &lt;code/&gt;
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
