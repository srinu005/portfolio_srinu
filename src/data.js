export const profile = {
  name: "Ramatenki Srinivasa Rao",
  title: "Software Developer — Python Full Stack Developer & Applied LLM Engineering",
  location: "Hyderabad, India",
  email: "srinuramatenki20@gmail.com",
  github: "https://github.com/srinu005",
  linkedin: "https://www.linkedin.com/in/sreenivas5710613b9",
  tagline:
    "I build backend systems that stay fast under load, and I'm extending that into applied LLM engineering -- integrating language models into real, working products rather than demos.",
  summary:
    "Software developer with a foundation in Data Structures, Algorithms, and System Design, focused on Python (FastAPI/Django) and PostgreSQL. I've built four projects spanning backend systems, full-stack apps, and LLM integration -- three with live demos, two using Google Gemini. GATE CS 2026 rank: 27,094.",
};

export const skills = {
  "Languages & Web": ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Frameworks": ["FastAPI", "Django", "Django REST Framework", "React"],
  "AI & LLM": ["Google Gemini API", "LLM integration", "Qdrant (vector DB)"],
  "Databases": ["PostgreSQL", "Redis", "Qdrant"],
  "Tools & DevOps": ["Docker", "Git", "AWS", "Celery", "Pytest"],
  "Core CS": ["Data Structures & Algorithms", "OOPS", "DBMS", "Networking"],
};

export const currentlyLearning = ["LangChain", "LLM orchestration frameworks"];

export const projects = [
  {
    name: "AyuHealth AI",
    tagline: "Multilingual voice-based healthcare assistant -- B.Tech final-year project",
    description:
      "An intelligent healthcare assistant that delivers medical guidance across 10+ Indian languages. Combines Google Gemini (gemini-3-flash-preview) for context-aware symptom analysis with a hybrid voice architecture -- browser-native speech synthesis with automatic fallback to Gemini Cloud TTS when a device lacks a regional-language voice pack.",
    highlights: [
      "Hybrid TTS pipeline: Web Speech API with automatic fallback to Gemini 3.1 Flash Cloud TTS, streaming 24kHz PCM audio via the Web Audio API",
      "Guided patient-intake flow collecting demographics (age, gender, region, language) for culturally relevant, localized advice",
      "Full voice recognition + speech feedback across Telugu, Hindi, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, and Indian English",
    ],
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API", "Web Audio API"],
    github: "https://github.com/srinu005/ayuhealth-ai",
    demo: "https://ayuhealth0.netlify.app/",
    demoLabel: "Live Demo",
  },
  {
    name: "DocChat-AI",
    tagline: "AI-powered document Q&A assistant",
    description:
      "Upload a document and hold a multi-turn conversation about its contents, with Google Gemini generating context-aware answers. Built on an asynchronous task architecture so the web server never blocks on a slow AI response.",
    highlights: [
      "Async processing: uploads and questions are queued via Celery, processed by background workers, Redis as broker and result backend",
      "API acknowledges requests in under 200ms by queuing LLM calls to Celery workers, answers are delivered asynchronously.",
      "Three-service architecture (API + AI worker + cache) containerized with Docker Compose, deployable with a single command",
      "Deployed live on a free-tier host running the API and worker together in one container, since standard worker hosting requires a paid plan",
    ],
    tech: ["FastAPI", "Celery", "Redis", "Google Gemini API", "Docker"],
    github: "https://github.com/srinu005/DocChat-AI",
    demo: "https://docchat-ai-onzm.onrender.com/",
    demoLabel: "Live Demo",
  },
  {
    name: "CivicPulse",
    tagline: "Civic pollution-reporting platform",
    description:
      "A full-stack platform letting citizens report local pollution issues with photo and location evidence, publicly tracked on a map through to resolution by verified government officers. Built with strict role-based access control -- officer accounts can only be provisioned by a Super Admin, never self-registered.",
    highlights: [
      "Role-based access control (citizen / officer / admin) enforced via custom DRF permission classes, with a full audit-logged status workflow",
      "45 automated tests (33 backend, 12 frontend) covering auth, permissions, and the report status state machine",
      "Interactive Leaflet map, Recharts analytics dashboard for officers, JWT authentication, status-change email notifications (tested; SMTP-configurable)",
    ],
    tech: ["React", "Django REST Framework", "PostgreSQL", "JWT", "Docker", "Leaflet"],
    github: "https://github.com/srinu005/CivicPulse",
    demo: "https://civicpulse100.netlify.app/",
    demoLabel: "Live Demo",
  },
  {
    name: "Multi-Tenant B2B Platform",
    tagline: "Secure multi-tenant SaaS architecture",
    description:
      "A multi-tenant backend platform ensuring secure, isolated data per corporate client, with heavy operations offloaded to background workers to keep the API fast under load.",
    highlights: [
      "Multi-tenant architecture with secure data isolation between corporate clients",
      "Offloaded invoicing and email tasks to Celery background workers, reducing API latency by 70%",
      "90% test coverage with Pytest; containerized with Docker for production-ready deployment",
    ],
    tech: ["Django", "PostgreSQL", "Celery", "Docker", "Pytest"],
    github: "https://github.com/srinu005/Multi-Tenant-B2B-Platform",
    demo: null,
    demoLabel: null,
  },
];

export const education = {
  school: "University College of Engineering (KU), Kothagudem",
  degree: "B.Tech in Computer Science and Engineering",
  graduated: "June 2026",
  cgpa: "8.45",
  gate: "GATE CS 2026 -- Rank 27,094",
};
export const achievements = [
  {
    title: "Certificate of Merit - Naukri Campus Young Turks 2026",
    issuer: "Naukri Campus (HCLTech presents)",
    description:
      "Scored 93.25 percentile in India's largest skill contest, outperforming 93% of participants nationwide.",
      highlights: [
      "Certificate Id: 6acf4d5996ebe313e740ff1a",
    ],
    demo: "https://www.naukri.com/campus/certificates/young_turks26_round_1_achievement/v0/6acf4d5996ebe313e740ff1a?utm_source=certificate&utm_medium=copy&utm_campaign=6acf4d5996ebe313e740ff1a",
    demoLabel: "View Certificate",
  },
   {
    title: "Certificate of Participation, AINCAT 2026",
    issuer: "Naukri Campus",
    description:
      "Participated in AINCAT 2026, India's biggest career aptitude test conducted by Naukri Campus.",
      highlights: [
        " All India rank : 25029",
    "Certificate Id: 6a199d7a542fee52d1240cb7",
    ],
    demo: "https://www.naukri.com/campus/certificates/nc_ai_ncat_participation_may_2026/v0/6a199d7a542fee52d1240cb7?utm_source=certificate&utm_medium=copy&utm_campaign=6a199d7a542fee52d1240cb7",
    demoLabel: "View Certificate",
  },
];