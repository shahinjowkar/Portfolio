'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface InteractiveTerminalProps {
  greetingLines: string[];
  typingSpeed?: number;
  lineDelay?: number;
}

export default function InteractiveTerminal({ 
  greetingLines,
  typingSpeed = 50,
  lineDelay = 500,
}: InteractiveTerminalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const isProcessingRef = useRef(false);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect for greeting
  useEffect(() => {
    if (!isTyping || isProcessingRef.current) return;
    isProcessingRef.current = true;
    
    if (currentLineIndex >= greetingLines.length) {
      // Finished greeting, stop typing
      setIsTyping(false);
      isProcessingRef.current = false;
      return;
    }

    const currentLine = greetingLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      // Still typing current line
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
        isProcessingRef.current = false;
      }, typingSpeed);

      return () => {
        clearTimeout(typingTimeout);
        isProcessingRef.current = false;
      };
    } else {
      // Finished typing current line
      if (currentLineIndex < greetingLines.length - 1) {
        // Move to next line
        const lineTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + '\n');
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          isProcessingRef.current = false;
        }, lineDelay);

        return () => {
          clearTimeout(lineTimeout);
          isProcessingRef.current = false;
        };
      } else {
        // Finished last line, stop typing
        const completionTimeout = setTimeout(() => {
          setIsTyping(false);
          isProcessingRef.current = false;
        }, lineDelay);
        return () => {
          clearTimeout(completionTimeout);
          isProcessingRef.current = false;
        };
      }
    }
  }, [currentLineIndex, currentCharIndex, greetingLines, typingSpeed, lineDelay, isTyping]);

  return (
    <div 
      className="w-full h-full p-6 font-mono text-[#00ff41] text-sm leading-relaxed overflow-auto flex flex-col"
      style={{
        textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
      }}
    >
      <pre className="whitespace-pre-wrap">
        {displayedText}
        <span 
          className={showCursor ? 'opacity-100' : 'opacity-0'}
          style={{
            textShadow: '0 0 8px #00ff41',
          }}
        >
          █
        </span>
      </pre>
      
      {/* Navigation options - displayed after greeting finishes */}
      {!isTyping && (
        <div className="flex flex-wrap items-center gap-3 mt-2" style={{ marginTop: '8px' }}>
          <Link href="/project" className="hover:text-[#00ff41] hover:scale-110 cursor-pointer transition-all duration-200 relative group">
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">[</span>
            <span className="px-1">Projects</span>
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">]</span>
          </Link>
          <span className="text-[#00ff41]/30">|</span>
          <span className="hover:text-[#00ff41] hover:scale-110 cursor-pointer transition-all duration-200 relative group">
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">[</span>
            <span className="px-1">Blog</span>
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">]</span>
          </span>
          <span className="text-[#00ff41]/30">|</span>
          <span className="hover:text-[#00ff41] hover:scale-110 cursor-pointer transition-all duration-200 relative group">
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">[</span>
            <span className="px-1">biography</span>
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">]</span>
          </span>
          <span className="text-[#00ff41]/30">|</span>
          <span className="hover:text-[#00ff41] hover:scale-110 cursor-pointer transition-all duration-200 relative group">
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">[</span>
            <span className="px-1">passionAndVision</span>
            <span className="text-[#00ff41]/70 group-hover:text-[#00ff41]">]</span>
          </span>
        </div>
      )}
    </div>
  );
}

