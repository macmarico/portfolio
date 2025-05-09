'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div 
      className="cursor w-20 h-20 border border-white rounded-full absolute opacity-50 z-10 bg-[#4a5fc1] transition-all duration-200 ease-out pointer-events-none backdrop-blur-[10px] border-[rgba(255,255,255,0.18)] hidden md:block"
      style={{ 
        transform: `translate(${position.x - 25}px, ${position.y - 25}px)` 
      }}
    ></div>
  );
}
