export function scrollToSection(sectionId: string): void {
  // Handle "home" section as a special case
  const id = sectionId === "home" ? "home" : sectionId;
  
  // Find the section by ID
  const element = document.getElementById(id);
  
  // Scroll to the section if found
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Helper to format command output with ANSI-like colors
export function formatOutput(text: string): string {
  // Replace color codes with spans
  const colorized = text
    .replace(/\[green\](.*?)\[\/green\]/g, '<span style="color: #00FF41">$1</span>')
    .replace(/\[blue\](.*?)\[\/blue\]/g, '<span style="color: #0072FF">$1</span>')
    .replace(/\[purple\](.*?)\[\/purple\]/g, '<span style="color: #7B5CFF">$1</span>')
    .replace(/\[red\](.*?)\[\/red\]/g, '<span style="color: #FF0000">$1</span>')
    .replace(/\[yellow\](.*?)\[\/yellow\]/g, '<span style="color: #FFFF00">$1</span>')
    .replace(/\[bold\](.*?)\[\/bold\]/g, '<span style="font-weight: bold">$1</span>');
    
  return colorized;
}

// Helper to simulate typing animation
export function typeWriter(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    type();
  });
}

// Create directory tree for filesystem-like navigation
export type FileNode = {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileNode[];
};

// Sample filesystem structure for terminal navigation
export const fileSystem: FileNode = {
  name: "root",
  type: "directory",
  children: [
    {
      name: "about",
      type: "directory",
      children: [
        {
          name: "about.txt",
          type: "file",
          content: "I'm a passionate security specialist and ethical hacker..."
        },
        {
          name: "education.txt",
          type: "file",
          content: "B.Tech in Artificial Intelligence and Data Science..."
        }
      ]
    },
    {
      name: "skills",
      type: "directory",
      children: [
        {
          name: "programming.txt",
          type: "file",
          content: "Python, C, C++, Bash Scripting..."
        },
        {
          name: "security.txt",
          type: "file",
          content: "Penetration Testing, Vulnerability Assessment..."
        }
      ]
    },
    {
      name: "projects",
      type: "directory",
      children: [
        {
          name: "pentest-framework.txt",
          type: "file",
          content: "Advanced Penetration Testing Framework..."
        },
        {
          name: "llm-security.txt",
          type: "file",
          content: "Research on LLM vulnerabilities..."
        }
      ]
    }
  ]
};
