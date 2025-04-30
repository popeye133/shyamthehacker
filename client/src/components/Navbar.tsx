import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'shadow-md shadow-primary/10' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-mono text-[color:hsl(var(--terminal))] text-xl font-bold">
          shyam@<span className="text-[color:hsl(var(--neon-blue))]">terminal</span>:~$
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-[color:hsl(var(--terminal))] transition">Home</a>
          <a href="#about" className="hover:text-[color:hsl(var(--terminal))] transition">About</a>
          <a href="#skills" className="hover:text-[color:hsl(var(--terminal))] transition">Skills</a>
          <a href="#experience" className="hover:text-[color:hsl(var(--terminal))] transition">Experience</a>
          <a href="#projects" className="hover:text-[color:hsl(var(--terminal))] transition">Projects</a>
          <a href="#contact" className="hover:text-[color:hsl(var(--terminal))] transition">Contact</a>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[color:hsl(var(--terminal))]"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="py-2 hover:text-[color:hsl(var(--terminal))] transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
