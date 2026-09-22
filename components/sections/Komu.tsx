import Reveal from "@/components/Reveal";

export default function Komu() {
  return (
    <section className="sec sec--alt" id="komu">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Кому это нужно</span>
          <h2 className="h2">Если что-то из этого у вас на столе<span className="thin">вы нашли нужную страницу.</span></h2>
          <p className="lede">Мы не продаём платформу, которую надо осваивать. Мы поставляем конкретный набор данных, который закрывает разрыв между тем, что вашей команде нужно знать, и тем, что она реально видит.</p>
        </Reveal>

        <div className="g-2">
          <Reveal as="article" className="card">
            <span className="tag">E-commerce</span>
            <p className="said">«Об акции конкурента мы узнаём через три дня после её старта»</p>
            <p className="ans">Цены и остатки конкурентов проверяем хоть каждый час, с <b>алертом в момент, когда кто-то уходит ниже вашей минимальной цены</b> — а не отчётом в конце недели. Сигнал приходит туда, где сидит команда: в Telegram, на почту, в вашу таблицу.</p>
          </Reveal>
          <Reveal as="article" className="card">
            <span className="tag">Ритейл и бренды</span>
            <p className="said">«Мы не знаем, что и почём реально выкладывают наши дилеры»</p>
            <p className="ans">Мониторинг на уровне карточек по всем площадкам: ассортимент, наличие, новинки, позиция в выдаче. <b>Нарушение РРЦ становится строкой в файле</b>, а не слухом от менеджера. Видно и то, где в категории пусто.</p>
          </Reveal>
        </div>

        <div className="g-3">
          <Reveal as="article" className="card">
            <span className="tag">Продажи</span>
            <p className="said said--sm">«В нашей CRM контакты двухлетней давности»</p>
            <p className="ans">Данные о компаниях из открытых реестров и публичных источников: сегментация, обогащение, актуализация базы. Отдел продаж работает по живому списку.</p>
          </Reveal>
          <Reveal as="article" className="card">
            <span className="tag">Стратегия и финансы</span>
            <p className="said said--sm">«Нужна защищаемая цифра по рынку, где нас пока нет»</p>
            <p className="ans">Регулярные срезы отрасли: динамика цен, глубина ассортимента, кто входит и кто уходит. Одна методика в каждом периоде — поэтому тренду можно верить.</p>
          </Reveal>
          <Reveal as="article" className="card">
            <span className="tag">AI и ML</span>
            <p className="said said--sm">«Нужны данные для обучения, которые подпишет наш юрист»</p>
            <p className="ans">Очищенные структурированные датасеты из публичных источников, с документированным происхождением и юрисдикцией каждого источника. Письменная правовая позиция — по проекту.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
