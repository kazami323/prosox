import Reveal from "@/components/Reveal";
import Metrics from "@/components/Metrics";

export default function Vid() {
  return (
    <section className="sec sec--alt" id="vid">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Как это выглядит в работе</span>
          <h2 className="h2">Три места, где данные оказываются<span className="thin">и где их видит ваша команда.</span></h2>
          <p className="lede">Ниже — как выглядит результат после запуска. Не абстрактная схема, а то, что реально открывает категорийный менеджер, руководитель и аналитик.</p>
        </Reveal>

        <div className="g-3" style={{ marginTop: 0 }}>
          <Reveal className="mock">
            <div className="mock-top">Таблица — Excel или Google Sheets</div>
            <div className="mock-body">
              <div className="scroll-x">
                <table className="xl">
                  <thead><tr><th>Источник</th><th>Артикул</th><th>Цена</th><th>Δ 24ч</th></tr></thead>
                  <tbody>
                    <tr><td>Маркетплейс А</td><td>SKU-40118</td><td>14 900</td><td>0,0%</td></tr>
                    <tr><td>Маркетплейс Б</td><td>SKU-40118</td><td>12 150</td><td>−18,5%</td></tr>
                    <tr><td>Ритейлер В</td><td>SKU-40118</td><td>15 290</td><td>+1,9%</td></tr>
                    <tr><td>Каталог Г</td><td>SKU-40119</td><td>9 420</td><td>−3,1%</td></tr>
                    <tr><td>Маркетплейс А</td><td>SKU-40120</td><td>21 300</td><td>0,0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mock-cap">Файл приходит на почту или в общую папку в 06:00. Открывается и работает сразу — сводные, фильтры, ваши формулы.</div>
          </Reveal>

          <Reveal className="mock">
            <div className="mock-top">Алерт — Telegram или почта</div>
            <div className="mock-body">
              <div className="tg">
                <div className="who">PROSOX — Мониторинг цен</div>
                <div><b>Цена ушла ниже вашего минимума</b><br />Маркетплейс Б, SKU-40118<br />12 150 ₽ вместо 14 900 ₽ (−18,5%)<br />Остаток у конкурента: 47 шт.</div>
                <div className="time">06:00:12</div>
              </div>
            </div>
            <div className="mock-cap">Правила настраиваете вы: пробитие минимальной цены, появление нового продавца, уход товара из наличия.</div>
          </Reveal>

          <Reveal className="mock">
            <div className="mock-top">Дашборд — ваш BI или наш микро-SaaS</div>
            <Metrics className="mock-body">
              <div className="kpis">
                <div className="kpi"><div className="lab">Ниже нашей цены</div><div className="val bad" data-count>18</div></div>
                <div className="kpi"><div className="lab">Индекс к категории</div><div className="val good" data-count>104%</div></div>
                <div className="kpi"><div className="lab">SKU под контролем</div><div className="val" data-count>1 240</div></div>
                <div className="kpi"><div className="lab">Нет в наличии</div><div className="val" data-count>37</div></div>
              </div>
              <div className="spark">
                <div className="lab">Средняя цена по категории, 14 дней</div>
                <svg viewBox="0 0 240 46" width="100%" height="46" role="img" aria-label="График средней цены за 14 дней">
                  <polyline data-draw points="2,30 20,28 38,31 56,26 74,27 92,22 110,24 128,19 146,21 164,16 182,20 200,14 218,17 236,10"
                    fill="none" stroke="#0B7285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="236" cy="10" r="3.5" fill="#0B7285"/>
                </svg>
              </div>
            </Metrics>
            <div className="mock-cap">Подключаем поток к вашему BI или собираем отдельное лёгкое приложение под одну задачу.</div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
