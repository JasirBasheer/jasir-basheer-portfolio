'use client';
import React, { useState, useCallback, useEffect } from 'react';

interface InteractiveTileProps {
  gridSize: { width: number; height: number };
}

interface CellData {
  color: string;
  isActive: boolean;
}

const InteractiveTile: React.FC<InteractiveTileProps> = ({ gridSize }) => {
  const [grid, setGrid] = useState<CellData[][]>(() => {
    return Array(gridSize.height)
      .fill(null)
      .map(() =>
        Array(gridSize.width)
          .fill(null)
          .map(() => ({
            color: '#1e293b',
            isActive: false,
          }))
      );
  });

  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isColorPickerHovered, setIsColorPickerHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const colors = [
    '#FF0000', // Red
    '#FF6600', // Orange
    '#FFFF00', // Yellow
    '#FFFFFF', // White
    '#000000', // Black

  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCell = useCallback((row: number, col: number, color: string) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r) => [...r]);
      newGrid[row][col] = {
        color,
        isActive: true,
      };
      return newGrid;
    });
  }, []);

  const handleMouseEnter = useCallback((row: number, col: number, event: React.MouseEvent) => {
    setHoveredCell({ row, col });
    setMousePosition({ x: event.clientX, y: event.clientY });
    setShowColorPicker(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isColorPickerHovered) {
      setShowColorPicker(false);
      setHoveredCell(null);
    }
  }, [isColorPickerHovered]);

  const handleColorSelect = useCallback(
    (color: string) => {
      if (hoveredCell) {
        updateCell(hoveredCell.row, hoveredCell.col, color);
        setShowColorPicker(false);
        setHoveredCell(null);
        setIsColorPickerHovered(false);
      }
    },
    [hoveredCell, updateCell]
  );

  const handleColorPickerMouseEnter = useCallback(() => {
    setIsColorPickerHovered(true);
  }, []);

  const handleColorPickerMouseLeave = useCallback(() => {
    setIsColorPickerHovered(false);
    setShowColorPicker(false);
    setHoveredCell(null);
  }, []);

  const clearGrid = useCallback(() => {
    setGrid(
      Array(gridSize.height)
        .fill(null)
        .map(() =>
          Array(gridSize.width)
            .fill(null)
            .map(() => ({
              color: '#1e293b',
              isActive: false,
            }))
        )
    );
  }, [gridSize]);

  // Calculate color picker position to stay close to cursor and within viewport
  const getColorPickerPosition = () => {
    const offsetX = 5; // Smaller offset for proximity to cursor
    const offsetY = 5;
    const colorPickerWidth = 150; // Approximate width of color picker (5 cols * ~30px)
    const colorPickerHeight = 50; // Approximate height

    let left = mousePosition.x + offsetX;
    let top = mousePosition.y + offsetY;

    // Only check window dimensions on client side
    if (typeof window !== 'undefined') {
      // Prevent color picker from going off-screen
      if (left + colorPickerWidth > window.innerWidth) {
        left = mousePosition.x - colorPickerWidth - offsetX;
      }
      if (top + colorPickerHeight > window.innerHeight) {
        top = mousePosition.y - colorPickerHeight - offsetY;
      }
    }

    // Ensure non-negative coordinates
    left = Math.max(0, left);
    top = Math.max(0, top);

    return { left, top };
  };

  const { left, top } = getColorPickerPosition();

  return (
    <div className="flex flex-col items-center gap-4 px-20">
      <div
        className="inline-grid gap-0.5 p-4 bg-slate-900 rounded-lg relative"
        style={{
          gridTemplateColumns: `repeat(${gridSize.width}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.height}, 1fr)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const delay = (colIndex + rowIndex * 0.1) * 30;
            const isHovered = hoveredCell?.row === rowIndex && hoveredCell?.col === colIndex;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-7 h-7 border border-slate-700 cursor-pointer transition-all duration-200 
                  ${cell.isActive ? 'shadow-sm' : ''} 
                  ${mounted && gridSize.width * gridSize.height <= 400 ? 'animate-wave-reveal' : 'opacity-1 scale-1'} 
                  ${isHovered ? 'animate-3d-scale border-white z-10' : 'hover:scale-110 hover:border-slate-500'}`}
                style={{
                  backgroundColor: cell.color,
                  animationDelay: `${delay}ms`,
                  animationFillMode: 'forwards',
                }}
                onClick={(e) => handleMouseEnter(rowIndex, colIndex, e)}
                onMouseEnter={(e) => handleMouseEnter(rowIndex, colIndex, e)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })
        )}
      </div>

      {showColorPicker && hoveredCell && (
        <div
          className="fixed z-50 bg-slate-800 p-3 rounded-lg border border-slate-600 shadow-lg animate-scale-in"
          style={{
            left: `${left}px`,
            top: `${top}px`,
          }}
          onMouseEnter={handleColorPickerMouseEnter}
          onMouseLeave={handleColorPickerMouseLeave}
        >
          <div className="flex">
            {colors.map((color) => (
              <button
                key={color}
                className="w-4 h-8 transition-all border border-black duration-200 hover:scale-110 hover:w-8"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                title={`Select ${color}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTile;