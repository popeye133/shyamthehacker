import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-mono text-[color:hsl(var(--terminal))] text-xl font-bold">
              shyam@<span className="text-[color:hsl(var(--neon-blue))]">terminal</span>:~$
            </h3>
            <p className="text-gray-400 mt-2">Security & Quality Assurance Specialist</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/shyam-the-hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://linktr.ee/shyam_the_hacker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
              >
                <i className="fas fa-link text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Shyam. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1 flex items-center justify-center md:justify-end">
              Designed with <Heart className="h-4 w-4 mx-1 text-[color:hsl(var(--terminal))]" /> and secure code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
