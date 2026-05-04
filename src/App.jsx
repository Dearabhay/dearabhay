import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, ExternalLink, Download,
  Code2, Gamepad2, Database, Server, ShieldCheck, Brain, Trophy,
  GraduationCap, Sparkles, ArrowRight, Smartphone, Rocket
} from "lucide-react";

const Github = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const Linkedin = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import "./style.css";

const profile = {
  name: "Abhay Kumar",
  role: "Software Development Engineer | Full Stack Developer | Android Game Developer",
  location: "Greater Noida, India",
  phone: "+91 7634974940",
  email: "abhaykumarniraj@gmail.com",

  // Yaha apna real GitHub profile link paste karna
  github: "https://github.com/Dearabhay",

  // Yaha apna real LinkedIn profile link paste karna
  linkedin: "https://www.linkedin.com/dearabhaykumar",

  // Tumhara DA Games website
  gameStudio: "https://da-games-ecru.vercel.app/"
};

const projects = [
  {
    title: "EduVahak",
    badge: "School ERP SaaS Platform",
    live: "https://edu-vahak.vercel.app/",
    stack: "React.js · TypeScript · Supabase · PostgreSQL · Capacitor",
    description:
      "A multi-tenant school ERP platform with RBAC, PostgreSQL Row-Level Security, Supabase Edge Functions and mobile deployment using Capacitor.",
    points: [
      "Institution-wise secure data isolation",
      "Server-side APIs with Edge Functions",
      "Improved API response time by around 25%"
    ],
    icon: ShieldCheck
  },
  {
    title: "PathFinder",
    badge: "AI Career Guidance Platform",
    live: "https://career-guider-six.vercel.app/",
    stack: "React.js · Supabase · PostgreSQL · Edge Functions",
    description:
      "An AI-powered platform that analyzes education, skills and interests to recommend personalized career paths and growth opportunities.",
    points: [
      "Secure AI inference",
      "Safe API key management",
      "Scalable backend architecture"
    ],
    icon: Brain
  },
  {
    title: "Servantra",
    badge: "Service Management Platform",
    live: "https://servantra.vercel.app/",
    stack: "React.js · TypeScript · Vite · Tailwind CSS · Supabase",
    description:
      "A full-stack service platform with JWT authentication, Supabase RLS protection, clean MVC architecture and responsive UI.",
    points: [
      "JWT-based secure auth",
      "Reusable UI components",
      "Mobile-first responsive design"
    ],
    icon: Server
  }
];

const games = [
  {
    title: "Master Chess",
    emoji: "♟️",
    type: "Strategy · Board",
    description:
      "A chess application with AI opponent, multiplayer mode, challenge modes, achievements, star ratings and board themes.",
    features: ["AI Opponent", "Multiplayer", "200 Levels", "Achievements"],
    tone: "green"
  },
  {
    title: "Sweet Crunch",
    emoji: "🍬",
    type: "Casual · Match-3",
    description:
      "A colorful match-3 puzzle game where players match candies, donuts and sweets to complete engaging levels.",
    features: ["Match-3", "Boosters", "Level Map", "5.0 Rating"],
    tone: "pink"
  },
  {
    title: "Puzzle Arena",
    emoji: "🧩",
    type: "Puzzle · Brain Game",
    description:
      "A brain-focused puzzle game designed for logical challenges, clean mobile gameplay and Android users.",
    features: ["Brain Puzzle", "Android", "AdMob Ready", "Free Play"],
    tone: "blue"
  }
];

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "JWT",
  "RBAC",
  "RLS",
  "Tailwind CSS",
  "Vite",
  "Capacitor",
  "Git",
  "GitHub",
  "Vercel",
  "AWS",
  "DSA",
  "OOPs",
  "DBMS",
  "OS"
];

const achievements = [
  "Published 3 Android games on Google Play with AdMob monetization",
  "Runner-up – Track Event, Hackathon at ITS Engineering College",
  "Top 40 out of 200+ teams – HackXtreme at IIMT, Greater Noida",
  "AWS Certification and Infosys Springboard Certification"
];

function SectionTitle({ label, title, text }) {
  return (
    <div className="section-title">
      <p>{label}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home">
          <span>AK</span>
          <strong>Abhay Kumar</strong>
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#games">Games</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href={profile.gameStudio}
          target="_blank"
          rel="noreferrer"
        >
          DA Games <ExternalLink size={16} />
        </a>
      </nav>

      <section id="home" className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pill">
            <Sparkles size={16} /> Open to SDE / Full Stack roles
          </div>

          <h1>Building scalable web apps, AI platforms and Android games.</h1>

          <p>
            {profile.name} is an aspiring Software Development Engineer with
            hands-on experience in React.js, Node.js, Supabase, PostgreSQL,
            secure APIs, mobile deployment and real-world product development.
          </p>

          <div className="actions">
            <a className="btn primary" href="#projects">
              View Projects <ArrowRight size={18} />
            </a>

            <a
              className="btn secondary"
              href="/Abhay_Kumar_Resume.pdf"
              download
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>3+</strong>
              <span>Android Games</span>
            </div>
            <div>
              <strong>6+</strong>
              <span>Major Projects</span>
            </div>
            <div>
              <strong>25%</strong>
              <span>API Improvement</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>B.Tech CSE</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="code-box">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <pre>{`const abhay = {
  role: "SDE / Full Stack",
  frontend: ["React", "Vite", "Tailwind"],
  backend: ["Node", "Supabase", "PostgreSQL"],
  mobile: ["Capacitor", "Android"],
  games: ["Master Chess", "Sweet Crunch", "Puzzle Arena"]
};`}</pre>
          </div>

          <div className="mini-grid">
            <div>
              <Code2 />
              <span>Full Stack</span>
            </div>
            <div>
              <Gamepad2 />
              <span>Game Dev</span>
            </div>
            <div>
              <Database />
              <span>Database</span>
            </div>
            <div>
              <Smartphone />
              <span>Android</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section">
        <SectionTitle
          label="Featured Projects"
          title="Projects"
          text="Production-focused full-stack projects with security, scalability and clean architecture."
        />

        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="project-icon">
                  <Icon />
                </div>

                <p className="tag">{project.badge}</p>
                <h3>{project.title}</h3>
                <small>{project.stack}</small>
                <p>{project.description}</p>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a
                  className="demo-btn"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="games" className="section">
        <SectionTitle
          label="Game Portfolio"
          title="Published Android games"
          text="Game development + Play Store publishing + AdMob monetization proof in one place."
        />

        <div className="games-grid">
          {games.map((game, index) => (
            <motion.article
              className={`game-card ${game.tone}`}
              key={game.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="game-art">{game.emoji}</div>

              <div className="game-info">
                <p className="tag">{game.type}</p>
                <h3>{game.title}</h3>
                <p>{game.description}</p>

                <div className="chips">
                  {game.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="center">
          <a
            className="btn primary"
            href={profile.gameStudio}
            target="_blank"
            rel="noreferrer"
          >
            Visit DA Games Website <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <section id="skills" className="section split">
        <div>
          <SectionTitle
            label="Tech Stack"
            title="Skills I use to build products"
            text="Frontend, backend, database, mobile deployment and core computer science fundamentals."
          />

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="side-panel">
          <div className="panel-card">
            <GraduationCap />
            <h3>Education</h3>
            <p>
              <strong>ITS Engineering College, Greater Noida</strong>
            </p>
            <p>B.Tech – Computer Science & Engineering · 2023 – 2027</p>
          </div>

          <div className="panel-card">
            <Trophy />
            <h3>Achievements</h3>

            <ul>
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <SectionTitle
          label="Contact"
          title="Let’s build something impactful"
          text="Open for internships, SDE roles, freelance projects and collaboration opportunities."
        />

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </a>

          <a href={`tel:${profile.phone}`}>
            <Phone /> {profile.phone}
          </a>

          <span>
            <MapPin /> {profile.location}
          </span>

          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin /> LinkedIn
          </a>

          <a href="/Abhay_Kumar_Resume.pdf" download>
            <Download /> Resume PDF
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Abhay Kumar. Built with React + Vite. Deployed on Vercel.</p>
        <a href="/app-ads.txt">app-ads.txt</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
