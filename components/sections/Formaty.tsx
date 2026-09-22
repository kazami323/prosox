"use client";

import { useState, type KeyboardEvent } from "react";
import Reveal from "@/components/Reveal";

const TABS = [
  {
    id: "t1",
    panelId: "p1",
    label: "CSV / Excel",
    sub: "Аналитикам и категорийным менеджерам",
  },
  {
    id: "t2",
    panelId: "p2",
    label: "JSON / API",
    sub: "Разработчикам — встроить в свой сервис",
  },
  {
    id: "t3",
    panelId: "p3",
    label: "Прямо в базу данных",
    sub: "Дата-командам — PostgreSQL, ClickHouse",
  },
  {
    id: "t4",
    panelId: "p4",
    label: "BI, облако и алерты",
    sub: "Руководителям — нужен ответ, а не файл",
  },
];

const FORMAT_CSV_HTML = `<span class="c">источник,артикул,название,цена,валюта,дельта_24ч,остаток,проверено</span>
Маркетплейс А,SKU-40118,Модель X 500 мл,14900,RUB,0.000,312,2026-09-09T06:00:04Z
Маркетплейс Б,SKU-40118,Модель X 500 мл,12150,RUB,-0.185,47,2026-09-09T06:00:06Z
Ритейлер В,SKU-40118,Модель X 500 мл,15290,RUB,0.019,128,2026-09-09T06:00:09Z`;

const FORMAT_JSON_HTML = `{
  <span class="k">"sku"</span>: "SKU-40118",
  <span class="k">"checked_at"</span>: "2026-09-09T06:00:06Z",
  <span class="k">"offers"</span>: [
    { <span class="k">"source"</span>: "Маркетплейс Б", <span class="k">"price"</span>: 12150,
      <span class="k">"currency"</span>: "RUB", <span class="k">"delta_24h"</span>: -0.185,
      <span class="k">"in_stock"</span>: 47, <span class="k">"url"</span>: "https://…" }
  ]
}`;

const FORMAT_SQL_HTML = `<span class="c">-- пишем мы, вы просто делаете запрос. без промежуточного экспорта.</span>
<span class="k">INSERT INTO</span> prices_daily
  (source, sku, price, currency, delta_24h, in_stock, checked_at)
<span class="k">VALUES</span>
  ('Маркетплейс Б','SKU-40118',12150,'RUB',-0.185,47,'2026-09-09 06:00:06');`;

const FORMAT_BI_HTML = `<span class="c">поставка:</span>
  <span class="k">облако</span>:   s3://ваш-бакет/prices/dt=2026-09-09/
  <span class="k">bi</span>:       power_bi, обновление 06:15
  <span class="k">алерты</span>:
    - <span class="k">правило</span>: цена_конкурента &lt; ваша_минимальная_цена
      <span class="k">канал</span>:   telegram, #ceny-alerts
    - <span class="k">правило</span>: недельная_сводка
      <span class="k">канал</span>:   почта, руководителю категории`;

export default function Formaty() {
  const [active, setActive] = useState("t1");

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let dir = 0;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") dir = 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") dir = -1;
    if (!dir) return;
    e.preventDefault();
    const next = TABS[(index + dir + TABS.length) % TABS.length];
    setActive(next.id);
    document.getElementById(next.id)?.focus();
  }

  return (
    <section className="sec" id="formaty">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Что вы получите</span>
          <h2 className="h2">
            Одна и та же запись
            <span className="thin">
              в том виде, в котором работает ваша команда.
            </span>
          </h2>
          <p className="lede">
            Структуру полей согласуем до начала сбора, поэтому на приёмке
            ничего не надо переделывать. Канал выбирайте по тому, кто будет
            этим пользоваться: аналитик, разработчик, дата-команда или
            руководитель.
          </p>
        </Reveal>

        <div className="fmt">
          <div className="tablist" role="tablist" aria-label="Форматы поставки">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                className="tab"
                role="tab"
                id={tab.id}
                aria-controls={tab.panelId}
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {tab.label}
                <span className="sub">{tab.sub}</span>
              </button>
            ))}
          </div>

          <div>
            <div
              className="panel"
              id="p1"
              role="tabpanel"
              aria-labelledby="t1"
              hidden={active !== "t1"}
            >
              <div className="p-head">
                ceny_konkurentov.csv — UTF-8, на почту или в SFTP
              </div>
              <pre dangerouslySetInnerHTML={{ __html: FORMAT_CSV_HTML }} />
              <div className="p-note">
                Открывается сразу в Excel или Google Таблицах. Отдельный файл
                на каждую выгрузку или один накопительный с историей — как вам
                удобнее.
              </div>
            </div>

            <div
              className="panel"
              id="p2"
              role="tabpanel"
              aria-labelledby="t2"
              hidden={active !== "t2"}
            >
              <div className="p-head">
                GET /v1/prices?sku=SKU-40118 — авторизация по токену,
                постранично
              </div>
              <pre dangerouslySetInnerHTML={{ __html: FORMAT_JSON_HTML }} />
              <div className="p-note">
                Забираете по своему расписанию — или мы сами отправляем на ваш
                webhook, как только партия прошла валидацию.
              </div>
            </div>

            <div
              className="panel"
              id="p3"
              role="tabpanel"
              aria-labelledby="t3"
              hidden={active !== "t3"}
            >
              <div className="p-head">
                Запись прямо в ваш инстанс — ваша схема, ваши названия полей
              </div>
              <pre dangerouslySetInnerHTML={{ __html: FORMAT_SQL_HTML }} />
              <div className="p-note">
                PostgreSQL, ClickHouse, MySQL, BigQuery. Подстраиваемся под
                вашу структуру таблиц, а не просим подстроиться под нашу.
              </div>
            </div>

            <div
              className="panel"
              id="p4"
              role="tabpanel"
              aria-labelledby="t4"
              hidden={active !== "t4"}
            >
              <div className="p-head">
                S3 / Google Таблицы / Power BI / Looker — плюс маршруты
                алертов
              </div>
              <pre dangerouslySetInnerHTML={{ __html: FORMAT_BI_HTML }} />
              <div className="p-note">
                Данные приходят туда, где решения уже принимаются. Никому не
                нужно помнить, что надо открыть файл.
              </div>
            </div>
          </div>
        </div>

        <Reveal className="tbl" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
          <div className="tbl-cap">
            Спецификация полей — согласуется и фиксируется до начала сбора
          </div>
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>Поле</th>
                  <th>Тип</th>
                  <th>Что означает</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">источник</td>
                  <td className="mono">строка</td>
                  <td>С какого сайта или маркетплейса прочитана строка</td>
                </tr>
                <tr>
                  <td className="mono">артикул</td>
                  <td className="mono">строка</td>
                  <td>
                    Ваш идентификатор, сопоставленный с карточкой источника
                    при настройке
                  </td>
                </tr>
                <tr>
                  <td className="mono">цена</td>
                  <td className="mono">число</td>
                  <td>
                    Цена, которую видит покупатель в указанном вами регионе
                  </td>
                </tr>
                <tr>
                  <td className="mono">дельта_24ч</td>
                  <td className="mono">число</td>
                  <td>
                    Изменение к предыдущей выгрузке, считаем на нашей стороне
                  </td>
                </tr>
                <tr>
                  <td className="mono">остаток</td>
                  <td className="mono">целое</td>
                  <td>
                    Наличие в том виде, в каком его публикует источник
                  </td>
                </tr>
                <tr>
                  <td className="mono">проверено</td>
                  <td className="mono">дата и время</td>
                  <td>
                    Когда страница была реально прочитана, а не когда
                    отправлен файл
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="actions">
          <a className="btn btn--fill" href="#zayavka" data-req="Пример выгрузки">
            Запросить пример выгрузки
          </a>
          <a
            className="btn btn--wire"
            href="#zayavka"
            data-req="Полный каталог полей"
          >
            Прислать полный каталог полей
          </a>
        </Reveal>
      </div>
    </section>
  );
}
