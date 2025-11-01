'use client';

import InteractiveTerminal from './InteractiveTerminal';
import { mcgillAscii } from '@/assets/ascii/mcgill';
import { computerAscii } from '@/assets/ascii/computer';
import { skullAscii } from '@/assets/ascii/skull';
import { shieldAscii } from '@/assets/ascii/shield';
import { logoAscii } from '@/assets/ascii/logo';
import { emblemAscii } from '@/assets/ascii/emblem';
import DFSMaze from './DFSMaze';
import NeuralNetwork from './NeuralNetwork';

export default function Overlay() {
  const greetingLines = [
    '$ Hi, This Is Shahin Jowkar Dris known as Shawn'
  ];

  // URLs for the ASCII logos (customize these)
  const logoUrls = {
    shield: 'https://www.linkedin.com/in/shahinjowkar/',
    logo: 'mailto:shahinjowkardris@gmail.com',  
    emblem: 'https://github.com/shahinjowkar'
  };


  return (
    <>
      {/* Main overlay - center */}
      <div className="absolute inset-0 flex items-center justify-center z-[5]">
        <div className="w-2/5 h-2/5 bg-black border border-[#00ff41]/30">
          <InteractiveTerminal 
            greetingLines={greetingLines}
            typingSpeed={15}
            lineDelay={30}
          />
        </div>
      </div>

      {/* Corner overlays - 2/3 size of main (doubled from 1/3 = 26.67%) */}
      {/* Top left */}
      <div className="absolute top-5 left-5 w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] flex items-center justify-center p-2 gap-2 overflow-hidden">
        <a 
          href={logoUrls.shield} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          style={{ transform: "scale(0.5)" }}
        >
          <pre className="font-mono text-[#00ff41] text-[2px] leading-[2.5px] whitespace-pre" style={{ textShadow: '0 0 1px #00ff41' }}>
            {shieldAscii}
          </pre>
        </a>
        <a 
          href={logoUrls.logo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          style={{ transform: "scale(0.5)" }}
        >
          <pre className="font-mono text-[#00ff41] text-[2px] leading-[2.5px] whitespace-pre" style={{ textShadow: '0 0 1px #00ff41' }}>
            {logoAscii}
          </pre>
        </a>
        <a 
          href={logoUrls.emblem} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
          style={{ transform: "scale(0.5)" }}
        >
          <pre className="font-mono text-[#00ff41] text-[2px] leading-[2.5px] whitespace-pre" style={{ textShadow: '0 0 1px #00ff41' }}>
            {emblemAscii}
          </pre>
        </a>
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
