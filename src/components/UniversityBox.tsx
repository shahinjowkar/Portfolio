'use client';

import { mcgillAscii } from '@/assets/ascii/mcgill';

export default function UniversityBox() {
  return (
    <div className="w-full h-full flex items-center p-3 gap-4">
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
  );
}

