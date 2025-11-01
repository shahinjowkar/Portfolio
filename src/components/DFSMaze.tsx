'use client';

import { useState, useEffect } from 'react';

interface Cell {
  row: number;
  col: number;
  visited: boolean;
  isPath: boolean;
  isCurrent: boolean;
  walls: { top: boolean; right: boolean; bottom: boolean; left: boolean };
}

const MAZE_SIZE = 10; // 10x10 maze
const START = { row: 0, col: 0 };
const END = { row: MAZE_SIZE - 1, col: MAZE_SIZE - 1 };

export default function DFSMaze() {
  const [maze, setMaze] = useState<Cell[][]>([]);
  const [dfsStack, setDfsStack] = useState<{ row: number; col: number }[]>([]);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [path, setPath] = useState<Set<string>>(new Set());
  const [backtracking, setBacktracking] = useState<Set<string>>(new Set());
  const [solutionPath, setSolutionPath] = useState<Set<string>>(new Set());
  const [currentCell, setCurrentCell] = useState<{ row: number; col: number } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [foundSolution, setFoundSolution] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Initialize maze with walls
  const initializeMaze = (): Cell[][] => {
    const newMaze: Cell[][] = [];
    for (let row = 0; row < MAZE_SIZE; row++) {
      newMaze[row] = [];
      for (let col = 0; col < MAZE_SIZE; col++) {
        newMaze[row][col] = {
          row,
          col,
          visited: false,
          isPath: false,
          isCurrent: false,
          walls: { top: true, right: true, bottom: true, left: true },
        };
      }
    }
    return newMaze;
  };

  // Generate maze using DFS
  const generateMaze = (): { maze: Cell[][]; path: Set<string> } => {
    const newMaze = initializeMaze();
    const stack: { row: number; col: number }[] = [];
    const visited = new Set<string>();
    const pathCells = new Set<string>();

    // Start from start gate
    stack.push({ row: START.row, col: START.col });
    visited.add(`${START.row},${START.col}`);
    pathCells.add(`${START.row},${START.col}`);

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const { row, col } = current;

      // Get unvisited neighbors
      const neighbors = [
        { row: row - 1, col, dir: 'top' as const },
        { row, col: col + 1, dir: 'right' as const },
        { row: row + 1, col, dir: 'bottom' as const },
        { row, col: col - 1, dir: 'left' as const },
      ].filter(
        ({ row: r, col: c }) =>
          r >= 0 && r < MAZE_SIZE && c >= 0 && c < MAZE_SIZE && !visited.has(`${r},${c}`)
      );

      if (neighbors.length > 0) {
        const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        const { row: nextRow, col: nextCol, dir } = randomNeighbor;

        // Remove walls between current and neighbor
        if (dir === 'top') {
          newMaze[row][col].walls.top = false;
          newMaze[nextRow][nextCol].walls.bottom = false;
        } else if (dir === 'right') {
          newMaze[row][col].walls.right = false;
          newMaze[nextRow][nextCol].walls.left = false;
        } else if (dir === 'bottom') {
          newMaze[row][col].walls.bottom = false;
          newMaze[nextRow][nextCol].walls.top = false;
        } else if (dir === 'left') {
          newMaze[row][col].walls.left = false;
          newMaze[nextRow][nextCol].walls.right = false;
        }

        visited.add(`${nextRow},${nextCol}`);
        pathCells.add(`${nextRow},${nextCol}`);
        stack.push({ row: nextRow, col: nextCol });
      } else {
        stack.pop();
      }
    }

    // Ensure start and end gates are open
    // Remove left wall from start (top-left corner)
    if (START.col === 0) {
      newMaze[START.row][START.col].walls.left = false;
    }
    // Remove top wall from start
    if (START.row === 0) {
      newMaze[START.row][START.col].walls.top = false;
    }
    
    // Remove right wall from end (bottom-right corner)
    if (END.col === MAZE_SIZE - 1) {
      newMaze[END.row][END.col].walls.right = false;
    }
    // Remove bottom wall from end
    if (END.row === MAZE_SIZE - 1) {
      newMaze[END.row][END.col].walls.bottom = false;
    }

    return { maze: newMaze, path: pathCells };
  };

  // Reset and initialize maze
  useEffect(() => {
    // Reset all states
    setVisited(new Set());
    setPath(new Set());
    setBacktracking(new Set());
    setSolutionPath(new Set());
    setCurrentCell(null);
    setDfsStack([]);
    setIsAnimating(false);
    setFoundSolution(false);
    
    // Generate new maze
    const { maze: newMaze } = generateMaze();
    setMaze(newMaze);
    
    // Start animation after a brief delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [resetKey]);

  // Animate DFS traversal
  useEffect(() => {
    if (!isAnimating || maze.length === 0) return;

    const visitedSet = new Set<string>();
    const dfsPath: { row: number; col: number }[] = [];
    const backtrackingSet = new Set<string>();
    const solutionPathSet = new Set<string>();
    const stack: { row: number; col: number }[] = [{ row: START.row, col: START.col }];
    let previousCell: { row: number; col: number } | null = null;
    let previousStackLength = 1;
    let foundEnd = false;

    let stepIndex = 0;
    const animate = () => {
      if (stack.length === 0 || foundEnd) {
        setIsAnimating(false);
        setCurrentCell(null);
        if (foundEnd) {
          setFoundSolution(true);
          // Extract solution path from stack
          const solPath = new Set(stack.map(c => `${c.row},${c.col}`));
          setSolutionPath(solPath);
          // Reset after showing solution briefly
          setTimeout(() => {
            setResetKey(prev => prev + 1);
          }, 1000);
        }
        return;
      }

      const current = stack[stack.length - 1];
      const key = `${current.row},${current.col}`;

      // Check if we reached the end
      if (current.row === END.row && current.col === END.col) {
        foundEnd = true;
        setFoundSolution(true);
        const solPath = new Set(stack.map(c => `${c.row},${c.col}`));
        setSolutionPath(solPath);
        setCurrentCell(current);
        setVisited(new Set(visitedSet));
        setPath(new Set(dfsPath.map((c) => `${c.row},${c.col}`)));
        setIsAnimating(false);
        // Regenerate maze immediately after a brief moment to show solution
        setTimeout(() => {
          setResetKey(prev => prev + 1);
        }, 1000); // Show solution for 1 second then regenerate
        return;
      }

      if (!visitedSet.has(key)) {
        visitedSet.add(key);
        dfsPath.push(current);
      }

      // Find next unvisited neighbor
      const { row, col } = current;
      const neighbors = [
        { row: row - 1, col },
        { row, col: col + 1 },
        { row: row + 1, col },
        { row, col: col - 1 },
      ].filter(({ row: r, col: c }) => {
        if (r < 0 || r >= MAZE_SIZE || c < 0 || c >= MAZE_SIZE) return false;
        if (visitedSet.has(`${r},${c}`)) return false;
        // Check if there's a path (no wall)
        if (r === row - 1 && maze[row][col].walls.top) return false;
        if (r === row + 1 && maze[row][col].walls.bottom) return false;
        if (c === col + 1 && maze[row][col].walls.right) return false;
        if (c === col - 1 && maze[row][col].walls.left) return false;
        return true;
      });

      const wasBacktracking = stack.length < previousStackLength;
      
      if (neighbors.length > 0) {
        // Moving forward - remove from backtracking
        backtrackingSet.delete(key);
        stack.push(neighbors[0]);
      } else {
        // No neighbors - will backtrack
        // Mark current cell as backtracking before we pop
        backtrackingSet.add(key);
        stack.pop();
      }

      // If we backtracked, also mark cells we're going back through
      if (wasBacktracking && previousCell) {
        backtrackingSet.add(`${previousCell.row},${previousCell.col}`);
      }

      previousCell = current;
      previousStackLength = stack.length;

      setVisited(new Set(visitedSet));
      setDfsStack([...stack]);
      setCurrentCell(current);
      setPath(new Set(dfsPath.map((c) => `${c.row},${c.col}`)));
      setBacktracking(new Set(backtrackingSet));
      // Solution path is the current stack when we find the end
      if (foundEnd) {
        setSolutionPath(new Set(stack.map(c => `${c.row},${c.col}`)));
      } else {
        setSolutionPath(new Set(solutionPathSet));
      }

      stepIndex++;
      if (stepIndex < MAZE_SIZE * MAZE_SIZE * 4 && !foundEnd) {
        setTimeout(animate, 100);
      } else if (!foundEnd) {
        setIsAnimating(false);
        setCurrentCell(null);
        // Reset if no solution found
        setTimeout(() => {
          setResetKey(prev => prev + 1);
        }, 2000);
      }
    };

    animate();
  }, [isAnimating, maze, resetKey]);

  const renderMaze = () => {
    if (maze.length === 0) return 'Generating...';

    let result = '';
    
    // Render maze with walls
    for (let row = 0; row < MAZE_SIZE; row++) {
      // Top walls
      for (let col = 0; col < MAZE_SIZE; col++) {
        result += '+';
        result += maze[row][col].walls.top ? '---' : '   ';
      }
      result += '+\n';
      
      // Cells and side walls
      for (let col = 0; col < MAZE_SIZE; col++) {
        const cell = maze[row][col];
        const key = `${row},${col}`;
        const isVisited = visited.has(key);
        const isInPath = path.has(key);
        const isBacktracking = backtracking.has(key);
        const isSolution = solutionPath.has(key);
        const isStart = row === START.row && col === START.col;
        const isEnd = row === END.row && col === END.col;
        const isCurr = currentCell && currentCell.row === row && currentCell.col === col;

        result += cell.walls.left ? '|' : ' ';
        
        if (isStart) {
          result += ' S '; // Start gate
        } else if (isEnd) {
          result += ' E '; // End gate
        } else if (isCurr) {
          result += ' █ ';
        } else if (isSolution && foundSolution) {
          result += ' ★ '; // Solution path with star
        } else if (isBacktracking && isVisited) {
          result += ' × '; // Show backtracking with ×
        } else if (isInPath && isVisited) {
          result += ' · '; // Show exploration path with ·
        } else {
          result += '   ';
        }
      }
      result += maze[row][MAZE_SIZE - 1].walls.right ? '|' : ' ';
      result += '\n';
    }
    
    // Bottom border
    for (let col = 0; col < MAZE_SIZE; col++) {
      result += '+';
      result += maze[MAZE_SIZE - 1][col].walls.bottom ? '---' : '   ';
    }
    result += '+';

    return result;
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <pre
        className="font-mono text-[#00ff41] text-[10px] leading-[12px] whitespace-pre"
        style={{
          textShadow: '0 0 3px #00ff41',
          fontFamily: 'monospace',
        }}
      >
        {renderMaze()}
      </pre>
    </div>
  );
}

