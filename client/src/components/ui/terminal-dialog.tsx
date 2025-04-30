import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TerminalDialogProps {
  open: boolean;
  onClose: () => void;
}

export const TerminalDialog: React.FC<TerminalDialogProps> = ({ open, onClose }) => {
  const commands = [
    { command: 'whoami', description: 'Display information about me' },
    { command: 'ls', description: 'List all sections/skills/projects' },
    { command: 'ls skills', description: 'List my technical skills' },
    { command: 'ls projects', description: 'List my projects' },
    { command: 'cd [section]', description: 'Navigate to a section (about, skills, experience, projects, contact)' },
    { command: 'cat about.txt', description: 'Display about me information' },
    { command: 'cat experience.txt', description: 'Show my work experience' },
    { command: 'cat education.txt', description: 'Display my educational background' },
    { command: 'contact', description: 'Show contact information' },
    { command: 'social', description: 'Display social media links' },
    { command: 'clear', description: 'Clear the terminal screen' },
    { command: 'help', description: 'Show this help message' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[color:hsl(var(--dark-lighter))] border border-[color:hsl(var(--terminal))]/30 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[color:hsl(var(--terminal))]">
            Terminal Commands
          </DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            The following commands are available in the terminal:
          </DialogDescription>
        </DialogHeader>
        
        <div className="font-mono text-sm mt-4">
          <ul className="space-y-2 text-gray-400">
            {commands.map((cmd, index) => (
              <li key={index}>
                <span className="text-[color:hsl(var(--terminal))]">{cmd.command}</span> - {cmd.description}
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter className="mt-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-[color:hsl(var(--terminal))]"
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
