'use client';

import { useEffect, useState, useRef, createContext, useContext } from 'react';
import { flushSync } from 'react-dom';

// Context to control BinaryBackground z-index
interface BinaryBackgroundContextType {
  isOnTop: boolean;
  toggleToTop: () => void;
}

const BinaryBackgroundContext = createContext<BinaryBackgroundContextType | null>(null);

export const useBinaryBackground = () => {
  const context = useContext(BinaryBackgroundContext);
  if (!context) {
    throw new Error('useBinaryBackground must be used within BinaryBackgroundProvider');
  }
  return context;
};

export function BinaryBackgroundProvider({ children }: { children: React.ReactNode }) {
  const [isOnTop, setIsOnTop] = useState(false);

  const toggleToTop = () => {
    setIsOnTop(prev => !prev);
  };

  return (
    <BinaryBackgroundContext.Provider value={{ isOnTop, toggleToTop }}>
      {children}
      <BinaryBackground isOnTop={isOnTop} />
    </BinaryBackgroundContext.Provider>
  );
}

interface BinaryBackgroundProps {
  isOnTop: boolean;
}

function BinaryBackground({ isOnTop }: BinaryBackgroundProps) {
  const [binaryRows, setBinaryRows] = useState<string[]>([]);
  const [numRows, setNumRows] = useState(0);
  const [animatedIndex, setAnimatedIndex] = useState(-1); // Track how many divs have been animated
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  // Generate exactly 50 divs, each covering full width and stacking to full height
  useEffect(() => {
    const NUM_ROWS = 50; // Exactly 50 divs as specified
    
    const generateBinaryRow = (): string => {
      // Generate enough characters to span full width
      // Use a reasonable character width estimate for monospace font
      const charWidth = 8; // Approximate monospace character width
      const length = Math.ceil(window.innerWidth / charWidth) + 10; // Extra to ensure full coverage
      let row = '';
      for (let i = 0; i < length; i++) {
        row += Math.random() > 0.5 ? '0' : '1';
      }
      return row;
    };

    const rows = Array.from({ length: NUM_ROWS }, () => generateBinaryRow());
    setBinaryRows(rows);
    setNumRows(NUM_ROWS);

    // Regenerate on window resize
    const handleResize = () => {
      const newRows = Array.from({ length: NUM_ROWS }, () => generateBinaryRow());
      setBinaryRows(newRows);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate divs one by one when isOnTop changes
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isOnTop) {
      // Start with first div immediately
      currentIndexRef.current = 0;
      flushSync(() => {
        setAnimatedIndex(0);
      });
      console.log('Animation started: First div (index 0)');
      
      // Animate remaining divs one by one with 5 second delay for debugging
      const animateNext = () => {
        currentIndexRef.current += 1;
        if (currentIndexRef.current < binaryRows.length) {
          console.log(`Animating div index: ${currentIndexRef.current}`);
          flushSync(() => {
            setAnimatedIndex(currentIndexRef.current);
          });
          // Schedule next animation after 5 seconds (increased for debugging)
          timeoutRef.current = setTimeout(animateNext, 10);
        } else {
          console.log('Animation complete');
        }
      };
      
      // Start the animation chain after 5 seconds
      timeoutRef.current = setTimeout(animateNext, 10);
    } else {
      // Reset immediately when hiding
      setAnimatedIndex(-1);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOnTop, binaryRows.length]);

  // Debug: Track animatedIndex changes
  useEffect(() => {
    console.log('animatedIndex changed to:', animatedIndex);
  }, [animatedIndex]);

  // Container z-index: high when showing, low when hiding
  const containerZIndex = isOnTop ? 9999 : -1;
  
return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: containerZIndex }}
    >
      {binaryRows.map((row, index) => {
        // Only show divs that have been animated (index <= animatedIndex)
        const isVisible = isOnTop && animatedIndex >= 0 && index <= animatedIndex;
        const divZIndex = isVisible ? index : -1; // Relative z-index within container
        
        // Debug log for first few divs
        if (index < 5 && isOnTop) {
          console.log(`Render: Div ${index}, animatedIndex=${animatedIndex}, isVisible=${isVisible}, divZIndex=${divZIndex}`);
        }
        
        return (
          <div
            key={index}
            className="w-full font-mono bg-black"
            style={{
              width: '100vw', // Full width
              height: `${100 / 50}vh`, // Each div is viewportHeight / 50 (i.e., 2vh)
              fontSize: '15px',
              lineHeight: '1', // Tight line height
              margin: '0',
              padding: '0',
              zIndex: divZIndex,
              opacity: isVisible ? 1 : 0, // Use opacity to control visibility
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            //   color: '#00ff41',
            //   textShadow: '0 0 0.5px #00ff41',
              color: 'rgba(0, 255, 65, 0.3)', // Green with reduced opacity (0.3 = 30%)
              textShadow: '0 0 0.5px rgba(0, 255, 65, 0.3)', // Match text shadow opacity
              letterSpacing: '3px', // Horizontal spacing between characters
              transition: 'opacity 0.1s ease-in', // Smooth fade in
            }}
          >
            {row}
          </div>
        );
      })}
    </div>
  );
}

// Export default for the provider component
export default BinaryBackgroundProvider;

