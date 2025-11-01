'use client';

import { useState, useEffect } from 'react';

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
}

export default function Terminal({ 
  lines, 
  typingSpeed = 50,
  lineDelay = 500 
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else {
      // Finished typing current line
      if (currentLineIndex < lines.length - 1) {
        const lineTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + '\n');
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, lineDelay);

        return () => clearTimeout(lineTimeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay]);

  return (
    <div className="w-full h-full p-6 font-mono text-[#00ff41] text-sm leading-relaxed overflow-hidden">
      <pre 
        className="whitespace-pre-wrap"
        style={{
          textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
        }}
      >
        {displayedText}
        <span 
          className={showCursor ? 'opacity-100' : 'opacity-0'}
          style={{
            textShadow: '0 0 8px #00ff41',
            animation: showCursor ? 'none' : 'none',
          }}
        >
          █
        </span>
      </pre>
    </div>
  );
}

