"use client";
import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: string;
  className?: string;
}

export default function FadeUp({ children, delay, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${delay ? `d${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
