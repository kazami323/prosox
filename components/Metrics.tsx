"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, createDrawable, stagger } from "animejs";

/** Тот же язык движения, что в карточке героя: цифры докручиваются, а график
 *  рисуется линией. Запускается один раз, когда блок доходит до экрана.
 *
 *  Разметка та же, что у поставки данных: [data-count] на числе, [data-draw]
 *  на линии графика — одно соглашение на весь сайт. */
export default function Metrics({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const finish = () => el.classList.add("metrics--done");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      finish();
      return;
    }

    const run = () => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node, i) => {
        const original = node.textContent ?? "";
        const target = Number(original.replace(/\D/g, ""));
        if (!Number.isFinite(target) || target === 0) return;
        const state = { value: 0 };
        animate(state, {
          value: target,
          duration: 900,
          delay: i * 90,
          ease: "outExpo",
          onUpdate: () => {
            node.textContent = Math.round(state.value).toLocaleString("ru-RU");
          },
          onComplete: () => {
            node.textContent = original;
          },
        });
      });

      const lines = el.querySelectorAll<SVGPolylineElement>("[data-draw]");
      if (lines.length) {
        animate(createDrawable(lines), {
          draw: ["0 0", "0 1"],
          duration: 1100,
          ease: "inOutSine",
          delay: stagger(120),
        });
      }

      finish();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            run();
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={root}>
      {children}
    </div>
  );
}
