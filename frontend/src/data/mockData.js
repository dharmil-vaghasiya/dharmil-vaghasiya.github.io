// Mock data for the personal landing page
export const personalInfo = {
  name: "Dharmil Vaghasiya",
  title: "Software Developer",
  tagline: "Building scalable systems with Go",
  yearsOfExperience: 3,
  currentRole: "SDE-2 at Instavision AI",
  location: "Ottawa, ON"
};

export const aboutData = {
  bio: "As a founding engineer at InstaVision, I've been part of the journey since day one, building and scaling our backend from the ground up. I focus on robust microservices in Go, database and API performance, and distributed systems that stay reliable under real production load. Today, InstaVision serves 300K+ users, supported by the systems I've designed and shipped.",
  backupBio: "As a founding engineer at InstaVision, I've been part of the journey since day one, building and scaling our backend from the ground up. I focus on robust microservices in Go, database and API performance, and distributed systems that stay reliable under real production load. Today, InstaVision serves 300K+ users, supported by the systems I've designed and shipped.",
  highlights: [
    "3+ years of professional experience",
    "Specialized in Go and microservices",
    "Modeled IoT device capabilities using the Matter Protocol",
    "Exploring LLM systems and applied AI for real products"
  ]
};

export const experienceData = [
  {
    id: 1,
    company: "InstaVision AI",
    position: "Software Development Engineer",
    duration: "Aug 2023 - Present",
    location: "Ottawa, ON (Remote)",
    achievements: [
      "As the Founding Engineer, developed backend microservices and APIs from scratch using domain-driven architecture in Golang for AI-driven outdoor/indoor security camera products.",
      "Led the design and development of fault-tolerant distributed cron services, subscription revenue-sharing computations and automating OEM camera ID provisioning, ensuring reliable and idempotent execution of business-critical financial workflows.",
      "Architected and productionized a real-time analytics and fleet observability platform using ClickHouse and Grafana, processing 30M+ events/day across 300K+ active cameras, enabling P50/P90/P95/P99 anomaly detection, firmware-level behavioral analysis, and real-time fleet connectivity monitoring.",
      "Engineered a Matter protocol-based device capability model and backend schema to enable capability-driven app UI rendering and seamless firmware cluster integration across IoT devices."
    ]
  },
  {
    id: 2,
    company: "KamiVision",
    position: "Software Engineer",
    duration: "Oct 2022 - Jul 2023",
    location: "Montreal, QC (Remote)",
    achievements: [
      "Contributed to KamiCare, an AI fall-detection product for senior living communities, helping deliver fast incident alerts and post-incident video review workflows for care teams.",
      "Integrated AWS Kinesis Video Streams to enable live camera streaming, increasing user engagement by 20%.",
      "Designed and implemented the Zone Detection feature along with key reliability enhancements, improving event detection precision by 5% and strengthening monitoring accuracy."
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
  primary: ["Go", "Distributed Systems", "System Design"],
  languages: ["Go", "JavaScript", "TypeScript", "Java", "C++", "HTML/CSS"],
  databasesFrameworks: ["MongoDB", "PostgreSQL", "Redis", "React.js"],
  devops: ["Docker", "Kubernetes", "Argo CD", "AWS (S3, EKS, ECR, IoT Core, KVS, EventBridge)"],
  backendStack: ["Kafka", "RabbitMQ", "Prometheus", "Grafana", "ClickHouse", "gRPC", "Git", "Keycloak"]
};

export const contactData = {
  email: "alex.chen@example.com",
  github: "alexchen",
  linkedin: "alexchen-dev"
};
