import Image from "next/image";
// Статический импорт, а не строковый путь: так Next сам подставляет basePath
// (сайт отдаётся из подкаталога на GitHub Pages) и берёт размеры из файла.
import prosoxMark from "@/public/prosox-mark.webp";
import Reveal from "@/components/Reveal";

export default function Intro() {
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
            src={prosoxMark}
            alt="Знак PROSOX"
            priority
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
