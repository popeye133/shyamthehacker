import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Bug } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            <span className="text-[color:hsl(var(--terminal))]">&lt;</span> Technical Skills <span className="text-[color:hsl(var(--terminal))]">/&gt;</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-[color:hsl(var(--terminal))] mx-auto my-4"></motion.div>
          <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and specialized skills in security, programming, and testing.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Hacking & Security */}
          <motion.div 
            variants={fadeInUp}
            className="bg-[color:hsl(var(--dark-lighter))] p-6 rounded-lg border border-[color:hsl(var(--terminal))]/20 hover:border-[color:hsl(var(--terminal))]/50 transition skill-badge"
          >
            <div className="flex items-center mb-4">
              <Shield className="text-[color:hsl(var(--terminal))] h-6 w-6 mr-3" />
              <h3 className="text-xl font-bold">Hacking & Security</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Penetration Testing</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--terminal))] h-full" style={{ width: "95%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Network Security</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--terminal))] h-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Web Application Security</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--terminal))] h-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Vulnerability Assessment</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--terminal))] h-full" style={{ width: "88%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Social Engineering</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--terminal))] h-full" style={{ width: "80%" }}></div>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Programming */}
          <motion.div 
            variants={fadeInUp}
            className="bg-[color:hsl(var(--dark-lighter))] p-6 rounded-lg border border-[color:hsl(var(--neon-blue))]/20 hover:border-[color:hsl(var(--neon-blue))]/50 transition skill-badge"
          >
            <div className="flex items-center mb-4">
              <Code className="text-[color:hsl(var(--neon-blue))] h-6 w-6 mr-3" />
              <h3 className="text-xl font-bold">Programming</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Python</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-blue))] h-full" style={{ width: "95%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">C/C++</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-blue))] h-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Bash Scripting</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-blue))] h-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Web Development</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-blue))] h-full" style={{ width: "75%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">AI/ML</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-blue))] h-full" style={{ width: "70%" }}></div>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Advanced Hacking */}
          <motion.div 
            variants={fadeInUp}
            className="bg-[color:hsl(var(--dark-lighter))] p-6 rounded-lg border border-[color:hsl(var(--neon-purple))]/20 hover:border-[color:hsl(var(--neon-purple))]/50 transition skill-badge"
          >
            <div className="flex items-center mb-4">
              <Bug className="text-[color:hsl(var(--neon-purple))] h-6 w-6 mr-3" />
              <h3 className="text-xl font-bold">Advanced Hacking</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Malware Development</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-purple))] h-full" style={{ width: "95%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">C2 Infrastructure</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-purple))] h-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Exploit Development</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-purple))] h-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">AV Evasion Techniques</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-purple))] h-full" style={{ width: "92%" }}></div>
                </div>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 mb-1">Mobile App Hacking</span>
                <div className="h-2 bg-background rounded overflow-hidden">
                  <div className="bg-[color:hsl(var(--neon-purple))] h-full" style={{ width: "88%" }}></div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-6 text-center">Tools & Technologies</motion.h3>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              Kali Linux
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              Metasploit
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              Burp Suite
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-blue))] border-[color:hsl(var(--neon-blue))]/30">
              Docker
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-blue))] border-[color:hsl(var(--neon-blue))]/30">
              Git
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-blue))] border-[color:hsl(var(--neon-blue))]/30">
              VS Code
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-purple))] border-[color:hsl(var(--neon-purple))]/30">
              HackTheBox
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-purple))] border-[color:hsl(var(--neon-purple))]/30">
              Ghidra
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-purple))] border-[color:hsl(var(--neon-purple))]/30">
              Social Engineering Toolkit
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              Wireshark
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-blue))] border-[color:hsl(var(--neon-blue))]/30">
              TensorFlow
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-blue))] border-[color:hsl(var(--neon-blue))]/30">
              PyTorch
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              OWASP ZAP
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-purple))] border-[color:hsl(var(--neon-purple))]/30">
              Hashcat
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              Nmap
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--neon-purple))] border-[color:hsl(var(--neon-purple))]/30">
              TryHackMe
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-[color:hsl(var(--dark-light))] rounded-full text-[color:hsl(var(--terminal))] border-[color:hsl(var(--terminal))]/30">
              John the Ripper
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
