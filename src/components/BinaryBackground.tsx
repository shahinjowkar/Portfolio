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
  const { toggleToTop } = useBinaryBackground();
  const [binaryRows, setBinaryRows] = useState<string[]>([]);
  const [numRows, setNumRows] = useState(0);
  const [animatedIndex, setAnimatedIndex] = useState(-1); // Track how many divs have been animated
  const [isHiding, setIsHiding] = useState(false); // Track when hide animation is active
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

  // Animate divs one by one when isOnTop changes or when hiding
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isOnTop && !isHiding) {
      // Show animation: start with first div immediately
      currentIndexRef.current = 0;
      flushSync(() => {
        setAnimatedIndex(0);
      });
      console.log('Show animation started: First div (index 0)');
      
      // Animate remaining divs one by one with 10ms delay
      const animateNext = () => {
        currentIndexRef.current += 1;
        if (currentIndexRef.current < binaryRows.length) {
          console.log(`Showing div index: ${currentIndexRef.current}`);
          flushSync(() => {
            setAnimatedIndex(currentIndexRef.current);
          });
          // Schedule next animation after 10ms
          timeoutRef.current = setTimeout(animateNext, 10);
        } else {
          console.log('Show animation complete');
          // Wait 2 seconds, then automatically trigger hide animation
          timeoutRef.current = setTimeout(() => {
            console.log('Auto-triggering hide animation after 2 second delay');
            setIsHiding(true);
          }, 100);
        }
      };
      
      // Start the animation chain after 10ms
      timeoutRef.current = setTimeout(animateNext, 10);
    } else if (isHiding && animatedIndex >= 0) {
      // Hide animation: start from bottom (index 0) and go up to top (index 49)
      // Start by hiding div 0 first, so set animatedIndex to 1 (divs with index >= 1 visible, index 0 hidden)
      currentIndexRef.current = 1;
      flushSync(() => {
        setAnimatedIndex(1);
      });
      console.log('Hide animation started: Hiding div index 0 first');
      
      const animateHide = () => {
        currentIndexRef.current += 1;
        if (currentIndexRef.current <= binaryRows.length) {
          console.log(`Hiding div index: ${currentIndexRef.current - 1}`);
          flushSync(() => {
            setAnimatedIndex(currentIndexRef.current);
          });
          // Schedule next animation after 10ms
          timeoutRef.current = setTimeout(animateHide, 10);
        } else {
          console.log('Hide animation complete');
          setAnimatedIndex(-1);
          setIsHiding(false);
          toggleToTop(); // Reset z-index to -1 and state
        }
      };
      
      // Start hiding animation after 10ms
      timeoutRef.current = setTimeout(animateHide, 10);
    } else if (!isOnTop && !isHiding) {
      // Reset when completely hidden
      setAnimatedIndex(-1);
      setIsHiding(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOnTop, isHiding, binaryRows.length, toggleToTop]);

  // Debug: Track animatedIndex changes
  useEffect(() => {
    console.log('animatedIndex changed to:', animatedIndex);
  }, [animatedIndex]);

  // Container z-index: high when showing or hiding, low when hidden
  const containerZIndex = (isOnTop || isHiding) ? 9999 : -1;
  
return (
    <>
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: containerZIndex }}
    >
      {binaryRows.map((row, index) => {
        // Show logic: divs are visible when index <= animatedIndex (0 → 49)
        // Hide logic: divs are visible when index >= animatedIndex (starts at 0, goes to 49)
        // When showing: index <= animatedIndex (animatedIndex goes 0→49)
        // When hiding: index >= animatedIndex (animatedIndex goes 0→49, so lower indices disappear first)
        let isVisible;
        if (isHiding) {
          // During hide: divs with index >= animatedIndex stay visible
          // So div 0 disappears first, then 1, 2, ... 49
          isVisible = animatedIndex >= 0 && index >= animatedIndex;
        } else {
          // During show: divs with index <= animatedIndex are visible
          isVisible = animatedIndex >= 0 && index <= animatedIndex;
        }
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
    </>
  );
}

// Export default for the provider component
export default BinaryBackgroundProvider;

