# Personal Developer Landing Page - PRD

## Original Problem Statement
Create simple, elegant personal landing page for a software developer (3 years experience at startup, working primarily in Go).

## User Personas
- **Primary User:** Software developer showcasing portfolio
- **Target Audience:** Recruiters, hiring managers, fellow developers, potential collaborators

## Core Requirements (Static)
- Personal information display (name, title, experience)
- About/bio section
- Project showcase (2-3 key projects)
- Skills & technologies section
- Contact information with social links
- Professional, developer-focused aesthetic
- Responsive design
- Smooth navigation

## Implementation History

### Phase 1: Minimalist Design (Completed - Dec 2024)
**Date:** Initial implementation
- Created minimalist black & white landing page
- ForAI-inspired design with ultra-light typography
- All sections implemented: Hero, About, Projects, Skills, Contact
- Fixed navigation with smooth scroll
- Hover animations and transitions
- Mock data in `/app/frontend/src/data/mockData.js`

### Phase 2: Terminal Theme Redesign (Completed - Dec 2024)
**Date:** Current version
- **Complete redesign** with terminal/command-line aesthetic
- Dark terminal background (#0a0e27)
- Matrix green (#00ff41) primary color scheme
- Monospace fonts (Fira Code, JetBrains Mono)
- Terminal window chrome with macOS-style controls
- Command prompts for each section:
  - `cat developer.txt` (hero)
  - `cat about.txt` (about)
  - `ls -la ./projects` (projects)
  - `cat skills.json` (skills with JSON formatting)
  - `cat contact.info` (contact)
- ASCII art decoration
- Line numbers and file permissions
- Typing animation effect
- Blinking cursor indicator
- Syntax highlighting (comments, JSON, arrays)
- Terminal glow effects on hover
- Navigation styled as file paths (./about, ./projects, etc.)

## Current Architecture

### Frontend Structure
```
/app/frontend/src/
├── components/
│   └── LandingPage.jsx (Terminal-themed main component)
├── data/
│   └── mockData.js (Filler data for all sections)
├── App.js (Route configuration)
└── App.css (Terminal theme styles)
```

### Key Features Implemented
1. **Terminal Header**
   - Fixed navigation bar
   - Window controls (close, minimize, maximize)
   - Terminal title display
   - Command-style navigation buttons

2. **Hero Section**
   - ASCII art banner
   - Command prompt display
   - Name with green glow effect
   - Typing animation
   - Blinking cursor
   - Info lines with chevron icons

3. **About Section**
   - File header display
   - Bio text
   - Numbered highlights with line numbers
   - Hover animations

4. **Projects Section**
   - Unix ls -la command style
   - Folder icons and permissions
   - Project metadata (year, name)
   - Technology stack arrays
   - Hover effects with green border glow

5. **Skills Section**
   - JSON formatted output
   - Syntax highlighting
   - Categorized skills (primary_focus, languages, technologies, practices)
   - Interactive skill tags with hover effects

6. **Contact Section**
   - Social media links with icons
   - Command-style display
   - Hover effects with color transitions

7. **Footer**
   - Echo command display
   - Copyright notice

### Design System
**Colors:**
- Background: #0a0e27 (dark navy)
- Primary: #00ff41 (matrix green)
- Secondary: #7aa2f7 (blue)
- Accent: #bb9af7 (purple)
- Muted: #565f89 (gray)
- Text: #c0caf5 (light gray)

**Typography:**
- Font: Fira Code, JetBrains Mono (monospace)
- Hero: 48px
- Sections: 24px
- Body: 14px

**Animations:**
- Typing effect
- Cursor blinking (500ms interval)
- Fade in transitions
- Hover transforms and glows

## Mock Data Structure
Located in `/app/frontend/src/data/mockData.js`:
- personalInfo (name, title, tagline, experience, role, location)
- aboutData (bio, highlights array)
- projectsData (id, name, description, technologies, year)
- skillsData (primary, languages, technologies, practices)
- contactData (email, github, linkedin, twitter)

## Next Action Items

### Priority 0 (Ready to Use)
- ✅ Terminal theme fully implemented
- ✅ All sections working with mock data
- ✅ Responsive design implemented
- ✅ Animations and interactions complete

### Priority 1 (Content Updates)
- [ ] Replace mock data with actual personal information
- [ ] Add real GitHub username
- [ ] Add real LinkedIn profile
- [ ] Add real email address
- [ ] Update projects with actual work
- [ ] Add real Twitter/social handles

### Priority 2 (Enhancements)
- [ ] Add actual project screenshots/images
- [ ] Implement dark/light mode toggle
- [ ] Add resume download functionality
- [ ] Add project detail modals
- [ ] Add GitHub stats integration
- [ ] Add blog section (optional)
- [ ] Add visitor counter/analytics

### Priority 3 (Advanced Features)
- [ ] Backend integration for contact form
- [ ] Database for project management
- [ ] Admin panel for content updates
- [ ] Blog CMS integration
- [ ] Real-time GitHub activity feed

## Technical Notes
- Using React with functional components and hooks
- Smooth scroll behavior implemented
- Section tracking for active navigation
- All animations CSS-based (no heavy JS)
- Mobile-responsive with breakpoint at 768px
- No backend currently needed (static content)

## Design Guidelines Applied
- Terminal/command-line aesthetic
- Authentic developer vibe
- Monospace fonts throughout
- Proper syntax highlighting
- Terminal window chrome
- Command prompts and file operations
- Unix-style directory listings
- JSON formatting for structured data
