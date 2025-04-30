import React, { useState, useRef, useEffect } from "react";
import { useTerminal } from "@/hooks/use-terminal";
import { motion } from "framer-motion";
import { executeCommand } from "@/lib/terminal-commands";
import { TerminalDialog } from "@/components/ui/terminal-dialog";

interface TerminalProps {
  id?: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ id, className }) => {
  const { 
    history, 
    output, 
    input, 
    setInput, 
    handleExecute, 
    handleKey,
    showHelpDialog,
    setShowHelpDialog 
  } = useTerminal();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLSpanElement>(null);

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Focus the terminal when clicked
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div 
        className={`terminal-window w-full max-w-2xl ${className || ""}`}
        onClick={handleTerminalClick}
        id={id}
      >
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <div className="ml-4 text-gray-300 text-sm">shyam@terminal:~</div>
        </div>
        <div 
          className="terminal-body hide-scrollbar" 
          ref={terminalRef}
        >
          {output.map((line, index) => (
            <div key={index} className="terminal-line" dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <div className="terminal-line">
            <span className="terminal-prompt">
              <span 
                ref={inputRef}
                contentEditable
                onKeyDown={handleKey}
                suppressContentEditableWarning
                className="focus:outline-none"
              >
                {input}
              </span>
              <span className="cursor"></span>
            </span>
          </div>
        </div>
      </div>

      <TerminalDialog open={showHelpDialog} onClose={() => setShowHelpDialog(false)} />
    </>
  );
};

export default Terminal;
