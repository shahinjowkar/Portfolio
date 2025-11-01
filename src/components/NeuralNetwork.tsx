'use client';

import { useState, useEffect } from 'react';

// Larger, creative hourglass/diamond shape: Input -> Expanding -> Wide Middle -> Contracting -> Output
const LAYERS = [5, 8, 12, 10, 7, 4]; // Input -> Hidden1 -> Hidden2 (widest) -> Hidden3 -> Hidden4 -> Output
const ANIMATION_SPEED = 150;
const CONNECTION_INTENSITY = [' ', '·', '·', '▪', '▪', '█']; // Increasing intensity levels

interface ConnectionIntensity {
  key: string;
  intensity: number; // 0-5 scale
}

export default function NeuralNetwork() {
  const [activeLayer, setActiveLayer] = useState<number>(-1);
  const [activatedNodes, setActivatedNodes] = useState<Set<string>>(new Set());
  const [connectionIntensities, setConnectionIntensities] = useState<Map<string, number>>(new Map());
  const [resetKey, setResetKey] = useState(0);

  // Animate forward propagation with intensity-based connections
  useEffect(() => {
    let layerIndex = -1;
    let step = 0;
    const intensities = new Map<string, number>();
    
    // Initialize all connections with base intensity (always visible but dim)
    const initializeConnections = () => {
      for (let layer = 0; layer < LAYERS.length - 1; layer++) {
        for (let i = 0; i < LAYERS[layer]; i++) {
          for (let j = 0; j < LAYERS[layer + 1]; j++) {
            intensities.set(`${layer}-${i}-${layer + 1}-${j}`, 1); // Base intensity 1 (dim)
          }
        }
      }
      setConnectionIntensities(new Map(intensities));
    };
    
    initializeConnections();
    
    const animate = () => {
      step++;
      
      // Progress through layers
      if (step % 8 === 0) {
        layerIndex++;
      }
      
      // Activate layer nodes
      if (layerIndex >= 0 && layerIndex < LAYERS.length) {
        const newActivated = new Set<string>();
        for (let i = 0; i < LAYERS[layerIndex]; i++) {
          newActivated.add(`${layerIndex}-${i}`);
        }
        setActivatedNodes(newActivated);
        setActiveLayer(layerIndex);
      }
      
      // Animate connections with pulsing intensity
      if (layerIndex >= 0 && layerIndex < LAYERS.length - 1) {
        // Pulsing intensity for current active connections (1-5 scale)
        const pulsePhase = (step % 12) / 12;
        const sinValue = Math.sin(pulsePhase * Math.PI * 2);
        const intensityLevel = Math.max(1, Math.min(5, Math.floor(3 + sinValue * 2)));
        
        for (let i = 0; i < LAYERS[layerIndex]; i++) {
          for (let j = 0; j < LAYERS[layerIndex + 1]; j++) {
            const connKey = `${layerIndex}-${i}-${layerIndex + 1}-${j}`;
            intensities.set(connKey, intensityLevel);
          }
        }
      }
      
      // Fade previous connections gradually
      for (let layer = 0; layer < LAYERS.length - 1; layer++) {
        if (layer < layerIndex || layer > layerIndex) {
          for (let i = 0; i < LAYERS[layer]; i++) {
            for (let j = 0; j < LAYERS[layer + 1]; j++) {
              const connKey = `${layer}-${i}-${layer + 1}-${j}`;
              const currentIntensity = intensities.get(connKey) || 1;
              // Fade to base intensity
              intensities.set(connKey, Math.max(1, currentIntensity - 0.3));
            }
          }
        }
      }
      
      setConnectionIntensities(new Map(intensities));

      if (layerIndex >= LAYERS.length) {
        // Reset after completion
        setTimeout(() => {
          setResetKey(prev => prev + 1);
        }, 1000);
      } else {
        setTimeout(animate, ANIMATION_SPEED);
      }
    };

    const timer = setTimeout(animate, ANIMATION_SPEED);
    return () => clearTimeout(timer);
  }, [resetKey]);

  // Reset on key change
  useEffect(() => {
    setActiveLayer(-1);
    setActivatedNodes(new Set());
    setConnectionIntensities(new Map());
  }, [resetKey]);

  const renderNetwork = () => {
    let result = '';
    const maxNodes = Math.max(...LAYERS);
    
    // Render nodes and connections with consistent spacing
    for (let row = 0; row < maxNodes; row++) {
      for (let layer = 0; layer < LAYERS.length; layer++) {
        const nodeCount = LAYERS[layer];
        const padding = Math.floor((maxNodes - nodeCount) / 2);
        
        // Render node
        if (row >= padding && row < padding + nodeCount) {
          const nodeIndex = row - padding;
          const nodeKey = `${layer}-${nodeIndex}`;
          const isActivated = activatedNodes.has(nodeKey);
          
          result += isActivated ? ' ● ' : ' ○ ';
        } else {
          result += '   ';
        }
        
        // Render connections between layers with intensity
        if (layer < LAYERS.length - 1) {
          const nextNodeCount = LAYERS[layer + 1];
          const nextPadding = Math.floor((maxNodes - nextNodeCount) / 2);
          
          // Find the connection with highest intensity for visualization
          let maxIntensity = 0;
          if (row >= padding && row < padding + nodeCount) {
            const nodeIndex = row - padding;
            for (let j = 0; j < nextNodeCount; j++) {
              const connKey = `${layer}-${nodeIndex}-${layer + 1}-${j}`;
              const intensity = connectionIntensities.get(connKey) || 0;
              maxIntensity = Math.max(maxIntensity, intensity);
            }
          }
          
          // Also check if row aligns with next layer
          if (row >= nextPadding && row < nextPadding + nextNodeCount) {
            const nextNodeIndex = row - nextPadding;
            for (let i = 0; i < nodeCount; i++) {
              const connKey = `${layer}-${i}-${layer + 1}-${nextNodeIndex}`;
              const intensity = connectionIntensities.get(connKey) || 0;
              maxIntensity = Math.max(maxIntensity, intensity);
            }
          }
          
          // Render connection with intensity
          const intensityChar = CONNECTION_INTENSITY[Math.floor(maxIntensity)] || ' ';
          result += ` ${intensityChar}${intensityChar}${intensityChar}${intensityChar} `;
        } else {
          result += ' ';
        }
      }
      result += '\n';
    }
    
    // Add layer labels
    result += '\n';
    result += 'Input  H1   H2      H3   H4  Output\n';
    result += LAYERS.map(l => ` [${l}]`).join('  ');

    return result;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-1 overflow-hidden">
      <pre
        className="font-mono text-[#00ff41] text-[7px] leading-[8px] whitespace-pre text-center"
        style={{
          textShadow: '0 0 2px #00ff41',
          fontFamily: 'monospace',
        }}
      >
        {renderNetwork()}
      </pre>
    </div>
  );
}

