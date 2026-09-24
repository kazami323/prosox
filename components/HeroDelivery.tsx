"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, createTimeline, stagger } from "animejs";

/** Главный момент страницы: карточка выгрузки не появляется готовой, а
 *  собирается на глазах — строки ложатся одна за другой, цены докручиваются
 *  до значений, дельты падают последними, и в конце загорается плашка
 *  доставки. Это ровно то, что продаёт сервис, показанное без слов.
 *
 *  Контент отрисован на сервере и виден без JS: начальное скрытие включает
 *  только класс .js на <html>, который ставится инлайн-скриптом до первой
 *  отрисовки (см. app/layout.tsx). Поэтому вспышки готового контента перед
 *  анимацией нет, а без JS карточка просто видна целиком. */
export default function HeroDelivery({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const finish = () => el.classList.add("delivery--done");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const card = el.querySelector<HTMLElement>("[data-card]");
    const pill = el.querySelector<HTMLElement>("[data-pill]");
    const rows = el.querySelectorAll<HTMLElement>("[data-row]");
    const deltas = el.querySelectorAll<HTMLElement>("[data-delta]");
    const foot = el.querySelector<HTMLElement>("[data-foot]");
    const counters = el.querySelectorAll<HTMLElement>("[data-count]");

    // Цифры докручиваются, но финальная строка возвращается ровно той, что
    // пришла с сервера — форматирование чисел не должно зависеть от локали
    // браузера.
    const runCounters = () => {
      counters.forEach((node) => {
        const original = node.textContent ?? "";
        const target = Number(original.replace(/\D/g, ""));
        if (!Number.isFinite(target) || target === 0) return;
        const state = { value: 0 };
        animate(state, {
          value: target,
          duration: 760,
          ease: "outExpo",
          onUpdate: () => {
            node.textContent = Math.round(state.value).toLocaleString("ru-RU");
          },
          onComplete: () => {
            node.textContent = original;
          },
        });
      });
    };

    const tl = createTimeline({ defaults: { ease: "outQuad" } });

    if (card) {
      tl.add(card, { opacity: [0, 1], translateY: [14, 0], duration: 460 }, 0);
    }
    if (rows.length) {
      tl.add(
        rows,
        {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 380,
          delay: stagger(75),
        },
        220,
      );
    }
    tl.call(runCounters, 260);
    if (deltas.length) {
      tl.add(
        deltas,
        {
          opacity: [0, 1],
          scale: [0.82, 1],
          duration: 340,
          ease: "outBack",
          delay: stagger(70),
        },
        780,
      );
    }
    if (pill) {
      tl.add(pill, { opacity: [0, 1], scale: [0.92, 1], duration: 380 }, 900);
    }
    if (foot) {
      tl.add(foot, { opacity: [0, 1], translateY: [8, 0], duration: 420 }, 1020);
    }

    tl.then(finish);

    return () => {
      tl.pause();
    };
  }, []);

  return (
    <div className="delivery" ref={root}>
      {children}
    </div>
  );
}
