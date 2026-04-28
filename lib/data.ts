import {
  Code2,
  Server,
  Brain,
  Container,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  Layers,
  Cpu,
  // Tech icon fallbacks (for tools without official brand icons)
  Boxes,
  BrainCircuit,
  Database,
  GitBranch,
  Zap,
  Video,
  FileText,
  Mic,
  Film,
  Clapperboard,
  Bot,
  Shield,
  BarChart2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiOpenai,
  SiLangchain,
  SiN8N,
  SiDocker,
  SiVercel,
  SiNginx,
  SiGithubactions,
  SiElectron,
  SiPython,
  SiThreedotjs,
  SiCloudflare,
  SiRazorpay,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTelegram,
  SiGooglechrome,
} from "react-icons/si";
import type { IconType } from "react-icons";

// ─── Projects ────────────────────────────────────────────────

export interface Project {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  badge: string;
  badgeColor: "emerald" | "blue" | "amber" | "zinc";
  liveUrl?: string;
  gradient: string;
  featured: boolean;
  // Detail page fields
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  architecture?: string;
}

export const projects: Project[] = [
  {
    id: "ai-lead-qualification",
    slug: "ai-lead-qualification",
    number: "01",
    category: "AI Automation",
    title: "AI Lead Qualification & CRM Auto-Sync",
    tagline: "Replace manual lead intake with a conversational AI that qualifies and syncs to your CRM automatically.",
    description:
      "A conversational AI chatbot that qualifies inbound leads through natural dialogue, extracts structured data, and pushes it directly to the client's CRM via webhook — eliminating manual entry and follow-up delay.",
    techStack: ["Next.js", "OpenAI API", "PostgreSQL", "Webhook", "Tailwind CSS"],
    badge: "Portfolio Project",
    badgeColor: "blue",
    gradient: "from-violet-950 via-purple-950 to-slate-950",
    featured: false,
    overview:
      "Traditional lead forms capture surface-level data and create a lag between submission and sales response. This project replaces the static intake form with a dynamic AI-driven conversation that adapts its questions based on prior answers, scores the lead, and triggers CRM records instantly.",
    problem:
      "Sales teams were spending hours manually qualifying leads from web forms, often responding hours after submission. Low-quality leads wasted sales bandwidth while high-intent leads went cold.",
    solution:
      "A chatbot widget embedded on the client's site conducts structured qualification conversations. Once a conversation concludes, the AI extracts key fields, assigns a lead score, and fires a CRM webhook — populating the pipeline before a human ever reviews it.",
    keyFeatures: [
      {
        title: "Adaptive Dialogue",
        description:
          "Questions branch based on previous answers, ensuring relevant qualification without rigid form structure.",
      },
      {
        title: "Structured Data Extraction",
        description:
          "AI parses free-form responses into typed CRM fields: company size, budget, timeline, and use case.",
      },
      {
        title: "CRM Webhook Sync",
        description:
          "Qualified leads are pushed to the CRM immediately via webhook with full conversation context attached.",
      },
      {
        title: "Lead Scoring",
        description:
          "Leads are scored 1–100 based on qualification criteria and surfaced to sales reps in priority order.",
      },
    ],
  },
  {
    id: "ai-document-intelligence",
    slug: "ai-document-intelligence",
    number: "02",
    category: "AI / RAG",
    title: "AI Document Intelligence Platform",
    tagline: "Ask questions directly to your PDF library — get cited, structured answers in seconds.",
    description:
      "A RAG-based platform that ingests PDF documents, indexes them in a vector database, and allows users to query across the entire library with natural language — returning answers with source citations and optionally extracting structured data tables.",
    techStack: ["Next.js 14", "OpenAI", "Pinecone", "PostgreSQL", "Tailwind CSS"],
    badge: "Portfolio Project",
    badgeColor: "blue",
    gradient: "from-blue-950 via-cyan-950 to-slate-950",
    featured: false,
    overview:
      "Document-heavy workflows — legal, financial, compliance — require analysts to manually read through hundreds of pages to find specific information. This platform removes that bottleneck entirely by making any document collection instantly queryable.",
    problem:
      "Professionals working with large document libraries spend disproportionate time searching for information that is technically already there — just not instantly accessible. Manual search misses context and takes hours.",
    solution:
      "PDFs are chunked, embedded, and stored in Pinecone. A query interface uses RAG to retrieve the most relevant chunks and synthesize answers with page-level citations. A secondary extraction mode pulls structured tables from specific document types.",
    keyFeatures: [
      {
        title: "PDF Ingestion Pipeline",
        description:
          "Upload PDFs; documents are parsed, chunked into semantically meaningful segments, and embedded using OpenAI's embedding model.",
      },
      {
        title: "Vector Search via Pinecone",
        description:
          "Embeddings stored in Pinecone enable sub-second semantic retrieval across thousands of pages.",
      },
      {
        title: "Cited Q&A",
        description:
          "Every answer includes source references — document name, page number, and quoted excerpt.",
      },
      {
        title: "Structured Data Extraction",
        description:
          "Extracts tables, figures, and key fields from standardized document formats into JSON output downloadable as CSV.",
      },
    ],
  },
  {
    id: "desktop-monitoring-system",
    slug: "desktop-monitoring-system",
    number: "03",
    category: "Enterprise Tooling",
    title: "Desktop Monitoring System",
    tagline: "Real-time visibility into employee desktop activity across the org — no VPN, no complexity.",
    description:
      "A four-component monitoring solution: an Electron desktop agent capturing activity, a Chrome extension tracking browser sessions, an Express backend aggregating telemetry, and a Next.js admin dashboard with live charts and per-employee timelines.",
    techStack: ["Electron", "Chrome Extension", "Express", "Next.js", "Socket.IO", "PostgreSQL"],
    badge: "Internal Tool",
    badgeColor: "zinc",
    gradient: "from-slate-900 via-zinc-900 to-neutral-950",
    featured: true,
    overview:
      "Remote and hybrid teams create visibility gaps for IT and management. This system provides a lightweight, non-invasive monitoring layer across all company machines — surfacing usage patterns, idle time, and application activity in a central real-time dashboard.",
    problem:
      "The client had no visibility into how remote employees were spending their workday. Manual check-ins were inefficient. They needed objective, real-time data without deploying heavy enterprise DLP software that required complex infrastructure.",
    solution:
      "A four-layer architecture: Electron collects desktop-level telemetry, the Chrome extension captures browsing activity, both report to a central Express backend, and the Next.js dashboard renders everything live with Socket.IO push updates.",
    keyFeatures: [
      {
        title: "Electron Desktop Agent",
        description:
          "Silent background process captures application focus, idle detection, and screenshot intervals at configurable frequency using active-win.",
      },
      {
        title: "Chrome Extension",
        description:
          "Tracks visited domains and time-on-site during work hours, reporting to the central backend alongside desktop telemetry.",
      },
      {
        title: "Central Express Backend",
        description:
          "Aggregates telemetry from all agents, stores it in PostgreSQL, and exposes REST + WebSocket endpoints for the dashboard.",
      },
      {
        title: "Real-Time Admin Dashboard",
        description:
          "Next.js frontend shows live activity feeds, per-employee timelines, application usage breakdowns, and productivity metrics.",
      },
    ],
    architecture: "Desktop Agent + Chrome Extension → Express API → PostgreSQL → Socket.IO → Next.js Dashboard",
  },
  {
    id: "donkeygpt",
    slug: "donkeygpt",
    number: "04",
    category: "SaaS Platform",
    title: "DonkeyGPT.io",
    tagline: "Learn anything explained at exactly your level — from expert depth to plain English.",
    description:
      "An AI learning platform that simplifies complex topics to five comprehension levels. Responses stream via SSE for a real-time feel, with full auth, multi-conversation history, and Razorpay subscription billing.",
    techStack: ["Next.js 16", "PostgreSQL", "Prisma", "Razorpay", "NextAuth.js v5"],
    badge: "Live Product",
    badgeColor: "emerald",
    gradient: "from-amber-950 via-orange-950 to-slate-950",
    featured: true,
    overview:
      "Most AI chat tools return responses calibrated for the average user, which either overwhelms beginners or bores experts. DonkeyGPT solves this with an explicit simplicity dial — from ELI5 to PhD — giving learners responses tuned to exactly where they are.",
    problem:
      "Generic AI explanations fail students who need concepts broken down further and frustrate experts who want depth without hand-holding. No consumer tool made comprehension level a first-class, persistent feature.",
    solution:
      "A prompt engineering layer maps user-selected levels (1–5) to distinct instruction sets injected into every request. SSE streaming makes responses appear instantly. Razorpay webhooks handle subscription state and usage limits per tier.",
    keyFeatures: [
      {
        title: "5-Level Simplicity System",
        description:
          "Level 1 is ELI5; Level 5 is peer-to-peer technical depth. Each level maps to distinct system prompt instructions that persist across sessions.",
      },
      {
        title: "SSE Streaming",
        description:
          "Responses stream character-by-character via Server-Sent Events, eliminating perceived wait time.",
      },
      {
        title: "Razorpay Subscriptions",
        description:
          "Monthly and annual plans with webhook-driven state management, usage metering, and automatic tier downgrades on non-renewal.",
      },
      {
        title: "Multi-Conversation History",
        description:
          "Users maintain multiple named chat threads, each with full message history stored per account.",
      },
    ],
  },
  {
    id: "geopolitical-risk-radar",
    slug: "geopolitical-risk-radar",
    number: "05",
    category: "Data Platform",
    title: "Geopolitical Risk Radar",
    tagline: "One dashboard for global risk signals — with Telegram alerts and Redis-powered speed.",
    description:
      "A risk aggregation platform that ingests data from geopolitical sources, scores events by severity and region, caches results in Redis, and pushes critical alerts to subscribers via a Telegram bot.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "Telegram Bot API", "NextAuth.js"],
    badge: "Portfolio Project",
    badgeColor: "blue",
    gradient: "from-red-950 via-rose-950 to-slate-950",
    featured: false,
    overview:
      "Risk analysts and traders monitoring geopolitical events spend hours aggregating information from disparate sources. This platform centralizes that signal into one scored, filterable feed with proactive alerting — so nothing slips through.",
    problem:
      "No unified tool existed for mid-market risk analysts to track geopolitical events with automated severity scoring. They were manually scanning news feeds and forwarding alerts to stakeholders, creating inconsistent coverage.",
    solution:
      "An ingestion layer polls data sources on configurable intervals. Each event is scored via a rules-based severity model and stored in PostgreSQL. Redis caches the current risk index for near-instant API responses. A Telegram bot pushes alerts when thresholds are crossed.",
    keyFeatures: [
      {
        title: "Multi-Source Ingestion",
        description:
          "Pulls events from configured APIs and RSS feeds, deduplicates, and normalizes to a common schema.",
      },
      {
        title: "Severity Scoring",
        description:
          "Rules-based scoring weighs event type, region, economic exposure, and recency into a composite risk score.",
      },
      {
        title: "Redis Caching",
        description:
          "Current risk index and recent events cached in Redis, serving dashboard requests at sub-10ms latency.",
      },
      {
        title: "Telegram Alert Bot",
        description:
          "Subscribers receive push alerts when any region crosses a configurable risk threshold, with direct dashboard deep links.",
      },
    ],
  },
  {
    id: "ipo-ai",
    slug: "ipo-ai",
    number: "06",
    category: "ML / Finance",
    title: "IPO AI — Indian IPO Predictor",
    tagline: "Machine learning predictions on Indian IPO listing performance using GMP, subscriptions, and market data.",
    description:
      "An ML system predicting IPO listing outcomes for Indian markets. XGBoost models trained on historical subscription data, grey market premium signals, and market indices — with an automated scraping pipeline keeping data fresh.",
    techStack: ["Next.js", "Python", "XGBoost", "PostgreSQL", "Prisma", "Docker"],
    badge: "Portfolio Project",
    badgeColor: "amber",
    gradient: "from-green-950 via-emerald-950 to-slate-950",
    featured: false,
    overview:
      "Indian retail investors had no data-driven tool to evaluate IPO subscription decisions. Decisions were made on social media hype and broker tips rather than quantitative signals. This system brings ML-grade analysis to a previously intuition-driven market.",
    problem:
      "The Indian IPO market sees dozens of listings per quarter. Retail investors were making decisions based on grey market premiums and promoter reputation alone, missing the compounding signals that predict listing outcomes.",
    solution:
      "A scraping pipeline collects historical IPO data — subscription rates across investor categories, GMP history, and index data. XGBoost classifiers and regressors predict listing day performance. The Next.js frontend surfaces predictions with confidence scores.",
    keyFeatures: [
      {
        title: "XGBoost Prediction Models",
        description:
          "Separate classification (above/below issue price) and regression (listing gain %) models trained on 300+ historical IPOs.",
      },
      {
        title: "Auto-Scraping Pipeline",
        description:
          "Scripts run on schedule to collect live subscription data, GMP updates, and Nifty/VIX index values.",
      },
      {
        title: "GMP Signal Integration",
        description:
          "Grey market premium data ingested and normalized as a key feature, significantly improving model accuracy.",
      },
      {
        title: "Accuracy Tracking",
        description:
          "The site tracks model prediction accuracy against actual listing results over time — full transparency on how the model performs.",
      },
    ],
  },
  {
    id: "password-generator",
    slug: "password-generator",
    number: "07",
    category: "Browser Tool",
    title: "Password Generator",
    tagline: "A fast, zero-dependency browser tool for generating strong, customizable passwords.",
    description:
      "A vanilla JavaScript browser tool using the Web Crypto API for cryptographically secure password generation. Configurable length, character sets, and strength visualization — no dependencies, no server, no data sent anywhere.",
    techStack: ["Vanilla JS", "HTML", "CSS", "Web Crypto API"],
    badge: "Open Source",
    badgeColor: "zinc",
    gradient: "from-zinc-900 via-neutral-900 to-stone-950",
    featured: false,
    overview:
      "Browser-native password generation with no external dependencies, no network requests, and no framework overhead. Built to be embeddable in any site as a single HTML file and to run fully offline.",
    problem:
      "Most password generator sites require JavaScript frameworks, make network requests, or are cluttered with third-party scripts. Users who care about security don't want a tool that phones home.",
    solution:
      "Web Crypto API's getRandomValues provides cryptographic randomness directly in the browser. Character set selection, length controls, and a strength meter are all pure DOM manipulation — no build step, no dependencies.",
    keyFeatures: [
      {
        title: "Web Crypto API",
        description:
          "Uses crypto.getRandomValues for cryptographically secure randomness — not Math.random().",
      },
      {
        title: "Configurable Character Sets",
        description:
          "Toggle uppercase, lowercase, numbers, and symbols independently with minimum count enforcement per category.",
      },
      {
        title: "Strength Visualization",
        description:
          "Real-time entropy calculation displayed as a color-coded strength bar with bit-length readout.",
      },
      {
        title: "Zero Dependencies",
        description:
          "Single HTML file — no npm, no bundler, no network requests. Works completely offline.",
      },
    ],
  },
  {
    id: "postmatrix",
    slug: "postmatrix",
    number: "08",
    category: "SaaS Platform",
    title: "PostMatrix",
    tagline: "Generate, schedule, and auto-publish social media content across all platforms — end to end.",
    description:
      "A social media automation SaaS where users write a brief and the platform generates copy and images, then schedules and publishes across Instagram, Facebook, X, and LinkedIn automatically. Docker-deployed on VPS with BullMQ job queuing.",
    techStack: ["Next.js 14", "PostgreSQL", "OpenAI GPT-4o", "Docker", "Redis", "BullMQ"],
    badge: "Portfolio SaaS",
    badgeColor: "blue",
    gradient: "from-purple-950 via-violet-950 to-slate-950",
    featured: true,
    overview:
      "Social media management for small businesses is time-intensive and inconsistent. PostMatrix removes the bottleneck by automating the entire content pipeline — from brief to published post — without the user needing to touch Canva or a scheduler.",
    problem:
      "Small business owners were spending 5–10 hours per week on social media — writing captions, creating graphics, manually publishing at optimal times across four platforms. They needed the whole workflow automated, not just one step.",
    solution:
      "Users write a content brief; GPT-4o generates platform-optimized captions and kie.ai generates matching visuals. A BullMQ-backed scheduler queues posts for optimal publish times and fires platform API calls automatically. Full Docker deployment on Hostinger VPS with Nginx.",
    keyFeatures: [
      {
        title: "AI Content Generation",
        description:
          "GPT-4o creates platform-specific captions — character limits, hashtag density, and tone adapted per platform from a single brief.",
      },
      {
        title: "AI Image Generation",
        description:
          "On-brand images generated automatically via kie.ai — no Canva, no designer, no manual asset creation.",
      },
      {
        title: "Multi-Platform Publishing",
        description:
          "Posts published to Instagram, Facebook, X, and LinkedIn via official APIs on a configured schedule.",
      },
      {
        title: "BullMQ Job Queue",
        description:
          "Redis-backed BullMQ handles async scheduling, automatic retries on API failures, and per-platform rate limit compliance.",
      },
    ],
  },
  {
    id: "resume-3d-portfolio",
    slug: "resume-3d-portfolio",
    number: "09",
    category: "AI Pipeline",
    title: "Resume to 3D Portfolio Builder",
    tagline: "Upload a PDF resume — get a fully rendered, deployed 3D interactive portfolio in minutes.",
    description:
      "An end-to-end AI pipeline that parses a PDF resume, extracts structured career data, generates a Three.js 3D portfolio site, and deploys it to Cloudflare R2. BullMQ manages the multi-step job queue; users get a live URL when generation completes.",
    techStack: ["Next.js", "BullMQ", "Redis", "Cloudflare R2", "Three.js", "PostgreSQL", "Prisma"],
    badge: "Portfolio Project",
    badgeColor: "amber",
    gradient: "from-indigo-950 via-blue-950 to-slate-950",
    featured: false,
    overview:
      "Traditional portfolio building takes days of setup, content writing, and deployment decisions. This system turns a raw PDF resume into a deployed 3D portfolio in under two minutes — with no design or coding input from the user.",
    problem:
      "Developers and designers building their first portfolio face friction at every step: choosing a framework, writing copy, creating visuals, and configuring deployment. Many never publish anything at all.",
    solution:
      "PDF is parsed and structured by an AI pipeline. A template selection step picks the best Three.js portfolio template. BullMQ coordinates the multi-step pipeline — parse, extract, generate, build, upload to R2 — and streams progress updates via SSE.",
    keyFeatures: [
      {
        title: "PDF Parsing + AI Extraction",
        description:
          "Raw resume text parsed and structured into typed career schema: experience, skills, projects, and education.",
      },
      {
        title: "Three.js Portfolio Generation",
        description:
          "Structured data injected into 3D templates with dynamic sections, animated parallax transitions, and responsive layout.",
      },
      {
        title: "BullMQ Pipeline Orchestration",
        description:
          "Multi-step job queue with per-step retries, status events streamed to the frontend via SSE for live progress feedback.",
      },
      {
        title: "Cloudflare R2 Hosting",
        description:
          "Generated portfolio assets uploaded to R2 and served via CDN — no server-side rendering required at access time.",
      },
    ],
    architecture:
      "Upload → Redis Queue → BullMQ Workers (parse → extract → generate → build → upload) → R2 CDN → Live URL",
  },
  {
    id: "zerokulabs-crm",
    slug: "zerokulabs-crm",
    number: "10",
    category: "Internal Tool",
    title: "ZeroKuLabs Internal CRM",
    tagline: "A pharma-specific CRM with voice call intelligence, staff scheduling, and territory dashboards.",
    description:
      "A custom internal CRM built for a pharmaceutical company — managing chatbot leads, VAPI-powered voice call follow-ups, staff scheduling with shift management, and Recharts-based territory analytics dashboards.",
    techStack: ["Next.js 16", "PostgreSQL", "VAPI.ai", "Recharts", "Prisma", "NextAuth.js"],
    badge: "Internal Tool",
    badgeColor: "zinc",
    gradient: "from-teal-950 via-cyan-950 to-slate-950",
    featured: false,
    overview:
      "Generic CRMs like Salesforce are over-engineered for pharma field sales teams and lack industry-specific workflows. This custom CRM was built ground-up for a territory-based pharma sales model — with every module shaped around how the team actually works.",
    problem:
      "The client's sales team was using spreadsheets and WhatsApp to manage doctor visits, track samples dispensed, and log call outcomes. Monthly reporting required manual data consolidation across multiple files.",
    solution:
      "A purpose-built Next.js CRM with modules for each workflow: doctor registry, visit logging with VAPI voice call transcription, sample inventory tracking, staff scheduling, and auto-generated territory reports via Recharts dashboards.",
    keyFeatures: [
      {
        title: "VAPI Voice Call Integration",
        description:
          "Sales reps log calls hands-free via VAPI; transcriptions are automatically tagged to the corresponding doctor record.",
      },
      {
        title: "Staff Scheduling Module",
        description:
          "Shift management with territory assignment, leave tracking, and daily route planning for field reps.",
      },
      {
        title: "Recharts Analytics Dashboards",
        description:
          "Custom dashboards visualizing visit frequency, sample conversion rates, and territory performance vs. targets.",
      },
      {
        title: "Doctor Registry",
        description:
          "Full contact management for HCPs with visit history, prescription behavior tags, and follow-up scheduling.",
      },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "AI Tiger",
    period: "Dec 2025 — Present",
    role: "Software Developer",
    description:
      "Building a video generation platform handling complex multi-model workflows. Working with Kling, Veo, and Runway for video generation, ElevenLabs for TTS, and orchestration pipelines.",
    highlights: [
      "Multi-model video generation pipeline",
      "Credit billing system with usage tracking",
      "Per-project asset management",
      "n8n workflow orchestration",
    ],
    current: true,
  },
  {
    company: "Alif Overseas",
    period: "2023 — 2025",
    role: "Full Stack Developer",
    description:
      "Developed full-stack applications with React, Vue, and Node.js. Built RESTful APIs, integrated third-party services, and shipped production features across multiple client projects.",
    highlights: [
      "React & Vue.js frontend development",
      "Node.js + Express API design",
      "PostgreSQL & MongoDB databases",
      "Third-party service integrations",
    ],
  },
  {
    company: "Simple Digital",
    period: "2022 — 2023",
    role: "Frontend Developer",
    description:
      "Started career building responsive web applications. Learned React, modern CSS patterns, and professional development workflows in a fast-moving agency environment.",
    highlights: [
      "React component development",
      "Responsive CSS & Tailwind CSS",
      "Client project delivery",
      "Git version control workflows",
    ],
  },
];

// ─── Tech Stack ───────────────────────────────────────────────

export interface TechItem {
  name: string;
  icon: IconType | LucideIcon;
  color: string;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: Code2,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Next.js 15", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "shadcn/ui", icon: Boxes, color: "#ffffff" },
      { name: "Framer Motion", icon: SiFramer, color: "#BB4BFF" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#5A67D8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    name: "Integrations",
    icon: Brain,
    items: [
      { name: "OpenAI API", icon: SiOpenai, color: "#ffffff" },
      { name: "GPT-4o", icon: SiOpenai, color: "#10A37F" },
      { name: "LangChain", icon: SiLangchain, color: "#1C7A4B" },
      { name: "Pinecone", icon: Database, color: "#5835CC" },
      { name: "RAG Pipelines", icon: BrainCircuit, color: "#a78bfa" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
    ],
  },
  {
    name: "DevOps",
    icon: Container,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Hostinger VPS", icon: Server, color: "#6751A3" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    name: "Specialized",
    icon: Sparkles,
    items: [
      { name: "Jitsi", icon: Video, color: "#97CB3F" },
      { name: "Tiptap", icon: FileText, color: "#ffffff" },
      { name: "ElevenLabs TTS", icon: Mic, color: "#ffffff" },
      { name: "Kling / Veo", icon: Film, color: "#a78bfa" },
      { name: "Runway ML", icon: Clapperboard, color: "#ffffff" },
      { name: "kie.ai", icon: Bot, color: "#38BDF8" },
    ],
  },
];

// ─── Tech Icon Map (for project cards) ───────────────────────

export const techIconMap: Record<string, { icon: IconType | LucideIcon; color: string }> = {
  // Next.js variants
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Next.js 14": { icon: SiNextdotjs, color: "#ffffff" },
  "Next.js 15": { icon: SiNextdotjs, color: "#ffffff" },
  "Next.js 16": { icon: SiNextdotjs, color: "#ffffff" },
  // Frontend
  "React": { icon: SiReact, color: "#61DAFB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Vanilla JS": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss, color: "#1572B6" },
  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#8CC84B" },
  "Express": { icon: SiExpress, color: "#ffffff" },
  "Prisma": { icon: SiPrisma, color: "#5A67D8" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "Socket.IO": { icon: SiSocketdotio, color: "#ffffff" },
  // AI
  "OpenAI API": { icon: SiOpenai, color: "#ffffff" },
  "OpenAI": { icon: SiOpenai, color: "#ffffff" },
  "OpenAI GPT-4o": { icon: SiOpenai, color: "#10A37F" },
  "Pinecone": { icon: Database, color: "#5835CC" },
  "XGBoost": { icon: BrainCircuit, color: "#a78bfa" },
  // Infrastructure
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "Cloudflare R2": { icon: SiCloudflare, color: "#F38020" },
  "BullMQ": { icon: Zap, color: "#F59E0B" },
  "Webhook": { icon: Zap, color: "#F59E0B" },
  // Specialized
  "Electron": { icon: SiElectron, color: "#47848F" },
  "Chrome Extension": { icon: SiGooglechrome, color: "#4285F4" },
  "Three.js": { icon: SiThreedotjs, color: "#ffffff" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Telegram Bot API": { icon: SiTelegram, color: "#26A5E4" },
  "Razorpay": { icon: SiRazorpay, color: "#3395FF" },
  "NextAuth.js": { icon: Shield, color: "#a78bfa" },
  "NextAuth.js v5": { icon: Shield, color: "#a78bfa" },
  "Web Crypto API": { icon: Shield, color: "#10B981" },
  "VAPI.ai": { icon: Mic, color: "#ffffff" },
  "Recharts": { icon: BarChart2, color: "#8884d8" },
};

// ─── Skills ───────────────────────────────────────────────────

export interface SkillCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const skillCards: SkillCard[] = [
  {
    icon: Layers,
    title: "Full-Stack Product Development",
    description:
      "End-to-end product development from database schema to deployment. Real-time features, payment integrations, auth flows, and everything in between.",
  },
  {
    icon: Cpu,
    title: "Systems Integration",
    description:
      "Building products that connect APIs, automate workflows, and sync data across services — turning complex integration requirements into reliable pipelines.",
  },
  {
    icon: Container,
    title: "Production Deployment",
    description:
      "Docker, VPS management, Nginx, SSL. Zero-downtime deployments and performance optimization — owning the full deployment pipeline.",
  },
  {
    icon: Code2,
    title: "Rapid Prototyping",
    description:
      "Shipping functional products fast. From initial concept to working demo in days, without cutting corners on code quality or scalability.",
  },
];

// ─── Social Links ─────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/hrishikeshnetke",
    icon: Github,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hrishikesh-netke-b62b09231/",
    icon: Linkedin,
  },
  {
    platform: "twitter",
    label: "Twitter",
    url: "https://x.com/netke2611",
    icon: Twitter,
  },
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/ig_klaw/",
    icon: Instagram,
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:work@hrishikeshnetke.in",
    icon: Mail,
  },
  {
    platform: "website",
    label: "Portfolio",
    url: "https://hrishikeshnetke.in",
    icon: Globe,
  },
];

// ─── Nav Links ────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
