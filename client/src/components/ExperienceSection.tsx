import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[color:hsl(var(--dark-lighter))]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            <span className="text-[color:hsl(var(--terminal))]">~/</span> Professional Experience <span className="text-[color:hsl(var(--terminal))]">/~</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-[color:hsl(var(--terminal))] mx-auto my-4"></motion.div>
          <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">My journey in the cybersecurity and software quality assurance industry.</motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Timeline structure */}
          <div className="relative">
            {/* Line down the middle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[color:hsl(var(--terminal))]/30"></div>
            
            {/* Experience Item 1 */}
            <motion.div variants={fadeInUp} className="relative z-10 mb-12">
              <div className="flex items-center justify-center">
                <div className="bg-[color:hsl(var(--terminal))] w-6 h-6 rounded-full border-4 border-[color:hsl(var(--dark-lighter))]"></div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-lg mt-4 border border-[color:hsl(var(--terminal))]/20">
                <div className="flex justify-between items-start flex-col md:flex-row mb-2">
                  <h3 className="text-xl font-bold">Security & Quality Assurance Specialist</h3>
                  <span className="text-[color:hsl(var(--terminal))] text-sm font-mono mt-2 md:mt-0">Present</span>
                </div>
                <div className="flex justify-between items-start flex-col md:flex-row mb-4">
                  <h4 className="text-lg text-gray-300">Cabocab</h4>
                  <span className="text-gray-400 text-sm mt-1 md:mt-0">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Lead security assessments and penetration testing for company products</li>
                  <li>Develop and implement quality assurance protocols for software releases</li>
                  <li>Conduct security training for development teams</li>
                  <li>Perform vulnerability assessments and provide recommendations</li>
                  <li>Test Android and iOS applications for security flaws and quality issues</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Experience Item 2 */}
            <motion.div variants={fadeInUp} className="relative z-10 mb-12">
              <div className="flex items-center justify-center">
                <div className="bg-[color:hsl(var(--neon-blue))] w-6 h-6 rounded-full border-4 border-[color:hsl(var(--dark-lighter))]"></div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-lg mt-4 border border-[color:hsl(var(--neon-blue))]/20">
                <div className="flex justify-between items-start flex-col md:flex-row mb-2">
                  <h3 className="text-xl font-bold">Cybersecurity Intern</h3>
                  <span className="text-[color:hsl(var(--neon-blue))] text-sm font-mono mt-2 md:mt-0">Completed</span>
                </div>
                <div className="flex justify-between items-start flex-col md:flex-row mb-4">
                  <h4 className="text-lg text-gray-300">Selfmade Ninja Academy - Cyber Master</h4>
                  <span className="text-gray-400 text-sm mt-1 md:mt-0">2021 - 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Learned real-world cybersecurity hacking techniques from experts</li>
                  <li>Developed practical programming and development skills</li>
                  <li>Participated in hands-on cybersecurity training sessions</li>
                  <li>Gained expertise in penetration testing and security assessments</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Education Item */}
            <motion.div variants={fadeInUp} className="relative z-10">
              <div className="flex items-center justify-center">
                <div className="bg-[color:hsl(var(--neon-purple))] w-6 h-6 rounded-full border-4 border-[color:hsl(var(--dark-lighter))]"></div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-lg mt-4 border border-[color:hsl(var(--neon-purple))]/20">
                <div className="flex justify-between items-start flex-col md:flex-row mb-2">
                  <h3 className="text-xl font-bold">B.Tech in Artificial Intelligence and Data Science</h3>
                  <span className="text-[color:hsl(var(--neon-purple))] text-sm font-mono mt-2 md:mt-0">In Progress</span>
                </div>
                <div className="flex justify-between items-start flex-col md:flex-row mb-4">
                  <h4 className="text-lg text-gray-300">Loyola Institute of Technology and Science</h4>
                  <span className="text-gray-400 text-sm mt-1 md:mt-0">2020 - 2024 (Expected)</span>
                </div>
                <p className="text-gray-300">
                  Currently in my 3rd year, focusing on AI security, machine learning, and cybersecurity applications in data science. Maintaining a strong academic record while participating in security competitions and hackathons.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
