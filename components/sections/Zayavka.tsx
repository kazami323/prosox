"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Reveal from "@/components/Reveal";
import { animate, stagger } from "animejs";

const DEFAULT_BRIEF_PLACEHOLDER =
  "Источники, которые надо охватить, важные поля, периодичность — своими словами. Ссылки приветствуются.";
const DEFAULT_FORM_NOTE = "Прототип: форма пока не подключена к серверу.";

export default function Zayavka() {
  const [subject, setSubject] = useState("");
  const [briefPlaceholder, setBriefPlaceholder] = useState(
    DEFAULT_BRIEF_PLACEHOLDER
  );
  const [formNote, setFormNote] = useState(DEFAULT_FORM_NOTE);
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
            `Запрос: ${value}. Добавьте источники и поля, которые вам важны.`
          );
        }
      }, 500);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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
      setFormNote(
        "Заполните имя, контакт, описание задачи и отметьте согласие на обработку данных."
      );
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
          <span className="kicker">С чего начать</span>
          <h2 className="h2">
            Расскажите, что вам нужно видеть
            <span className="thin">вернёмся с планом сбора и ценой.</span>
          </h2>
          <p className="lede">
            Двух-трёх ссылок на источники и одного предложения о том, какое
            решение вы пытаетесь принять, достаточно. В ответ придёт план
            сбора, формат поставки и фиксированная оценка.
          </p>

          {!submitted && (
            <form id="leadform" noValidate onSubmit={handleSubmit}>
              <div className="subject" hidden={!subject}>
                <span className="lb">Тема запроса</span>
                <b>{subject}</b>
                <button type="button" onClick={() => setSubject("")}>
                  сбросить
                </button>
              </div>
              <input type="hidden" name="subject" value={subject} readOnly />
              <div className="hp" aria-hidden="true">
                <label>
                  Не заполняйте это поле
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
                Имя
                <input
                  type="text"
                  name="name"
                  placeholder="Как к вам обращаться"
                  autoComplete="name"
                  required
                  ref={nameRef}
                />
              </label>
              <label>
                Компания
                <input
                  type="text"
                  name="company"
                  placeholder="Название и сфера — одной строкой"
                  autoComplete="organization"
                />
              </label>
              <label>
                Email или Telegram
                <input
                  type="text"
                  name="contact"
                  placeholder="you@company.com или @username"
                  required
                  ref={contactRef}
                />
              </label>
              <label>
                Какие данные нужны
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
                  Согласен на обработку указанных данных для ответа на
                  обращение. Подробности — в{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    политике конфиденциальности
                  </a>
                  .
                </span>
              </label>
              <div className="actions" style={{ marginTop: 0 }}>
                <button className="btn btn--fill" type="submit">
                  Отправить заявку
                </button>
                <a className="btn btn--wire" href="mailto:info@prosox.io">
                  Или напишите на почту
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
              <h3>Заявка отправлена</h3>
              <p>Спасибо. Мы уже смотрим ваши источники. Что будет дальше:</p>
              <ul>
                <li>
                  <span className="n">01</span>
                  <span>Напишем, что технически возможно и сколько это стоит</span>
                </li>
                <li>
                  <span className="n">02</span>
                  <span>Параллельно юристы проверяют юрисдикцию источников</span>
                </li>
                <li>
                  <span className="n">03</span>
                  <span>
                    Если всё складывается — собираем пример выгрузки на ваших
                    источниках
                  </span>
                </li>
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal>
          <div className="person">
            <div className="avatar">ДС</div>
            <div>
              <div className="nm">Дмитрий Соколов</div>
              <div className="rl">Директор по развитию бизнеса, PROSOX</div>
              <div className="lk">
                <a
                  href="https://www.linkedin.com/in/dmitrii-prosox"
                  target="_blank"
                  rel="noopener"
                >
                  Профиль в LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contacts">
            <div className="crow">
              <div className="lbl">Общие вопросы</div>
              <div className="val">
                <a href="mailto:info@prosox.io">info@prosox.io</a>
                <br />
                Оценка задач, коммерческие предложения, договоры
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
              <div className="lbl">Офис</div>
              <div className="val">
                229 Chính Hữu Street, An Hải Ward
                <br />
                Дананг, Вьетнам
              </div>
            </div>
            <div className="crow">
              <div className="lbl">Компания</div>
              <div className="val">
                PROSOX, 11–50 специалистов
                <br />
                Технологии, информационные средства и интернет
              </div>
            </div>
          </div>
          <p className="fnote" style={{ marginTop: 16, lineHeight: 1.6 }}>
            Работаем в разных часовых поясах. Если вашим юристам или закупкам
            нужны документы до начала работы — напишите, пришлём реквизиты
            компании, шаблон NDA и образец юридического заключения заранее.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
