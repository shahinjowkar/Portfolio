'use client';

import Terminal from './Terminal';

export default function Overlay() {
  const terminalLines = [
    '$ Hi, This Is Shahin Jowkar Dris knwon as Shawn',
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]">
      <div className="w-2/5 h-2/5 bg-black border border-[#00ff41]/30">
        <Terminal lines={terminalLines} typingSpeed={30} lineDelay={67} />
      </div>
    </div>
  );
}

