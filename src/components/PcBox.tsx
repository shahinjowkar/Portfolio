'use client';

import { skullAscii } from '@/assets/ascii/skull';

export default function PcBox() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <pre className="font-mono text-[#00ff41] text-[8px] leading-[9px] whitespace-pre" style={{ textShadow: '0 0 2px #00ff41' }}>
        {skullAscii}
      </pre>
    </div>
  );
}

