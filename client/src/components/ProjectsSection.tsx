import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Advanced Penetration Testing Framework",
      description: "A comprehensive Python-based framework for automated penetration testing with modular components for different security assessments.",
      image: "https://images.unsplash.com/photo-1563920443079-783e5c786b83?auto=format&fit=crop&w=600&h=300",
      tags: ["Python", "Security", "Pentesting"],
      link: "#",
      color: "terminal"
    },
    {
      title: "LLM Vulnerability Analysis Tool",
      description: "Research project focused on identifying and exploiting vulnerabilities in Large Language Models with a focus on prompt injection attacks.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=300",
      tags: ["AI/ML", "Python", "Research"],
      link: "#",
      color: "neon-blue"
    },
    {
      title: "Mobile App Security Scanner",
      description: "Automated security testing tool for Android and iOS applications that identifies common vulnerabilities and compliance issues.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&h=300",
      tags: ["Mobile", "Security", "Automation"],
      link: "#",
      color: "neon-purple"
    },
    {
      title: "Cybersecurity Training Platform",
      description: "Interactive web platform for teaching ethical hacking concepts with hands-on labs and challenges for beginners and advanced users.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=300",
      tags: ["Education", "Web", "Hacking"],
      link: "#",
      color: "terminal"
    },
    {
      title: "Network Traffic Analyzer",
      description: "C++-based tool for analyzing network traffic patterns and detecting anomalies that might indicate security breaches or attacks.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=300",
      tags: ["C++", "Networking", "Security"],
      link: "#",
      color: "neon-blue"
    },
    {
      title: "Open Source Security Tools",
      description: "Contributions to various open source security projects including vulnerability scanners, encryption libraries, and security testing frameworks.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&h=300",
      tags: ["Open Source", "Various", "Community"],
      link: "#",
      color: "neon-purple"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            <span className="text-[color:hsl(var(--terminal))]">{"{"}</span> Self Made Ninja <span className="text-[color:hsl(var(--terminal))]">{"}"}</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-[color:hsl(var(--terminal))] mx-auto my-4"></motion.div>
          <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">A showcase of my work in cybersecurity, software development, and research.</motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-[color:hsl(var(--dark-lighter))] rounded-lg overflow-hidden shadow-lg border border-[color:hsl(var(--${project.color}))]/20 project-card`}
            >
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className={`text-xs px-2 py-1 bg-background rounded-full text-[color:hsl(var(--${project.color}))]`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    className={`text-[color:hsl(var(--${project.color}))] hover:underline inline-flex items-center`}
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
