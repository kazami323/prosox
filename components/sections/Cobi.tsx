import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export default function Cobi({ dict }: { dict: Dictionary["cobi"] }) {
  return (
    <section className="sec band" id="cobi">
      <div className="wrap g-band">
        <Reveal>
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            Cobi AI
            <span className="thin">
              {dict.thin}
            </span>
          </h2>
          <p className="lede">{dict.lede}</p>
          <ul className="feat">
            {dict.features.map((f, i) => (
              <li key={i}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="actions">
            <a
              className="btn btn--band"
              href="#zayavka"
              data-req={dict.demoReq}
            >
              {dict.demoLabel}
            </a>
            <a
              className="btn btn--bandwire"
              href="#zayavka"
              data-req={dict.pilotReq}
            >
              {dict.pilotLabel}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="bpanel">
            <div className="bp-head">{dict.coverageHead}</div>
            <div className="bp-row">
              Uzum<span className="state state--live">{dict.live}</span>
            </div>
            <div className="bp-row">
              Wildberries<span className="state state--live">{dict.live}</span>
            </div>
            <div className="bp-row">
              Ozon<span className="state state--live">{dict.live}</span>
            </div>
            <div className="bp-row">
              {dict.yandexMarket}<span className="state state--live">{dict.live}</span>
            </div>
          </div>
          <div className="bpanel">
            <div className="bp-head">{dict.startHead}</div>
            {dict.startSteps.map((step) => (
              <div className="bp-row" key={step}>
                {step}
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: 18,
              fontSize: 13.5,
              color: "var(--band-text-3)",
              lineHeight: 1.65,
            }}
          >
            {dict.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
