import Reveal from "@/components/Reveal";
import Metrics from "@/components/Metrics";
import type { Dictionary } from "@/i18n";

export default function Vid({ dict }: { dict: Dictionary["vid"] }) {
  return (
    <section className="sec sec--alt" id="vid">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">{dict.h2}<span className="thin">{dict.thin}</span></h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>

        <div className="g-3" style={{ marginTop: 0 }}>
          <Reveal className="mock">
            <div className="mock-top">{dict.sheet.top}</div>
            <div className="mock-body">
              <div className="scroll-x">
                <table className="xl">
                  <thead><tr><th>{dict.sheet.colSource}</th><th>{dict.sheet.colSku}</th><th>{dict.sheet.colPrice}</th><th>{dict.sheet.colDelta}</th></tr></thead>
                  <tbody>
                    <tr><td>{dict.sheet.srcA}</td><td>SKU-40118</td><td>14 900</td><td>0,0%</td></tr>
                    <tr><td>{dict.sheet.srcB}</td><td>SKU-40118</td><td>12 150</td><td>−18,5%</td></tr>
                    <tr><td>{dict.sheet.srcC}</td><td>SKU-40118</td><td>15 290</td><td>+1,9%</td></tr>
                    <tr><td>{dict.sheet.srcD}</td><td>SKU-40119</td><td>9 420</td><td>−3,1%</td></tr>
                    <tr><td>{dict.sheet.srcA}</td><td>SKU-40120</td><td>21 300</td><td>0,0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mock-cap">{dict.sheet.cap}</div>
          </Reveal>

          <Reveal className="mock">
            <div className="mock-top">{dict.alert.top}</div>
            <div className="mock-body">
              <div className="tg">
                <div className="who">PROSOX — {dict.alert.who}</div>
                <div><b>{dict.alert.title}</b><br />{dict.sheet.srcB}, SKU-40118<br />{dict.alert.price}<br />{dict.alert.stock}</div>
                <div className="time">06:00:12</div>
              </div>
            </div>
            <div className="mock-cap">{dict.alert.cap}</div>
          </Reveal>

          <Reveal className="mock">
            <div className="mock-top">{dict.dash.top}</div>
            <Metrics className="mock-body">
              <div className="kpis">
                <div className="kpi"><div className="lab">{dict.dash.kpiBelow}</div><div className="val bad" data-count>18</div></div>
                <div className="kpi"><div className="lab">{dict.dash.kpiIndex}</div><div className="val good" data-count>104%</div></div>
                <div className="kpi"><div className="lab">{dict.dash.kpiSku}</div><div className="val" data-count>1 240</div></div>
                <div className="kpi"><div className="lab">{dict.dash.kpiOut}</div><div className="val" data-count>37</div></div>
              </div>
              <div className="spark">
                <div className="lab">{dict.dash.spark}</div>
                <svg viewBox="0 0 240 46" width="100%" height="46" role="img" aria-label={dict.dash.chartLabel}>
                  <polyline data-draw points="2,30 20,28 38,31 56,26 74,27 92,22 110,24 128,19 146,21 164,16 182,20 200,14 218,17 236,10"
                    fill="none" stroke="#0B7285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="236" cy="10" r="3.5" fill="#0B7285"/>
                </svg>
              </div>
            </Metrics>
            <div className="mock-cap">{dict.dash.cap}</div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
