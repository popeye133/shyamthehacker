import { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { executeCommand } from "@/lib/terminal-commands";

export function useTerminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to Shyam's terminal. Type 'help' to see available commands.",
    "<span class='terminal-prompt'>whoami</span>",
    "Shyam - Security and Quality Assurance Specialist at Cabocab",
    "Ethical Hacker | Programmer | Security Researcher",
    "<span class='terminal-prompt'>cat skills.txt</span>",
    "Python, C, C++, Bash Scripting, Penetration Testing, Software Testing",
    "<span class='terminal-prompt'>help</span>",
    "Type any command below or try: whoami, social, projects, skills, clear"
  ]);
  const [showHelpDialog, setShowHelpDialog] = useState(false);

  // Execute a command and update the terminal output
  const handleExecute = useCallback((cmd: string) => {
    // Don't execute empty commands
    if (!cmd.trim()) return;

    // Add command to history
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(prev => prev + 1);

    // Add command to output
    setOutput(prev => [...prev, `<span class='terminal-prompt'>${cmd}</span>`]);

    // Check for special commands that need direct handling
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // For help command, show dialog instead of text output
    if (trimmedCmd === "help") {
      setShowHelpDialog(true);
      setOutput(prev => [...prev, "Opening help menu..."]);
      return;
    } 
    // For clear command, clear the output
    else if (trimmedCmd === "clear" || trimmedCmd.includes("clear")) {
      setOutput([]);
      return;
    }
    
    // Execute command and get result for other commands
    const result = executeCommand(trimmedCmd);
    
    // If command has output, add to terminal
    if (result) {
      // Split multi-line results and add each line to output
      result.split('\n').forEach(line => {
        setOutput(prev => [...prev, line]);
      });
    }

    // Clear input
    setInput("");
  }, []);

  // Handle keyboard navigation and command execution
  const handleKey = useCallback((e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleExecute(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      // Navigate history backwards
      if (history.length > 0 && historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      // Navigate history forwards
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        // Clear input if at end of history
        setHistoryIndex(history.length);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Auto-complete logic could be added here
    }

    // Don't handle special keys
    if (!["Enter", "ArrowUp", "ArrowDown", "Tab"].includes(e.key)) {
      // Update the element's text content for the contentEditable element
      const target = e.target as HTMLElement;
      if (e.key === "Backspace") {
        setInput(prev => prev.slice(0, -1));
      } else if (!e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1) {
        setInput(prev => prev + e.key);
      }
    }
  }, [history, historyIndex, input, handleExecute]);

  return {
    history,
    historyIndex,
    input,
    setInput,
    output,
    handleExecute,
    handleKey,
    showHelpDialog,
    setShowHelpDialog
  };
}
