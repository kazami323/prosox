import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/i18n";

export default function Instrumenty({ dict }: { dict: Dictionary["instrumenty"] }) {
  return (
    <section className="sec sec--alt" id="instrumenty">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">{dict.h2}
            <span className="thin">{dict.thin}</span></h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>
        <div className="g-3" style={{ marginTop: 0 }}>
          {dict.cards.map((card) => (
            <Reveal as="article" className="card" key={card.tag}>
              <span className="tag">{card.tag}</span>
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{card.title}</h3>
              <p className="ans">{card.ans}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
