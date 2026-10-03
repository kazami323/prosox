import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export default function Zakon({ dict }: { dict: Dictionary["zakon"] }) {
  return (
    <section className="sec" id="zakon">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">{dict.h2}<span className="thin">{dict.thin}</span></h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="g-two">
          <Reveal>
            <div className="flow">
              {dict.steps.map((step, i) => (
                <div className="fstep" key={step.title}><div className="fno">{String(i + 1).padStart(2, "0")}</div><div><h4>{step.title}</h4><p>{step.text}</p></div></div>
              ))}
            </div>
            <div className="actions"><a className="btn btn--wire" href="#zayavka" data-req={dict.sampleReq}>{dict.sampleBtn}</a></div>
          </Reveal>

          <Reveal>
            <h3 style={{ fontSize: "clamp(19px,2vw,23px)", marginBottom: 10 }}>{dict.neverTitle}</h3>
            <p className="ans" style={{ marginBottom: 18 }}>{dict.neverLead}</p>
            <ul className="never">
              {dict.never.map((item, i) => (
                <li key={i}><span className="x">{String(i + 1).padStart(2, "0")}</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="ans" style={{ marginTop: 18 }}>{dict.neverOutro}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
