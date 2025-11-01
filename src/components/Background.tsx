import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-25 grid-rows-25">
        {Array.from({ length: 25*25 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-[#00ff41] rounded-full" />
          </div>
        ))}
      </div>
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

