"use client";

import Image from "next/image";
import portrait from "@/public/team/dmitrii-sokolov.jpg";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Reveal from "@/components/Reveal";
import { animate, stagger } from "animejs";
import type { Dictionary } from "@/i18n";

export default function Zayavka({ dict }: { dict: Dictionary["zayavka"] }) {
  const [subject, setSubject] = useState("");
  const [briefPlaceholder, setBriefPlaceholder] = useState(
    dict.briefPlaceholder
  );
  const [formNote, setFormNote] = useState(dict.formNote);
  const [formNoteIsError, setFormNoteIsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const briefRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const companyUrlRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const trigger = target.closest("[data-req]");
      if (!trigger) return;
      const value = trigger.getAttribute("data-req") ?? "";
      setSubject(value);
      setTimeout(() => {
        if (nameRef.current && !nameRef.current.value) {
          nameRef.current.focus({ preventScroll: true });
        }
        if (briefRef.current && !briefRef.current.value) {
          setBriefPlaceholder(
            dict.briefPlaceholderWithSubject.replace("{subject}", value)
          );
        }
      }, 500);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [dict]);

  useEffect(() => {
    if (!submitted) return;
    const done = doneRef.current;
    done?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (!done || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // Подтверждение — момент, которого посетитель ждал: экран приходит целиком,
    // затем по очереди встают три шага того, что будет дальше.
    animate(done, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 420,
      ease: "outQuad",
    });
    const steps = done.querySelectorAll("li");
    if (steps.length) {
      animate(steps, {
        opacity: [0, 1],
        translateX: [-10, 0],
        duration: 340,
        ease: "outQuad",
        delay: stagger(90, { start: 260 }),
      });
    }
  }, [submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (companyUrlRef.current?.value) return;

    const required = [nameRef.current, contactRef.current, briefRef.current];
    const missing = required.filter((el) => !el?.value.trim());

    if (missing.length || !consentRef.current?.checked) {
      setFormNote(dict.formError);
      setFormNoteIsError(true);
      if (
        noteRef.current &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        animate(noteRef.current, {
          translateX: [0, -6, 5, -3, 0],
          duration: 380,
          ease: "outQuad",
        });
      }
      (missing[0] ?? consentRef.current)?.focus();
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="sec sec--alt" id="zayavka">
      <div className="wrap g-two">
        <Reveal>
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>

          {!submitted && (
            <form id="leadform" noValidate onSubmit={handleSubmit}>
              <div className="subject" hidden={!subject}>
                <span className="lb">{dict.subjectLabel}</span>
                <b>{subject}</b>
                <button type="button" onClick={() => setSubject("")}>
                  {dict.subjectReset}
                </button>
              </div>
              <input type="hidden" name="subject" value={subject} readOnly />
              <div className="hp" aria-hidden="true">
                <label>
                  {dict.honeypotLabel}
                  <input
                    type="text"
                    name="company_url"
                    tabIndex={-1}
                    autoComplete="off"
                    ref={companyUrlRef}
                  />
                </label>
              </div>

              <label>
                {dict.nameLabel}
                <input
                  type="text"
                  name="name"
                  placeholder={dict.namePlaceholder}
                  autoComplete="name"
                  required
                  ref={nameRef}
                />
              </label>
              <label>
                {dict.companyLabel}
                <input
                  type="text"
                  name="company"
                  placeholder={dict.companyPlaceholder}
                  autoComplete="organization"
                />
              </label>
              <label>
                {dict.contactLabel}
                <input
                  type="text"
                  name="contact"
                  placeholder={dict.contactPlaceholder}
                  required
                  ref={contactRef}
                />
              </label>
              <label>
                {dict.briefLabel}
                <textarea
                  name="brief"
                  placeholder={briefPlaceholder}
                  required
                  ref={briefRef}
                />
              </label>
              <label className="consent">
                <input type="checkbox" name="consent" required ref={consentRef} />
                <span>
                  {dict.consentText}{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {dict.consentLink}
                  </a>
                  .
                </span>
              </label>
              <div className="actions" style={{ marginTop: 0 }}>
                <button className="btn btn--fill" type="submit">
                  {dict.submit}
                </button>
                <a className="btn btn--wire" href="mailto:info@prosox.io">
                  {dict.mailLink}
                </a>
              </div>
              <p
                className="fnote"
                ref={noteRef}
                role="status"
                style={formNoteIsError ? { color: "var(--alert)" } : undefined}
              >
                {formNote}
              </p>
            </form>
          )}

          {submitted && (
            <div className="done show" role="status" aria-live="polite" ref={doneRef}>
              <div className="ico">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11.5l5 5L18 6" />
                </svg>
              </div>
              <h3>{dict.doneTitle}</h3>
              <p>{dict.doneLead}</p>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>{dict.doneSteps[0]}</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>{dict.doneSteps[1]}</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>{dict.doneSteps[2]}</span>
                </li>
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal>
          <div className="person">
            <Image className="avatar avatar--photo" src={portrait} alt={dict.personName} width={56} height={56} />
            <div>
              <div className="nm">{dict.personName}</div>
              <div className="rl">{dict.personRole}</div>
              <div className="lk">
                <a
                  href="https://www.linkedin.com/in/dmitrii-prosox"
                  target="_blank"
                  rel="noopener"
                >
                  {dict.personLinkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="contacts">
            <div className="crow">
              <div className="lbl">{dict.generalLabel}</div>
              <div className="val">
                <a href="mailto:info@prosox.io">info@prosox.io</a>
                <br />
                {dict.generalText}
              </div>
            </div>
            <div className="crow">
              <div className="lbl">LinkedIn</div>
              <div className="val">
                <a
                  href="https://www.linkedin.com/company/prosox"
                  target="_blank"
                  rel="noopener"
                >
                  linkedin.com/company/prosox
                </a>
              </div>
            </div>
            <div className="crow">
              <div className="lbl">{dict.officeLabel}</div>
              <div className="val">
                229 Chính Hữu Street, An Hải Ward
                <br />
                {dict.officeCity}
              </div>
            </div>
            <div className="crow">
              <div className="lbl">{dict.companyRowLabel}</div>
              <div className="val">
                {dict.companyRowSize}
                <br />
                {dict.companyRowIndustry}
              </div>
            </div>
          </div>
          <p className="fnote" style={{ marginTop: 16, lineHeight: 1.6 }}>
            {dict.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
