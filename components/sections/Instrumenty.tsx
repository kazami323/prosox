import Reveal from "@/components/Reveal";

export default function Instrumenty() {
  return (
    <section className="sec sec--alt" id="instrumenty">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">Больше, чем выгрузка</span>
          <h2 className="h2">Когда нужен рабочий инструмент,<span className="thin">а не ещё один файл, который надо открыть.</span></h2>
          <p className="lede">Небольшие продукты, которые живут рядом с вашим процессом, а не добавляют новый. Собираются на том же потоке данных, отдельным проектом с фиксированным объёмом.</p>
        </Reveal>
        <div className="g-3" style={{ marginTop: 0 }}>
          <Reveal as="article" className="card">
            <span className="tag">Интеграция</span>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>MCP-сервер для вашего ИИ-агента</h3>
            <p className="ans">Свежие данные идут напрямую в Claude, GPT или внутреннего агента компании. Сотрудник задаёт вопрос обычными словами и получает ответ на данных сегодняшнего утра, а не на том, что было в обучающей выборке модели.</p>
          </Reveal>
          <Reveal as="article" className="card">
            <span className="tag">Продукт</span>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>Микро-SaaS под одну задачу</h3>
            <p className="ans">Дашборд цен, монитор нарушений РРЦ, трекер ассортимента. Только те экраны, которые ваша команда действительно будет открывать, с вашими доступами и вашей логикой. Ничего лишнего, за что надо платить и что надо настраивать.</p>
          </Reveal>
          <Reveal as="article" className="card">
            <span className="tag">Настройка</span>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>Подключение к BI и алерты</h3>
            <p className="ans">Поток данных подключаем к тем инструментам аналитики, которыми вы уже пользуетесь, и настраиваем правила уведомлений: сигнал о демпинге в Telegram за минуты, недельная сводка на почту руководителю.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
