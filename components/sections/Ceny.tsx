import Reveal from "@/components/Reveal";

export default function Ceny() {
  return (
    <section className="sec sec--alt" id="ceny">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Как начинаем и сколько стоит</span>
          <h2 className="h2">
            Три способа начать
            <span className="thin">
              и фиксированная цифра до того, как вы на что-то соглашаетесь.
            </span>
          </h2>
          <p className="lede">
            Стоимость определяют три вещи: сколько источников, какая доля
            страниц требует полноценного браузера для отрисовки и как часто
            нужны данные. Мы называем одно число после того, как разберём
            вашу задачу: без почасовой оплаты и без доплат за то, что
            источник сломался.
          </p>
        </Reveal>

        <div className="tiers">
          <Reveal className="tier">
            <div className="name">Пилот</div>
            <div className="who">Сначала проверить данные</div>
            <ul>
              <li>
                <span className="ck">●</span>Один источник, один набор
                данных, ваши реальные артикулы или сегменты
              </li>
              <li>
                <span className="ck">●</span>Выгрузка-пример и
                зафиксированная спецификация полей
              </li>
              <li>
                <span className="ck">●</span>Отчёт о покрытии: что удалось
                получить, а что нет
              </li>
              <li>
                <span className="ck">●</span>Правовая позиция по источнику
                включена
              </li>
            </ul>
            <div className="price">
              Фиксированная сумма
              <br />
              Цену называем после разбора задачи
            </div>
          </Reveal>
          <Reveal className="tier tier--focus">
            <span className="badge">Чаще всего берут</span>
            <div className="name">Мониторинг</div>
            <div className="who">Основной формат работы</div>
            <ul>
              <li>
                <span className="ck">●</span>Сбор и поставка по расписанию —
                от раза в час до раза в месяц
              </li>
              <li>
                <span className="ck">●</span>Любое сочетание файла, API,
                базы данных и облака
              </li>
              <li>
                <span className="ck">●</span>Валидация каждой партии до
                того, как она к вам придёт
              </li>
              <li>
                <span className="ck">●</span>Починка парсеров при
                изменениях на источниках — включена
              </li>
              <li>
                <span className="ck">●</span>Named-контакт, сроки реакции
                закреплены в договоре
              </li>
            </ul>
            <div className="price">
              Ежемесячно — источники × объём × частота
              <br />
              Продлевается сам, без блокировки сверх срока уведомления
            </div>
          </Reveal>
          <Reveal className="tier">
            <div className="name">Платформа</div>
            <div className="who">Когда данным нужен интерфейс</div>
            <ul>
              <li>
                <span className="ck">●</span>MCP-сервер, микро-SaaS,
                подключение к BI и алерты
              </li>
              <li>
                <span className="ck">●</span>Состав работ —{" "}
                <a href="#instrumenty" style={{ color: "var(--action)" }}>
                  в разделе «Больше, чем выгрузка»
                </a>
              </li>
              <li>
                <span className="ck">●</span>Работает поверх действующего
                мониторинга
              </li>
            </ul>
            <div className="price">
              Проект с фиксированным объёмом
              <br />
              Считаем после обсуждения технической части
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
