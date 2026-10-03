import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
        </Reveal>
        <Reveal>
          {dict.items.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="sign">+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
