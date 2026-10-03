"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Reveal from "@/components/Reveal";
import { animate, stagger } from "animejs";
import type { Dictionary } from "@/i18n";

const TABS = [
  { id: "t1", panelId: "p1" },
  { id: "t2", panelId: "p2" },
  { id: "t3", panelId: "p3" },
  { id: "t4", panelId: "p4" },
];

export default function Formaty({ dict }: { dict: Dictionary["formaty"] }) {
  const [active, setActive] = useState("t1");
  const firstRender = useRef(true);

  // Содержимое вкладки приходит так же, как строки в карточке героя:
  // по одному блоку, а не целой плитой.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tab = TABS.find((t) => t.id === active);
    const panel = tab && document.getElementById(tab.panelId);
    if (!panel) return;
    animate(panel.children, {
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 320,
      ease: "outQuad",
      delay: stagger(60),
    });
  }, [active]);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let dir = 0;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") dir = 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") dir = -1;
    if (!dir) return;
    e.preventDefault();
    const next = TABS[(index + dir + TABS.length) % TABS.length];
    setActive(next.id);
    document.getElementById(next.id)?.focus();
  }

  return (
    <section className="sec" id="formaty">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="fmt">
          <div className="tablist" role="tablist" aria-label={dict.tablistLabel}>
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                className="tab"
                role="tab"
                id={tab.id}
                aria-controls={tab.panelId}
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {dict.tabs[i].label}
                <span className="sub">{dict.tabs[i].sub}</span>
              </button>
            ))}
          </div>

          <div>
            <div
              className="panel"
              id="p1"
              role="tabpanel"
              aria-labelledby="t1"
              hidden={active !== "t1"}
            >
              <div className="p-head">{dict.panels[0].head}</div>
              <pre dangerouslySetInnerHTML={{ __html: dict.csvHtml }} />
              <div className="p-note">{dict.panels[0].note}</div>
            </div>

            <div
              className="panel"
              id="p2"
              role="tabpanel"
              aria-labelledby="t2"
              hidden={active !== "t2"}
            >
              <div className="p-head">{dict.panels[1].head}</div>
              <pre dangerouslySetInnerHTML={{ __html: dict.jsonHtml }} />
              <div className="p-note">{dict.panels[1].note}</div>
            </div>

            <div
              className="panel"
              id="p3"
              role="tabpanel"
              aria-labelledby="t3"
              hidden={active !== "t3"}
            >
              <div className="p-head">{dict.panels[2].head}</div>
              <pre dangerouslySetInnerHTML={{ __html: dict.sqlHtml }} />
              <div className="p-note">{dict.panels[2].note}</div>
            </div>

            <div
              className="panel"
              id="p4"
              role="tabpanel"
              aria-labelledby="t4"
              hidden={active !== "t4"}
            >
              <div className="p-head">{dict.panels[3].head}</div>
              <pre dangerouslySetInnerHTML={{ __html: dict.biHtml }} />
              <div className="p-note">{dict.panels[3].note}</div>
            </div>
          </div>
        </div>

        <Reveal className="tbl" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
          <div className="tbl-cap">{dict.tblCap}</div>
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>{dict.thField}</th>
                  <th>{dict.thType}</th>
                  <th>{dict.thMeaning}</th>
                </tr>
              </thead>
              <tbody>
                {dict.rows.map((row) => (
                  <tr key={row.field}>
                    <td className="mono">{row.field}</td>
                    <td className="mono">{row.type}</td>
                    <td>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="actions">
          <a className="btn btn--fill" href="#zayavka" data-req={dict.btnSampleReq}>
            {dict.btnSample}
          </a>
          <a
            className="btn btn--wire"
            href="#zayavka"
            data-req={dict.btnCatalogReq}
          >
            {dict.btnCatalog}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
