import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export default function Ceny({ dict }: { dict: Dictionary["ceny"] }) {
  const { pilot, monitoring, platform } = dict;
  return (
    <section className="sec sec--alt" id="ceny">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="tiers">
          <Reveal className="tier">
            <div className="name">{pilot.name}</div>
            <div className="who">{pilot.who}</div>
            <ul>
              {pilot.items.map((item) => (
                <li key={item}>
                  <span className="ck">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="price">
              {pilot.price[0]}
              <br />
              {pilot.price[1]}
            </div>
          </Reveal>
          <Reveal className="tier tier--focus">
            <span className="badge">{monitoring.badge}</span>
            <div className="name">{monitoring.name}</div>
            <div className="who">{monitoring.who}</div>
            <ul>
              {monitoring.items.map((item) => (
                <li key={item}>
                  <span className="ck">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="price">
              {monitoring.price[0]}
              <br />
              {monitoring.price[1]}
            </div>
          </Reveal>
          <Reveal className="tier">
            <div className="name">{platform.name}</div>
            <div className="who">{platform.who}</div>
            <ul>
              <li>
                <span className="ck">●</span>
                {platform.items[0]}
              </li>
              <li>
                <span className="ck">●</span>
                {platform.scopeLead}
                <a href="#instrumenty" style={{ color: "var(--action)" }}>
                  {platform.scopeLink}
                </a>
              </li>
              <li>
                <span className="ck">●</span>
                {platform.items[1]}
              </li>
            </ul>
            <div className="price">
              {platform.price[0]}
              <br />
              {platform.price[1]}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
