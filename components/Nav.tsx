"use client";

import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  mobileLabel: string;
  optional?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { href: "#komu", label: "Кому", mobileLabel: "Кому это нужно" },
  { href: "#kak", label: "Как работает", mobileLabel: "Как работает" },
  {
    href: "#vid",
    label: "Как выглядит",
    mobileLabel: "Как выглядит",
    optional: true,
  },
  { href: "#formaty", label: "Что получите", mobileLabel: "Что вы получите" },
  { href: "#zakon", label: "Законность", mobileLabel: "Законность" },
  { href: "#cobi", label: "Cobi AI", mobileLabel: "Cobi AI" },
  { href: "#ceny", label: "Цены", mobileLabel: "Цены и старт" },
  {
    href: "#materialy",
    label: "Статьи",
    mobileLabel: "Статьи",
    optional: true,
  },
  { href: "#faq", label: "Вопросы", mobileLabel: "Вопросы", optional: true },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [langHint, setLangHint] = useState<"en" | "vi" | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleLangStub(lang: "en" | "vi") {
    setLangHint(lang);
    setTimeout(() => setLangHint(null), 1600);
  }

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <div className="navwrap">
      <div className="wrap">
        <div className="nav">
          <a className="mark" href="#top">
            <svg
              className="logo"
              viewBox="0 0 400 400"
              width="26"
              height="26"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M 227.905 66.922 L 332.868 171.885 C 346.981 185.999 346.981 208.881 332.868 222.995 L 227.905 327.958 C 213.791 342.071 190.909 342.071 176.795 327.958 L 71.832 222.995 C 57.719 208.881 57.719 185.999 71.832 171.885 L 176.795 66.922 C 190.909 52.809 213.791 52.809 227.905 66.922 Z M 277.450 197.060 C 277.450 241.000 244.601 276.620 204.080 276.620 C 163.559 276.620 130.710 241.000 130.710 197.060 C 130.710 153.120 163.559 117.500 204.080 117.500 C 244.601 117.500 277.450 153.120 277.450 197.060 Z"
              />
            </svg>
            <b>PROSOX</b>
            <span>Данные</span>
          </a>
          <nav className="nlinks" id="nlinks">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  [
                    link.optional ? "opt" : "",
                    activeHref === link.href ? "on" : "",
                  ]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="right">
            <div className="lang" role="group" aria-label="Язык">
              <button type="button" className="on" aria-pressed="true">
                RU
              </button>
              <button
                type="button"
                className="soon"
                aria-pressed="false"
                title="Английская версия — скоро"
                onClick={() => handleLangStub("en")}
              >
                {langHint === "en" ? "скоро" : "EN"}
              </button>
              <button
                type="button"
                className="soon"
                aria-pressed="false"
                title="Вьетнамская версия — скоро"
                onClick={() => handleLangStub("vi")}
              >
                {langHint === "vi" ? "скоро" : "VI"}
              </button>
            </div>
            <a className="navmail" href="mailto:info@prosox.io">
              info@prosox.io
            </a>
            <a
              className="btn btn--fill"
              href="#zayavka"
              data-req="Пример выгрузки"
            >
              Получить пример
            </a>
            <button
              className="burger"
              aria-label="Меню"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span></span>
            </button>
          </div>
        </div>
        <div className={`mobmenu${mobileOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobile}>
              {link.mobileLabel}
            </a>
          ))}
          <a
            className="btn btn--fill"
            href="#zayavka"
            data-req="Пример выгрузки"
            onClick={closeMobile}
          >
            Получить пример
          </a>
          <a
            href="mailto:info@prosox.io"
            style={{ textAlign: "center", color: "var(--text-2)" }}
            onClick={closeMobile}
          >
            info@prosox.io
          </a>
          <p className="mob-lang">Английская и вьетнамская версии — скоро</p>
        </div>
      </div>
    </div>
  );
}
