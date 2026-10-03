import Reveal from "@/components/Reveal";
import { rich } from "@/i18n/rich";
import type { Dictionary } from "@/i18n";

export default function Komu({ dict }: { dict: Dictionary["komu"] }) {
  return (
    <section className="sec sec--alt" id="komu">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="g-2">
          {dict.pairCards.map((card) => (
            <Reveal as="article" className="card" key={card.tag}>
              <span className="tag">{card.tag}</span>
              <p className="said">{card.said}</p>
              <p className="ans">{rich(card.ans)}</p>
            </Reveal>
          ))}
        </div>

        <div className="g-3">
          {dict.tripleCards.map((card) => (
            <Reveal as="article" className="card" key={card.tag}>
              <span className="tag">{card.tag}</span>
              <p className="said said--sm">{card.said}</p>
              <p className="ans">{rich(card.ans)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
