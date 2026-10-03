import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

const STEP_META = [
  { no: "01", by: "by-you" },
  { no: "02", by: "by-us" },
  { no: "03", by: "by-us" },
  { no: "04", by: "by-you" },
  { no: "05", by: "by-us" },
  { no: "06", by: "by-us" },
] as const;

export default function Kak({ dict }: { dict: Dictionary["kak"] }) {
  return (
    <section className="sec" id="kak">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="steps">
          {dict.steps.map((step, i) => (
            <Reveal className="step" key={STEP_META[i].no}>
              <div className="st-no">{STEP_META[i].no}</div>
              <div>
                <h3>
                  {step.title}
                  <span className={`by ${STEP_META[i].by}`}>{step.by}</span>
                </h3>
                <p>{step.text}</p>
              </div>
              <div className="st-out">
                {step.out.map((line, j) => (
                  <Fragment key={line}>
                    {j > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="tbl" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
          <div className="tbl-cap">{dict.table.caption}</div>
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>{dict.table.own}</th>
                  <th>{dict.table.us}</th>
                </tr>
              </thead>
              <tbody>
                {dict.table.rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.own}</td>
                    <td className="us">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
