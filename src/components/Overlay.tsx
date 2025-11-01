'use client';

import React, { useState, useEffect } from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import SideBox from './SideBox';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type BoxContentType = 'link' | 'maze' | 'pc' | 'university';

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

  // Track which corner box has the hyperlinks (default: top-left)
  const [activeLinkCorner, setActiveLinkCorner] = useState<CornerPosition>('top-left');

  // Track which box the cursor is currently in
  const [cursorBox, setCursorBox] = useState<CornerPosition | false>(false);

  // Print to console where hyperlinks are
  useEffect(() => {
    console.log('Hyperlinks are currently at:', activeLinkCorner);
  }, [activeLinkCorner]);

  // Handle swapping content when cursor enters a different box
  useEffect(() => {
    // 1) If cursorBox == activeLinkCorner => do nothing
    if (cursorBox === activeLinkCorner) {
      return;
    }

    // 2) If cursorBox == false => do nothing
    if (cursorBox === false) {
      return;
    }

    // 3) If cursorBox !== activeLinkCorner => swap content
    // Swap content
    setContentTypes(prev => {
      const newTypes = { ...prev };
      // Store what's currently in cursorBox
      const cursorBoxContent = prev[cursorBox];
      // Move 'link' to cursorBox
      newTypes[cursorBox] = 'link';
      // Move what was in cursorBox to where activeLinkCorner was
      newTypes[activeLinkCorner] = cursorBoxContent;
      return newTypes;
    });

    // Update activeLinkCorner to the new position (cursorBox)
    setActiveLinkCorner(cursorBox);
  }, [cursorBox, activeLinkCorner]);

  // Handle cursor entering a box
  const handleMouseEnter = (box: CornerPosition) => {
    setCursorBox(box);
    console.log('Cursor is in box:', box);
  };

  // Handle cursor leaving a box
  const handleMouseLeave = () => {
    setCursorBox(false);
    console.log('Cursor is in box: false');
  };

  // Base hashmap mapping each corner to its default content type
  const baseContentTypes: Record<CornerPosition, BoxContentType> = {
    'top-left': 'link',
    'top-right': 'maze',
    'bottom-left': 'pc',
    'bottom-right': 'university',
  };

  // Stateful hashmap that can be updated when swapping content
  const [contentTypes, setContentTypes] = useState<Record<CornerPosition, BoxContentType>>(baseContentTypes);

  // Hashmap mapping each corner to its positioning classes
  const boxPositions: Record<CornerPosition, string> = {
    'top-left': 'top-5 left-5',
    'top-right': 'top-5 right-5',
    'bottom-left': 'bottom-5 left-5',
    'bottom-right': 'bottom-5 right-5',
  };

  // Array of all corner positions for iteration
  const corners: CornerPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];


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
      {corners.map((corner) => (
        <div
          key={corner}
          className={`absolute ${boxPositions[corner]} w-[26.67%] h-[26.67%] bg-black border border-[#00ff41]/30 z-[5] overflow-hidden`}
          onMouseEnter={() => handleMouseEnter(corner)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full">
            <SideBox 
              contentType={contentTypes[corner]} 
              logoUrls={contentTypes[corner] === 'link' ? logoUrls : undefined}
            />
          </div>
        </div>
      ))}
    </>
  );
}
