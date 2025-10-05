'use client';
import { useEffect, useRef, useState } from 'react';

export default function ProgressBar({ value = 0 }) {
  const [progress, setProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(value), 200); // Smooth delay
        } else {
          setProgress(0); // Optional: reset when out of view
        }
      },
      { threshold: 0.3 } // 30% visible = trigger
    );

    observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="w-full flex">
      <div
        ref={barRef}
        className="w-full bg-[var(--accent)] rounded-full h-2 overflow-hidden shadow-md"
      >
        <div
          className="h-full bg-white transition-all rounded-md duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
