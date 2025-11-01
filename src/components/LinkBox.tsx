'use client';

import { shieldAscii } from '@/assets/ascii/shield';
import { logoAscii } from '@/assets/ascii/logo';
import { emblemAscii } from '@/assets/ascii/emblem';

interface LinkBoxProps {
  logoUrls: {
    shield: string;
    logo: string;
    emblem: string;
  };
}

export default function LinkBox({ logoUrls }: LinkBoxProps) {
  // Create a repeating "#" pattern for background
  const hashPattern = '#'.repeat(100);
  const hashLines = Array(50).fill(hashPattern).join('\n');
  
  return (
    <div className="w-full h-full relative flex items-center justify-center p-2 gap-2">
      {/* Background layer with "#" pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <pre className="font-mono text-[#00ff41]/10 text-[8px] leading-[8px] whitespace-pre w-full h-full">
          {hashLines}
        </pre>
      </div>
      {/* Links layer on top */}
      <div className="relative z-10 flex items-center justify-center gap-2">
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
    </div>
  );
}

