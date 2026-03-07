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

export const experienceData = [
  {
    id: 1,
    company: "TechVision AI",
    position: "Software Development Engineer",
    duration: "Aug 2023 - May 2024",
    location: "San Francisco, CA",
    achievements: [
      "As the Founding Engineer, developed backend microservices with 50+ APIs from scratch using domain-driven architecture in Golang for AI-driven outdoor/indoor security camera products.",
      "Led the design and development of fault-tolerant distributed cron services, automating OEM camera ID provisioning and subscription revenue-sharing computations, ensuring reliable and idempotent execution of business-critical financial workflows.",
      "Architected and productionized a real-time analytics and fleet observability platform using ClickHouse and Grafana, processing 30M+ events/day across 300K+ active cameras, enabling P50/P90/P95/P99 anomaly detection, firmware-level behavioral analysis, and real-time fleet connectivity monitoring."
    ]
  }
];

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
