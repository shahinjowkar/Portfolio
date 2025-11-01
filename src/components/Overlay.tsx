'use client';

import { useState, useEffect, useRef } from 'react';
import { mcgillAscii } from '@/assets/ascii/mcgill';
import { computerAscii } from '@/assets/ascii/computer';
import { skullAscii } from '@/assets/ascii/skull';
import { linuxAscii } from '@/assets/ascii/linux';
import DFSMaze from './DFSMaze';
import NeuralNetwork from './NeuralNetwork';

export default function Overlay() {
  const greetingLines = [
    '$ Hi, This Is Shahin Jowkar Dris known as Shawn',
    '$>>man shahin',
    'ls - List projects',
    'whoami - About me',
    'contact - Get in touch',
    'bg - see my blog posts'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const isProcessingRef = useRef(false);
  const typingSpeed = 15;
  const lineDelay = 30;

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
  }, [currentLineIndex, currentCharIndex, greetingLines]);


  return (
    <>
      {/* Main overlay - center */}
      <div className="absolute inset-0 flex items-center justify-center z-[5]">
        <div className="w-2/5 h-2/5 bg-black border border-[#00ff41]/30">
          <div 
            className="w-full h-full p-6 font-mono text-[#00ff41] text-sm leading-relaxed overflow-auto"
            style={{
              textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
            }}
          >
            <pre className="whitespace-pre-wrap">
              {displayedText}
              {isTyping && (
                <span 
                  className={showCursor ? 'opacity-100' : 'opacity-0'}
                  style={{
                    textShadow: '0 0 8px #00ff41',
                  }}
                >
                  █
                </span>
              )}
            </pre>
          </div>
        </div>
      </div>

      {/* Corner overlays - 2/3 size of main (doubled from 1/3 = 26.67%) */}
      {/* Top left */}
      <div className="absolute top-5 left-5 w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] flex items-center justify-center p-3 overflow-hidden">
        <pre className="font-mono text-[#00ff41] text-[12px] leading-[14px] whitespace-pre" style={{ textShadow: '0 0 2px #00ff41' }}>
          {linuxAscii}
        </pre>
      </div>
      
      {/* Top right */}
      <div className="absolute top-5 right-5 w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] overflow-hidden">
        <DFSMaze />
      </div>
      {/* Bottom left */}
      <div className="absolute bottom-5 left-5 w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] flex items-center justify-center p-3 overflow-hidden">
        <pre className="font-mono text-[#00ff41] text-[8px] leading-[9px] whitespace-pre" style={{ textShadow: '0 0 2px #00ff41' }}>
          {skullAscii}
        </pre>
      </div>
      
      {/* Bottom right */}

      <div className="absolute bottom-5 right-5 w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] flex items-center p-3 gap-4 overflow-hidden">
        {/* ASCII Art - Left side */}
        <div className="flex-shrink-0">
          <pre className="font-mono text-[#00ff41] text-[6px] leading-[7px] whitespace-pre" style={{ textShadow: '0 0 2px #00ff41' }}>
            {mcgillAscii}
          </pre>
        </div>
        {/* Text - Right side */}
        <div className="flex flex-col justify-center font-mono text-[#00ff41] text-xs leading-relaxed" style={{ textShadow: '0 0 3px #00ff41' }}>
          <div className="font-semibold mb-2">McGill University</div>
          <div className="mb-1">B.Sc. in Computer Science,</div>
        </div>
      </div>
    </>
  );
}
