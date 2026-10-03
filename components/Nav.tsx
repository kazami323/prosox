"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  locales,
  localeNames,
  localePath,
  type Dictionary,
  type Locale,
} from "@/i18n";

const NAV_LINKS: { href: string; optional?: boolean }[] = [
  { href: "#komu" },
  { href: "#kak" },
  { href: "#vid", optional: true },
  { href: "#formaty" },
  { href: "#zakon" },
  { href: "#cobi" },
  { href: "#ceny" },
  { href: "#materialy", optional: true },
  { href: "#faq", optional: true },
];

export default function Nav({
  dict,
  locale,
  anchorBase = "",
  langPaths,
}: {
  dict: Dictionary["nav"];
  locale: Locale;
  /** Пусто на главной. На странице статьи — путь главной (с basePath),
   *  чтобы пункты меню вели на секции главной, а не в никуда. */
  anchorBase?: string;
  /** Куда ведёт каждый язык. По умолчанию — на главную этого языка;
   *  на странице статьи — на ту же статью. */
  langPaths?: Record<Locale, string>;
}) {
  const langHref = (l: Locale) => langPaths?.[l] ?? localePath(l);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

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

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <div className="navwrap">
      <div className="wrap">
        <div className="nav">
          <a className="mark" href={anchorBase + "#top"}>
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
            <span>{dict.brandSub}</span>
          </a>
          <nav className="nlinks" id="nlinks">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={anchorBase + link.href}
                className={
                  [
                    link.optional ? "opt" : "",
                    activeHref === link.href ? "on" : "",
                  ]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
              >
                {dict.links[i].label}
              </a>
            ))}
          </nav>
          <div className="right">
            <div className="lang" role="group" aria-label={dict.langLabel}>
              {locales.map((l) => (
                <Link
                  key={l}
                  href={langHref(l)}
                  hrefLang={l}
                  aria-current={l === locale ? "page" : undefined}
                  className={l === locale ? "on" : undefined}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
            <a className="navmail" href="mailto:info@prosox.io">
              info@prosox.io
            </a>
            <a
              className="btn btn--fill"
              href={anchorBase + "#zayavka"}
              data-req={dict.req}
            >
              {dict.cta}
            </a>
            <button
              className="burger"
              aria-label={dict.menuLabel}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span></span>
            </button>
          </div>
        </div>
        <div className={`mobmenu${mobileOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={anchorBase + link.href} onClick={closeMobile}>
              {dict.links[i].mobileLabel}
            </a>
          ))}
          <a
            className="btn btn--fill"
            href={anchorBase + "#zayavka"}
            data-req={dict.req}
            onClick={closeMobile}
          >
            {dict.cta}
          </a>
          <a
            href="mailto:info@prosox.io"
            style={{ textAlign: "center", color: "var(--text-2)" }}
            onClick={closeMobile}
          >
            info@prosox.io
          </a>
          <p className="mob-lang">{dict.langNote}</p>
          <div className="lang" role="group" aria-label={dict.langLabel}>
            {locales.map((l) => (
              <Link
                key={l}
                href={langHref(l)}
                hrefLang={l}
                aria-current={l === locale ? "page" : undefined}
                className={l === locale ? "on" : undefined}
                onClick={closeMobile}
              >
                {localeNames[l]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
