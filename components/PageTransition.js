'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match this with the animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`min-h-screen ${isAnimating ? 'animate-pageTransition' : ''}`}>
      {children}
    </div>
  );
} 