import Image from "next/image";
import Reveal from "@/components/Reveal";

export function Intro() {
  return (
    <section className="sec intro">
      <div className="wrap g-intro">
        <Reveal>
          <div className="video video--hero">
            <div>
              <div className="play" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5 3v10l8-5z" />
                </svg>
              </div>
              <h4>От ссылки на сайт до готового файла</h4>
              <p>
                Запись экрана: страница источника → разметка полей → проверенная
                выгрузка → поставка по расписанию.
              </p>
              <span className="slot">Место под ролик — видео нужно записать</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="intro-side">
          <Image
            className="bigmark"
            src="/prosox-mark.webp"
            alt="Знак PROSOX"
            width={380}
            height={380}
          />
          <p className="claim">Рынок видно каждый день</p>
          <p className="claim-sub">
            Публичные веб-данные для бизнеса — собранные, проверенные и
            доставленные туда, где работает ваша команда.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="sec hero">
      <div className="wrap">
        <div className="g-hero">
          <div>
            <span className="kicker">Веб-данные для бизнеса</span>
            <h1>
              Публичные данные вашего рынка
              <span className="thin">туда, где вы уже работаете.</span>
            </h1>
            <p className="hero-sub">
              Вы называете источники, поля и периодичность. Сбор, очистку и
              проверку берём на себя.
            </p>
            <div className="actions">
              <a
                className="btn btn--fill"
                href="#zayavka"
                data-req="Пример выгрузки на своих источниках"
              >
                Пример на своих источниках
              </a>
              <a className="btn btn--wire" href="#kak">
                Как работает
              </a>
            </div>
            <p className="hero-note">
              Фиксированная оценка до начала работ
              <br />
              Пример выгрузки собираем на ваших источниках
            </p>
          </div>

          <Reveal>
            <div className="dcard">
              <div className="dhead">
                <span className="fn">ceny_konkurentov.csv</span>
                <span className="pill">
                  <span className="led"></span>Доставлено 06:00
                </span>
                <span className="rows">12 480 строк</span>
              </div>
              <div className="hint">← прокрутите таблицу →</div>
              <div className="scroll-x">
                <table className="dt">
                  <thead>
                    <tr>
                      <th>Источник</th>
                      <th>Артикул</th>
                      <th className="num">Цена</th>
                      <th className="num">Δ 24 ч</th>
                      <th className="num">Остаток</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Маркетплейс А</td>
                      <td>SKU-40118</td>
                      <td className="num">14 900</td>
                      <td className="num">
                        <span className="fl">0,0%</span>
                      </td>
                      <td className="num">312</td>
                    </tr>
                    <tr className="flag">
                      <td>Маркетплейс Б</td>
                      <td>SKU-40118</td>
                      <td className="num">12 150</td>
                      <td className="num">
                        <span className="dn">−18,5%</span>
                      </td>
                      <td className="num">47</td>
                    </tr>
                    <tr>
                      <td>Ритейлер В</td>
                      <td>SKU-40118</td>
                      <td className="num">15 290</td>
                      <td className="num">
                        <span className="up">+1,9%</span>
                      </td>
                      <td className="num">128</td>
                    </tr>
                    <tr>
                      <td>Маркетплейс А</td>
                      <td>SKU-40119</td>
                      <td className="num">8 900</td>
                      <td className="num">
                        <span className="fl">0,0%</span>
                      </td>
                      <td className="num">0</td>
                    </tr>
                    <tr>
                      <td>Каталог Г</td>
                      <td>SKU-40119</td>
                      <td className="num">9 420</td>
                      <td className="num">
                        <span className="dn">−3,1%</span>
                      </td>
                      <td className="num">76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="dfoot">
                Строка 2 пробила вашу минимальную цену — алерт ушёл в Telegram в
                06:00:12
              </div>
            </div>
            <p className="dcap">
              Пример структуры. Состав полей и список источников согласуем до
              начала сбора.
            </p>
          </Reveal>
        </div>

        <div className="trust">
          <div className="tcell">
            <div className="k">Только публичное</div>
            <div className="v">
              Без входа в аккаунты, платных и закрытых разделов. Это принцип, а
              не исключение.
            </div>
          </div>
          <div className="tcell">
            <div className="k">Юрпроверка до старта</div>
            <div className="v">
              Каждый проект проходит проверку кибер-юридического бюро до
              первого запроса к сайту.
            </div>
          </div>
          <div className="tcell">
            <div className="k">Своя инфраструктура</div>
            <div className="v">
              Строим и обслуживаем сами, работает круглосуточно. Не перепродажа
              чужих мощностей.
            </div>
          </div>
          <div className="tcell">
            <div className="k">Дананг, Вьетнам</div>
            <div className="v">
              Зарегистрированная компания, 11–50 специалистов. Договор и NDA
              подписываем как юрлицо.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
