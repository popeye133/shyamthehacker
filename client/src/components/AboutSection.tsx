import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[color:hsl(var(--dark-lighter))]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            <span className="text-[color:hsl(var(--terminal))]">[</span> About Me <span className="text-[color:hsl(var(--terminal))]">]</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-[color:hsl(var(--terminal))] mx-auto my-4"></motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className="md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-lg shadow-2xl border border-[color:hsl(var(--terminal))]/30 mx-auto overflow-hidden aspect-square max-w-[400px]">
              <img 
                src="https://ugc.production.linktr.ee/bc1eefea-1ed9-4887-beaf-e702a71a92c8_IMG-20230920-233924-024.jpeg?io=true&size=avatar-v3_0" 
                alt="Shyam Profile Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:w-1/2 md:pl-10">
            <div className="font-mono text-sm text-[color:hsl(var(--terminal))] mb-4">
              <span className="text-[color:hsl(var(--neon-blue))]">class</span> <span className="text-[color:hsl(var(--neon-purple))]">Profile</span> {"{"}
            </div>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate security specialist and ethical hacker who loves the thrill of uncovering vulnerabilities and strengthening digital defenses. From a young age, I've been fascinated by technology and how it can be leveraged (or exploited).
            </p>
            <p className="text-gray-300 mb-6">
              Currently, I'm working as a Security and Quality Assurance Specialist at Cabocab while pursuing my degree in Artificial Intelligence and Data Science at Loyola Institute of Technology and Science.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-[color:hsl(var(--terminal))] mb-2">What I Do:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Design and Develop</li>
                  <li>Teach and Train</li>
                  <li>Architect Solutions</li>
                  <li>Hustle and Innovate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[color:hsl(var(--terminal))] mb-2">My Focus:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Penetration Testing</li>
                  <li>Software & App Testing</li>
                  <li>LLM Security Research</li>
                  <li>Cybersecurity Training</li>
                </ul>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-bold text-[color:hsl(var(--neon-blue))] mb-4">Featured Media</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.youtube.com/watch?v=q_OlhgizNys" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-3 bg-background/50 border border-[color:hsl(var(--neon-blue))]/30 rounded-md hover:bg-background/80 transition"
                >
                  <div className="flex items-center">
                    <div className="text-red-500 mr-3">
                      <i className="fab fa-youtube text-xl"></i>
                    </div>
                    <div>
                      <div className="font-bold text-gray-200">YouTube Appearance</div>
                      <div className="text-sm text-gray-400">Watch my interview about cybersecurity</div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://medium.com/@shyamfdo82/how-i-uncovered-an-lfi-in-15-seconds-the-tale-of-a-curious-hacker-and-an-unprepared-server-e49925452007" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-3 bg-background/50 border border-[color:hsl(var(--neon-purple))]/30 rounded-md hover:bg-background/80 transition"
                >
                  <div className="flex items-center">
                    <div className="text-gray-200 mr-3">
                      <i className="fab fa-medium text-xl"></i>
                    </div>
                    <div>
                      <div className="font-bold text-gray-200">Medium Blog</div>
                      <div className="text-sm text-gray-400">How I uncovered an LFI vulnerability in 15 seconds</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="inline-flex items-center px-6 py-3 border border-[color:hsl(var(--terminal))] text-[color:hsl(var(--terminal))] font-bold rounded-md hover:bg-[color:hsl(var(--terminal))]/10 transition"
            >
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
            <div className="font-mono text-sm text-[color:hsl(var(--terminal))] mt-4">
              {"}"}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
