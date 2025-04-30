import { scrollToSection } from "./terminal-utils";

export function executeCommand(cmd: string): string {
  const commands: { [key: string]: (...args: string[]) => string } = {
    whoami: () => {
      return "Shyam - Security and Quality Assurance Specialist at Cabocab\nEthical Hacker | Programmer | Security Researcher";
    },
    
    ls: (...args) => {
      if (args.length === 0) {
        return "Available sections:\nabout/\nskills/\nexperience/\nprojects/\ncontact/\n\nType 'ls [section]' to see contents";
      } else if (args[0] === "skills") {
        return "Skill categories:\n- Hacking & Security\n- Programming\n- Testing & QA\n\nKey technologies:\nPython, C, C++, Bash Scripting, Penetration Testing, Software Testing";
      } else if (args[0] === "projects") {
        return "Projects:\n- Advanced Penetration Testing Framework\n- LLM Vulnerability Analysis Tool\n- Mobile App Security Scanner\n- Cybersecurity Training Platform\n- Network Traffic Analyzer\n- Open Source Security Tools";
      } else if (args[0] === "about") {
        return "About Shyam:\n- about.txt\n- education.txt\n- experience.txt";
      } else if (args[0] === "contact") {
        return "Contact information:\n- Email: shyamfdo82@gmail.com\n- Location: Uvari, Tamil Nadu, India\n- social.txt";
      } else {
        return `Directory not found: ${args[0]}`;
      }
    },
    
    cd: (...args) => {
      if (args.length === 0) {
        return "Usage: cd [section]";
      }
      
      const validSections = ["about", "skills", "experience", "projects", "contact", "home"];
      if (validSections.includes(args[0])) {
        scrollToSection(args[0]);
        return `Navigating to ${args[0]} section...`;
      } else {
        return `Section not found: ${args[0]}`;
      }
    },
    
    cat: (...args) => {
      if (args.length === 0) {
        return "Usage: cat [filename]";
      }
      
      if (args[0] === "about.txt") {
        return "I'm a passionate security specialist and ethical hacker who loves the thrill of uncovering vulnerabilities and strengthening digital defenses. From a young age, I've been fascinated by technology and how it can be leveraged (or exploited).\n\nCurrently, I'm working as a Security and Quality Assurance Specialist at Cabocab while pursuing my degree in Artificial Intelligence and Data Science.";
      } else if (args[0] === "experience.txt") {
        return "Work Experience:\n\n- Security & Quality Assurance Specialist at Cabocab (2022-Present)\n  - Lead security assessments and penetration testing\n  - Develop quality assurance protocols\n\n- Cybersecurity Intern at Selfmade Ninja Academy - Cyber Master (2021-2022)\n  - Assisted with penetration testing projects\n  - Developed automated security testing scripts";
      } else if (args[0] === "education.txt") {
        return "Education:\n\n- B.Tech in Artificial Intelligence and Data Science\n- Loyola Institute of Technology and Science\n- 2020 - 2024 (Expected)\n- Currently in 3rd Year";
      } else if (args[0] === "skills.txt") {
        return "Technical Skills:\n\n- Programming: Python, C, C++, Bash Scripting\n- Security: Penetration Testing, Vulnerability Assessment, Web Application Security\n- Testing: Software Testing, Mobile App Testing (Android/iOS), Quality Assurance";
      } else if (args[0] === "social.txt") {
        return "Social Media:\n\n- Instagram: @shyam_the_hacker\n- LinkedIn: /in/shyam-the-hacker\n- GitHub: shyam_the_hacker\n- Linktree: /shyam_the_hacker";
      } else {
        return `File not found: ${args[0]}`;
      }
    },

    skills: () => {
      scrollToSection('skills');
      return "Navigating to skills section...\n\nKey skills include:\n- Hacking & Security: Penetration Testing, Network Security, Web App Security\n- Programming: Python, C/C++, Bash Scripting\n- Testing & QA: Software Testing, Mobile App Testing, Security Testing";
    },
    
    experience: () => {
      scrollToSection('experience');
      return "Navigating to experience section...\n\nWork History:\n- Security & QA Specialist at Cabocab (2022-Present)\n- Cybersecurity Intern at Selfmade Ninja Academy - Cyber Master (2021-2022)";
    },
    
    education: () => {
      scrollToSection('experience');
      return "Education:\n- B.Tech in Artificial Intelligence and Data Science\n- Loyola Institute of Technology and Science\n- 3rd Year Student (2020-2024)";
    },
    
    projects: () => {
      scrollToSection('projects');
      return "Navigating to projects section...";
    },
    
    contact: () => {
      scrollToSection('contact');
      return "Navigating to contact section...\n\nContact Info:\n- Email: shyamfdo82@gmail.com\n- Location: Uvari, Tamil Nadu, India";
    },
    
    social: () => {
      return "Social Media Links:\n- Instagram: @shyam_the_hacker\n- LinkedIn: /in/shyam-the-hacker\n- GitHub: shyam_the_hacker\n- Linktree: /shyam_the_hacker";
    },
    
    help: () => {
      return "Available commands: whoami, ls, cd, cat, skills, experience, education, projects, contact, social, clear, help";
    },
    
    clear: () => {
      return "";
    }
  };

  // Parse command and arguments
  const parts = cmd.split(" ");
  let commandName = parts[0];
  const args = parts.slice(1);

  // Check for possible typos or command prefixes
  if (!commands[commandName]) {
    // Find command by prefix (starts with) - useful for recognizing commands like "lsocial" as "social"
    const allCommandNames = Object.keys(commands);
    
    // First check if commandName contains a valid command (like "lsocial" contains "social")
    const containsCommand = allCommandNames.find(cmd => 
      commandName.includes(cmd) && cmd.length > 2 // Only consider commands longer than 2 chars
    );
    
    if (containsCommand) {
      // Extract the valid command from the typo
      let extractedCmd = containsCommand;
      
      // If it's a prefix like "lssocial" which has both "ls" and "social", prefer the longer one
      const possibleCommands = allCommandNames.filter(cmd => 
        commandName.includes(cmd) && cmd.length > 2
      );
      
      if (possibleCommands.length > 0) {
        // Sort by length (longest first) to prefer the most specific command
        extractedCmd = possibleCommands.sort((a, b) => b.length - a.length)[0];
      }
      
      // Process the corrected command
      commandName = extractedCmd;
      
      // Notify user about command correction
      const result = commands[commandName](...args);
      return `Command corrected to '${commandName}'.\n\n${result}`;
    }
    
    // If no containment match, try a fuzzy match based on similarity
    const closeMatch = allCommandNames.find(cmd => 
      // Simple Levenshtein-like distance check (character addition/removal)
      (commandName.startsWith(cmd) || cmd.startsWith(commandName)) && 
      Math.abs(commandName.length - cmd.length) <= 2
    );
    
    if (closeMatch) {
      commandName = closeMatch;
      const result = commands[commandName](...args);
      return `Command corrected to '${commandName}'.\n\n${result}`;
    }
  }

  // Execute command if it exists
  if (commands[commandName]) {
    return commands[commandName](...args);
  } else {
    return `Command not found: ${commandName}. Type 'help' to see available commands.`;
  }
}
