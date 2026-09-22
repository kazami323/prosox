import Reveal from "@/components/Reveal";

export default function Cobi() {
  return (
    <section className="sec band" id="cobi">
      <div className="wrap g-band">
        <Reveal>
          <span className="kicker">Готовый продукт, а не проект под заказ</span>
          <h2 className="h2">
            Cobi AI
            <span className="thin">
              категорийный ассистент, который не перестаёт смотреть.
            </span>
          </h2>
          <p className="lede">
            Почти всё, что мы делаем, собирается под конкретную задачу. Cobi —
            исключение: законченный продукт для команд, которые продают на
            маркетплейсах. Он не заменяет категорийного менеджера, а снимает с
            него ту часть работы, которая состоит из обновления вкладок.
          </p>
          <ul className="feat">
            <li>
              <span className="n">01</span>
              <span>
                Алерты о движении цен в момент изменения, а не в завтрашнем
                отчёте
              </span>
            </li>
            <li>
              <span className="n">02</span>
              <span>
                Два индекса по каждому артикулу: ваша цена против прямых
                конкурентов и против категории
              </span>
            </li>
            <li>
              <span className="n">03</span>
              <span>Дельты день к дню, связки конкурентов, выгрузка в CSV</span>
            </li>
            <li>
              <span className="n">04</span>
              <span>
                Чат-ассистент отвечает на вопрос по рынку и говорит, что с
                этим делать
              </span>
            </li>
            <li>
              <span className="n">05</span>
              <span>
                Один дашборд вместо переключения между кабинетами площадок
              </span>
            </li>
          </ul>
          <div className="actions">
            <a
              className="btn btn--band"
              href="#zayavka"
              data-req="Демо Cobi AI на своих брендах"
            >
              Демо на ваших брендах
            </a>
            <a
              className="btn btn--bandwire"
              href="#zayavka"
              data-req="Бесплатный пилот Cobi AI"
            >
              Бесплатный пилот
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="bpanel">
            <div className="bp-head">Покрытие площадок</div>
            <div className="bp-row">
              Uzum<span className="state state--live">Работает</span>
            </div>
            <div className="bp-row">
              Wildberries<span className="state state--live">Работает</span>
            </div>
            <div className="bp-row">
              Ozon<span className="state state--live">Работает</span>
            </div>
            <div className="bp-row">
              Яндекс Маркет<span className="state state--live">Работает</span>
            </div>
          </div>
          <div className="bpanel">
            <div className="bp-head">Как начинается работа с Cobi</div>
            <div className="bp-row">Демо на ваших брендах</div>
            <div className="bp-row">Бесплатный пилот, полный доступ</div>
            <div className="bp-row">Настройка и запуск</div>
          </div>
          <p
            style={{
              marginTop: 18,
              fontSize: 13.5,
              color: "var(--band-text-3)",
              lineHeight: 1.65,
            }}
          >
            Чат ассистента работает на русском языке. Если нужна площадка,
            которой нет в списке — напишите, посмотрим, что можно сделать.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
