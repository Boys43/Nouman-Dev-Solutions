"use client";

import { useEffect, useRef, useState } from "react";

export default function Odometer({ value, duration = 2000, className = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(0, value, duration);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const animateValue = (start, end, duration) => {
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <span
      ref={ref}
      className={`inline-block text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider ${className}`}
    >
      {displayValue.toLocaleString()}
    </span>
  );
}