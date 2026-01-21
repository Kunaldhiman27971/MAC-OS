import React from 'react';
import './cli.scss';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator';

const commands = {
  about: {
    description: 'Know more about me',
    usage: 'about',
    fn: () => `
👋 Hi, I'm a passionate Full-Stack Web Developer.

I specialize in building modern, interactive, and performance-driven web
applications using the MERN stack and modern frontend technologies.
I enjoy solving problems, experimenting with animations, and building
products that feel smooth and intuitive.
    `
  },

  skills: {
    description: 'View my technical skills',
    usage: 'skills',
    fn: () => `
💻 TECH STACK

Frontend:
  • HTML5, CSS3, SCSS
  • JavaScript (ES6+)
  • React.js
  • Three.js
  • GSAP

Backend:
  • Node.js
  • Express.js
  • MongoDB (MERN Stack)

Programming & Data:
  • Python
  • C++
  • Data Analysis (Python)

Tools & Others:
  • Git & GitHub
  • Vite
  • REST APIs
    `
  },

  projects: {
    description: 'View my projects',
    usage: 'projects',
    fn: () => `
🚀 PROJECTS

1️⃣ macOS Portfolio
   • macOS-inspired UI
   • React + Vite
   • Interactive animations

2️⃣ Productivity Dashboard
   • Task & goal tracking
   • Clean UI with charts
   • JavaScript & React

3️⃣ GitHub Projects Showcase
   • Dynamic repo cards
   • JSON-based data rendering
   • Responsive layout

4️⃣ Data Analysis Projects
   • Python-based analysis
   • Real-world datasets
   • Visual insights

More projects coming soon 👨‍💻
    `
  },

  contact: {
    description: 'Get my contact details',
    usage: 'contact',
    fn: () => `
📬 CONTACT

📧 Email: yourname@email.com
🐙 GitHub: github.com/yourusername
💼 LinkedIn: linkedin.com/in/yourusername
🌐 Portfolio: yourportfolio.dev
    `
  },

  resume: {
    description: 'View my resume',
    usage: 'resume',
    fn: () => `
📄 RESUME

ROLE:
  • Full-Stack Web Developer

SKILLS:
  • MERN Stack
  • Frontend Animations (GSAP, Three.js)
  • Data Analysis (Python)

FOCUS:
  • Clean UI
  • Performance
  • Real-world problem solving
    `
  },

  socials: {
    description: 'My social profiles',
    usage: 'socials',
    fn: () => `
🌍 SOCIALS

🐙 GitHub    → github.com/yourusername
💼 LinkedIn  → linkedin.com/in/yourusername
🐦 Twitter   → twitter.com/yourusername
📸 Instagram → instagram.com/yourusername
    `
  },
};

const Cli = () => {
  const commandsList = Object.entries(commands)
    .map(([cmd, details]) => `  ${cmd.padEnd(12)} - ${details.description}`)
    .join('\n');

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
🖥️  Welcome to My Portfolio Terminal

Type a command and press Enter.

Available Commands:
${commandsList}

────────────────────────────────────
Type 'help' to see usage details.
          `}
          promptLabel="visitor:~$"
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
