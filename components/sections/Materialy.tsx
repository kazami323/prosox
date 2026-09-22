import Reveal from "@/components/Reveal";

export default function Materialy() {
  return (
    <section className="sec" id="materialy">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Материалы</span>
          <h2 className="h2">
            Разборы и заметки
            <span className="thin">
              о сборе данных, рынках и работе с источниками.
            </span>
          </h2>
          <p className="lede">
            Место под статьи: практика сбора публичных данных, правовая
            сторона вопроса, разборы конкретных источников и то, как
            категорийные команды работают с цифрами.
          </p>
        </Reveal>
        <div className="g-3" style={{ marginTop: 0 }}>
          <Reveal as="article" className="card artcard">
            <span className="tag">Практика</span>
            <h3>Заголовок статьи</h3>
            <p className="ans">
              Два-три предложения о том, про что материал и кому он будет
              полезен.
            </p>
            <span className="slot">Место под статью</span>
          </Reveal>
          <Reveal as="article" className="card artcard">
            <span className="tag">Правовая сторона</span>
            <h3>Заголовок статьи</h3>
            <p className="ans">
              Два-три предложения о том, про что материал и кому он будет
              полезен.
            </p>
            <span className="slot">Место под статью</span>
          </Reveal>
          <Reveal as="article" className="card artcard">
            <span className="tag">Разбор источника</span>
            <h3>Заголовок статьи</h3>
            <p className="ans">
              Два-три предложения о том, про что материал и кому он будет
              полезен.
            </p>
            <span className="slot">Место под статью</span>
          </Reveal>
        </div>
        <Reveal className="actions">
          <a className="btn btn--wire" href="#materialy">
            Все материалы
          </a>
        </Reveal>
      </div>
    </section>
  );
}
