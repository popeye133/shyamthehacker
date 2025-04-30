// Social media links
export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/shyam_the_hacker",
  LINKEDIN: "https://linkedin.com/in/shyam-the-hacker",
  GITHUB: "https://github.com/shyam_the_hacker",
  LINKTREE: "https://linktr.ee/shyam_the_hacker"
};

// Skills data
export const SKILLS = {
  HACKING_SECURITY: [
    { name: "Penetration Testing", level: 95 },
    { name: "Network Security", level: 85 },
    { name: "Web Application Security", level: 90 },
    { name: "Vulnerability Assessment", level: 88 },
    { name: "Social Engineering", level: 80 }
  ],
  PROGRAMMING: [
    { name: "Python", level: 95 },
    { name: "C/C++", level: 85 },
    { name: "Bash Scripting", level: 90 },
    { name: "Web Development", level: 75 },
    { name: "AI/ML", level: 70 }
  ],
  TESTING_QA: [
    { name: "Software Testing", level: 92 },
    { name: "Mobile App Testing (Android/iOS)", level: 88 },
    { name: "Quality Assurance", level: 85 },
    { name: "Automated Testing", level: 80 },
    { name: "Security Testing", level: 94 }
  ]
};

// Tools categories
export const TOOLS = {
  SECURITY: ["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "OWASP ZAP", "Nmap", "Aircrack-ng", "Hydra", "John the Ripper", "SQLmap"],
  DEVELOPMENT: ["Docker", "Git", "VS Code", "TensorFlow", "PyTorch", "Bash", "Python", "C/C++"],
  HACKING: ["HackTheBox", "TryHackMe", "Ghidra", "Maltego", "BeeF", "Nikto", "Hashcat", "Autopsy", "Social Engineering Toolkit"]
};

// Terminal commands help
export const TERMINAL_COMMANDS = [
  { command: "whoami", description: "Display information about me" },
  { command: "ls", description: "List sections/skills/projects" },
  { command: "cd [section]", description: "Navigate to a section" },
  { command: "cat [file]", description: "Display file contents" },
  { command: "skills", description: "Show my technical skills" },
  { command: "experience", description: "Display my work experience" },
  { command: "education", description: "Show my educational background" },
  { command: "projects", description: "List my projects" },
  { command: "contact", description: "Show contact information" },
  { command: "social", description: "Display social media links" },
  { command: "clear", description: "Clear the terminal screen" },
  { command: "help", description: "Show this help message" }
];

// Projects data
export const PROJECTS = [
  {
    title: "Discord-Based C2C Malware",
    description: "Developed a command and control malware utilizing Discord as the communication channel, demonstrating how legitimate platforms can be misused by threat actors.",
    image: "https://images.unsplash.com/photo-1563920443079-783e5c786b83?auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "Malware Research", "C2"],
    link: null,
    color: "terminal"
  },
  {
    title: "Advanced AV Evasion Techniques",
    description: "Research project on developing malware that bypasses modern antivirus solutions using novel obfuscation techniques and execution methods.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=300",
    tags: ["Security Research", "Malware", "AV Evasion"],
    link: null,
    color: "neon-blue"
  },
  {
    title: "Mobile App Security Scanner",
    description: "Automated security testing tool for Android and iOS applications that identifies common vulnerabilities and compliance issues.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&h=300",
    tags: ["Mobile", "Security", "Automation"],
    link: null,
    color: "neon-purple"
  },
  {
    title: "Cybersecurity Training Platform",
    description: "Interactive web platform for teaching ethical hacking concepts with hands-on labs and challenges for beginners and advanced users.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=300",
    tags: ["Education", "Web", "Hacking"],
    link: null,
    color: "terminal"
  },
  {
    title: "LLM Vulnerability Analysis Tool",
    description: "Research project focused on identifying and exploiting vulnerabilities in Large Language Models with a focus on prompt injection attacks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=300",
    tags: ["AI/ML", "Python", "Research"],
    link: null,
    color: "neon-blue"
  },
  {
    title: "CTF Challenge Creator",
    description: "Framework for creating and hosting Capture The Flag cybersecurity challenges with customizable difficulty levels.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&h=300",
    tags: ["CTF", "Security", "Education"],
    link: null, 
    color: "neon-purple"
  }
];

// Experience data
export const EXPERIENCES = [
  {
    title: "Security & Quality Assurance Specialist",
    company: "Cabocab",
    period: "2022 - Present",
    status: "Present",
    color: "terminal",
    duties: [
      "Lead security assessments and penetration testing for company products",
      "Develop and implement quality assurance protocols for software releases",
      "Conduct security training for development teams",
      "Perform vulnerability assessments and provide recommendations",
      "Test Android and iOS applications for security flaws and quality issues"
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "Selfmade Ninja Academy - Cyber Master",
    period: "2021 - 2022",
    status: "Completed",
    color: "neon-blue",
    duties: [
      "Learned real-world cybersecurity hacking techniques from experts",
      "Developed practical programming and development skills",
      "Participated in hands-on cybersecurity training sessions",
      "Gained expertise in penetration testing and security assessments"
    ]
  }
];

// Education data
export const EDUCATION = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Loyola Institute of Technology and Science",
  period: "2020 - 2024 (Expected)",
  status: "In Progress",
  color: "neon-purple",
  description: "Currently in my 3rd year, focusing on AI security, machine learning, and cybersecurity applications in data science. Maintaining a strong academic record while participating in security competitions and hackathons."
};
