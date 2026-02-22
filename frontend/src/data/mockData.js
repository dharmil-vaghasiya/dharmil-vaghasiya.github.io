// Mock data for the personal landing page
export const personalInfo = {
  name: "Alex Chen",
  title: "Software Developer",
  tagline: "Building scalable systems with Go",
  yearsOfExperience: 3,
  currentRole: "Backend Engineer at TechStart",
  location: "San Francisco, CA"
};

export const aboutData = {
  bio: "I'm a software developer specializing in building high-performance backend systems. With 3 years of experience at a dynamic startup, I focus on creating scalable solutions that power real-world applications. My passion lies in clean code, system architecture, and solving complex technical challenges.",
  highlights: [
    "3+ years of professional experience",
    "Specialized in Go and microservices",
    "Built systems serving millions of users",
    "Passionate about clean architecture"
  ]
};

export const projectsData = [
  {
    id: 1,
    name: "Distributed Cache System",
    description: "High-performance distributed caching layer built with Go, handling 50K+ requests per second with sub-millisecond latency.",
    technologies: ["Go", "Redis", "Docker"],
    year: "2024"
  },
  {
    id: 2,
    name: "API Gateway Service",
    description: "Scalable API gateway managing authentication, rate limiting, and routing for microservices architecture.",
    technologies: ["Go", "PostgreSQL", "Kubernetes"],
    year: "2023"
  },
  {
    id: 3,
    name: "Real-time Analytics Pipeline",
    description: "Event-driven analytics system processing and aggregating millions of events daily with minimal overhead.",
    technologies: ["Go", "Kafka", "TimescaleDB"],
    year: "2024"
  }
];

export const skillsData = {
  primary: ["Go", "Microservices", "System Design"],
  languages: ["Go", "Python", "JavaScript", "SQL"],
  technologies: ["Docker", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "gRPC"],
  practices: ["CI/CD", "TDD", "Agile", "Code Review"]
};

export const contactData = {
  email: "alex.chen@example.com",
  github: "alexchen",
  linkedin: "alexchen-dev",
  twitter: "alexchen_dev"
};
