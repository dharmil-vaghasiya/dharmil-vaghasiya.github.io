import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Folder, File, ChevronRight, Briefcase, Calendar, MapPin } from 'lucide-react';
import { personalInfo, aboutData, experienceData, projectsData, skillsData, contactData } from '../data/mockData';

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
  }, [typedText, currentCommand]);

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
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
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
            onClick={() => scrollToSection('experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            ./experience
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

      {/* Experience Section */}
      <section id="experience" className="terminal-section">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat work_history.log</span>
        </div>
        <div className="terminal-content">
          <div className="experience-timeline">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <div className="experience-title">
                    <Briefcase size={18} className="briefcase-icon" />
                    <div>
                      <h3 className="experience-position">{exp.position}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          className="experience-company experience-company-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="experience-company">{exp.company}</p>
                      )}
                      {Array.isArray(exp.roles) && exp.roles.length > 0 && (
                        <div className="experience-roles">
                          {exp.roles.map((role, roleIdx) => (
                            <div key={roleIdx} className="experience-role">
                              <span className="role-title">{role.title}</span>
                              <span className="role-sep">·</span>
                              <span className="role-duration">{role.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-line">
                      <span className="bullet">•</span>
                      <p>{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="terminal-section skills-compact">
        <div className="section-command">
          <span className="prompt">guest@portfolio:~$</span>
          <span className="command">cat skills.json</span>
        </div>
        <div className="terminal-content skills-content">
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
              <span className="key">"databases_frameworks"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.databasesFrameworks.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.databasesFrameworks.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div className="json-property">
              <span className="key">"devops"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.devops.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.devops.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              <span>],</span>
            </div>

            <div className="json-property">
              <span className="key">"backend_stack"</span>
              <span>: [</span>
              <div className="json-array">
                {skillsData.backendStack.map((skill, idx) => (
                  <span key={idx} className="skill-value">
                    "{skill}"{idx < skillsData.backendStack.length - 1 ? ',' : ''}
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
              <span className="comment"># Always open to collaborate and chat about backend, distributed systems, AI, and product engineering</span>
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
                href={`https://linkedin.com/in/${contactData.linkedin}`}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                <span className="link-text">linkedin: /{contactData.linkedin}</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terminal-footer">
          <div className="footer-command">
            <span className="prompt">dharmil@portfolio:~$</span>
            <span className="command">echo "No bugs. Just undocumented features."</span>
          </div>
          <div className="footer-output">
            No bugs. Just undocumented features.
          </div>
        </footer>
    </div>
  );
};

export default LandingPage;
