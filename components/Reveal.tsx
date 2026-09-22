"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "160px 0px -5% 0px", threshold: 0.04 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["rv", visible && "in", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
