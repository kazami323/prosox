"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type JSX,
  type ReactNode,
} from "react";

export default function Reveal({
  as,
  className,
  children,
}: {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={classes}>
      {children}
    </Tag>
  );
}
