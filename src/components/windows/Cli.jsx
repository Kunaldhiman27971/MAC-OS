import React from 'react';
import './cli.scss';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator';

const commands = {
  about: {
    description: 'Know more about me',
    usage: 'about',
    fn: () => `
👋 Hi, I'm Kunal Dhiman.

I'm a Computer Science student at NIT Hamirpur with experience in 
full-stack web development and data-driven solutions.

I enjoy building real-world applications involving AI, dashboards,
and modern web technologies. I focus on creating clean, responsive,
and user-friendly interfaces backed by efficient backend systems.
    `
  },

  skills: {
    description: 'View my technical skills',
    usage: 'skills',
    fn: () => `
💻 TECH STACK

Languages:
  • C / C++
  • Python
  • JavaScript

Frontend:
  • React.js
  • HTML5, CSS3

Backend:
  • Node.js
  • Express.js

Databases:
  • MongoDB
  • MySQL
  • PostgreSQL

AI / ML:
  • TensorFlow
  • Keras
  • PyTorch

Tools:
  • Git & GitHub
  • Docker
  • CI/CD
  • REST APIs
    `
  },

  projects: {
    description: 'View my projects',
    usage: 'projects',
    fn: () => `
🚀 PROJECTS

1️⃣ ResumeAI
   • AI-based resume analysis & job matching system
   • Resume scoring + ATS analysis
   • Identifies 10+ missing skills per job
   • Generates preparation roadmap
   • Tech: React, Node.js, MongoDB, AI APIs

2️⃣ Productivity Dashboard
   • Task, planner, pomodoro & goals in one platform
   • Integrated weather & time APIs
   • Responsive UI with theme switching
   • Reduces need for multiple apps

3️⃣ Data Analysis Work
   • Cleaned 5+ datasets
   • Identified trends & patterns
   • Built dashboards for insights
    `
  },

  experience: {
    description: 'View my experience',
    usage: 'experience',
    fn: () => `
💼 EXPERIENCE

📊 Data Analyst Intern — VproTech Digital (May 2025 – July 2025)

  • Cleaned & preprocessed 5+ datasets
  • Performed EDA to identify 10+ trends
  • Built 3+ dashboards & reports
  • Suggested 5+ process improvements
    `
  },

  leadership: {
    description: 'Positions of responsibility',
    usage: 'leadership',
    fn: () => `
👥 LEADERSHIP

• State Co-Convenor — Think India
  Represented Himachal Pradesh at IIT Roorkee

• Core Coordinator — Dramatics Club
  Led 10+ activities & 5+ performances

• Core Coordinator — Finance Team
  Managed sponsorships & logistics

• Organizing Member — ICAMS Conference
• Organizing Member — IASP Workshop
    `
  },

  contact: {
    description: 'Get my contact details',
    usage: 'contact',
    fn: () => `
📬 CONTACT

📧 Email: kunaldhiman27971@gmail.com
🐙 GitHub: github.com/Kunaldhiman27971
💼 LinkedIn: linkedin.com/in/kunaldhiman
🌐 Portfolio: (your deployed link here)
📱 Phone: +91-7018035594
    `
  },

  resume: {
    description: 'View my resume summary',
    usage: 'resume',
    fn: () => `
📄 RESUME SUMMARY

🎓 NIT Hamirpur
Integrated B.Tech + M.Tech (CSE)
CGPI: 7.9 / 8.5

💡 Focus Areas:
  • Full-Stack Web Development
  • AI-based Applications
  • Data Analysis & Dashboards

🚀 Strengths:
  • Problem Solving
  • Clean UI + Functional Backend
  • Real-world project building
    `
  },

  socials: {
    description: 'My social profiles',
    usage: 'socials',
    fn: () => `
🌍 SOCIALS

🐙 GitHub    → kunaldhiman27971.github.com
💼 LinkedIn  → linkedin.com/in/kunaldhiman
    `
  },
};

const Cli = ({ windowName, setWindowState }) => {
  const commandsList = Object.entries(commands)
    .map(([cmd, details]) => `  ${cmd.padEnd(12)} - ${details.description}`)
    .join('\n');

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
🖥️  Welcome to Kunal's Portfolio Terminal

Type a command and press Enter.

Available Commands:
${commandsList}

────────────────────────────────────
Type 'help' to see usage details.
          `}
          promptLabel="kunal@portfolio:~$"
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;