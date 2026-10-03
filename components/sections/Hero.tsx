import Reveal from "@/components/Reveal";
import HeroDelivery from "@/components/HeroDelivery";
import type { Dictionary } from "@/i18n";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="sec hero">
      <div className="wrap">
        <div className="g-hero">
          <div>
            <span className="kicker">{dict.kicker}</span>
            <h1>
              {dict.h1}
              <span className="thin">{dict.thin}</span>
            </h1>
            <p className="hero-sub">
              {dict.sub}
            </p>
            <div className="actions">
              <a
                className="btn btn--fill"
                href="#zayavka"
                data-req={dict.ctaReq}
              >
                {dict.cta}
              </a>
              <a className="btn btn--wire" href="#kak">
                {dict.ctaHow}
              </a>
            </div>
            <p className="hero-note">
              {dict.note1}
              <br />
              {dict.note2}
            </p>
          </div>

          <Reveal>
            <HeroDelivery>
            <div className="dcard" data-card>
              <div className="dhead">
                <span className="fn">ceny_konkurentov.csv</span>
                <span className="pill" data-pill>
                  <span className="led"></span>{dict.delivered}
                </span>
                <span className="rows">{dict.rows}</span>
              </div>
              <div className="hint">{dict.hint}</div>
              <div className="scroll-x">
                <table className="dt">
                  <thead>
                    <tr>
                      <th>{dict.thSource}</th>
                      <th>{dict.thSku}</th>
                      <th className="num">{dict.thPrice}</th>
                      <th className="num">{dict.thDelta}</th>
                      <th className="num">{dict.thStock}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-row>
                      <td>{dict.srcA}</td>
                      <td>SKU-40118</td>
                      <td className="num" data-count>14 900</td>
                      <td className="num">
                        <span className="fl" data-delta>0,0%</span>
                      </td>
                      <td className="num" data-count>312</td>
                    </tr>
                    <tr className="flag" data-row>
                      <td>{dict.srcB}</td>
                      <td>SKU-40118</td>
                      <td className="num" data-count>12 150</td>
                      <td className="num">
                        <span className="dn" data-delta>−18,5%</span>
                      </td>
                      <td className="num" data-count>47</td>
                    </tr>
                    <tr data-row>
                      <td>{dict.srcC}</td>
                      <td>SKU-40118</td>
                      <td className="num" data-count>15 290</td>
                      <td className="num">
                        <span className="up" data-delta>+1,9%</span>
                      </td>
                      <td className="num" data-count>128</td>
                    </tr>
                    <tr data-row>
                      <td>{dict.srcA}</td>
                      <td>SKU-40119</td>
                      <td className="num" data-count>8 900</td>
                      <td className="num">
                        <span className="fl" data-delta>0,0%</span>
                      </td>
                      <td className="num">0</td>
                    </tr>
                    <tr data-row>
                      <td>{dict.srcD}</td>
                      <td>SKU-40119</td>
                      <td className="num" data-count>9 420</td>
                      <td className="num">
                        <span className="dn" data-delta>−3,1%</span>
                      </td>
                      <td className="num" data-count>76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="dfoot" data-foot>
                {dict.foot}
              </div>
            </div>
            </HeroDelivery>
            <p className="dcap">
              {dict.cap}
            </p>
          </Reveal>
        </div>

        <div className="trust">
          {dict.trust.map((t) => (
            <div className="tcell" key={t.k}>
              <div className="k">{t.k}</div>
              <div className="v">{t.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
