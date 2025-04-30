import { useState } from "react";
import { motion } from "framer-motion";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { RectangleEllipsis, MapPin, Globe, Layers } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[color:hsl(var(--dark-lighter))]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            <span className="text-[color:hsl(var(--terminal))]">{">"}</span> Get In Touch <span className="text-[color:hsl(var(--terminal))]">{"<"}</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-[color:hsl(var(--terminal))] mx-auto my-4"></motion.div>
          <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to discuss cybersecurity? Reach out to me!</motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="md:w-1/2">
            <div className="terminal-window h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm">shyamfdo82@gmail.com</div>
              </div>
              <div className="p-6 bg-[color:hsl(var(--dark-light))] h-full">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[color:hsl(var(--terminal))] text-sm font-mono mb-2">
                      // Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-[color:hsl(var(--terminal))]/30 rounded-md focus:outline-none focus:border-[color:hsl(var(--terminal))] text-gray-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[color:hsl(var(--terminal))] text-sm font-mono mb-2">
                      // Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-[color:hsl(var(--terminal))]/30 rounded-md focus:outline-none focus:border-[color:hsl(var(--terminal))] text-gray-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[color:hsl(var(--terminal))] text-sm font-mono mb-2">
                      // Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-[color:hsl(var(--terminal))]/30 rounded-md focus:outline-none focus:border-[color:hsl(var(--terminal))] text-gray-200"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-[color:hsl(var(--terminal))] text-sm font-mono mb-2">
                      // Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full p-3 bg-background border border-[color:hsl(var(--terminal))]/30 rounded-md focus:outline-none focus:border-[color:hsl(var(--terminal))] text-gray-200"
                      placeholder="Tell me about your project or question..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-3 bg-[color:hsl(var(--terminal))] text-background font-bold rounded-md hover:bg-[color:hsl(var(--terminal-dim))] transition"
                  >
                    {contactMutation.isPending ? "Sending..." : (
                      <>
                        Send Message <Layers className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[color:hsl(var(--terminal))] mr-4 mt-1">
                    <RectangleEllipsis className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email</h4>
                    <p className="text-gray-400">shyamfdo82@gmail.com</p>
                    <p className="text-gray-400 mt-1 text-xs">Send me a message using the form or email me directly</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[color:hsl(var(--neon-blue))] mr-4 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Location</h4>
                    <p className="text-gray-400">Uvari, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[color:hsl(var(--neon-purple))] mr-4 mt-1">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://www.instagram.com/shyam_the_hacker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
                      >
                        <i className="fab fa-instagram text-xl"></i>
                      </a>
                      <a 
                        href="https://linkedin.com/in/shyam-the-hacker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[color:hsl(var(--neon-blue))] transition"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a 
                        href="https://github.com/shyam_the_hacker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[color:hsl(var(--neon-purple))] transition"
                      >
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a 
                        href="https://linktr.ee/shyam_the_hacker" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[color:hsl(var(--terminal))] transition"
                      >
                        <i className="fas fa-link text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Availability</h3>
              <div className="bg-background p-6 rounded-lg border border-[color:hsl(var(--terminal))]/20">
                <p className="text-gray-300 mb-4">I'm currently available for:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Security consulting & audits</li>
                  <li>Penetration testing projects</li>
                  <li>Security training workshops</li>
                  <li>Software/app quality assurance</li>
                  <li>Collaborative research in cybersecurity</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
