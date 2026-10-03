import { section } from "../section";

export const kak = section({
  ru: {
    kicker: "Как это работает",
    h2: "Одно письмо с вашей стороны.",
    thin: "Вся техническая часть — на нас.",
    lede: "Из шести шагов ваши только три, и ни один не занимает больше получаса. Всё остальное — оценка выполнимости, юридическая проверка, парсеры, очистка, мониторинг, починка — происходит у нас.",
    steps: [
      {
        title: "Называете источники и поля",
        by: "Вы",
        text: "Напишите нам: какие сайты, какие данные, как часто и что вы будете с этим делать. Достаточно прислать ссылки, техзадание не нужно.",
        out: ["список источников", "список полей", "периодичность"],
      },
      {
        title: "Юридическая проверка и фиксированная цена",
        by: "PROSOX",
        text: "Юристы проверяют юрисдикцию источников и вашей компании. Параллельно считаем техническую стоимость: статические страницы дёшевы, страницы с JavaScript-отрисовкой — нет. Вы получаете одно число, а не вилку.",
        out: ["заключение: можно / нельзя", "фиксированная цена", "дата старта"],
      },
      {
        title: "Пример собран на ваших источниках",
        by: "PROSOX",
        text: "Не демо-датасет из чужого проекта. Мы делаем парсеры под ваши реальные источники и присылаем настоящую выгрузку в согласованной структуре полей.",
        out: ["файл-пример", "спецификация полей", "отчёт о покрытии"],
      },
      {
        title: "Сверяете пример с реальностью",
        by: "Вы",
        text: "Открываете рядом с источником и проверяете. Если поле не то, не хватает или неудобно устроено — это самый дешёвый момент, чтобы поменять.",
        out: ["согласование", "или правки"],
      },
      {
        title: "Запускается регулярная поставка",
        by: "PROSOX",
        text: "Сбор по расписанию в выбранный вами канал: файл, API, запись прямо в вашу базу, выгрузка в облако. Каждая партия проходит валидацию до отправки.",
        out: ["поставка по расписанию", "журнал валидации"],
      },
      {
        title: "Мы следим за источниками, вы — за рынком",
        by: "PROSOX",
        text: "Сайты меняют вёрстку, поля переезжают, страницы начинают отрисовываться в браузере. Мы отслеживаем поломки и чиним парсеры в рамках той же услуги — и предупреждаем, когда изменение на источнике влияет на смысл ваших цифр.",
        out: ["мониторинг доступности", "починка парсеров", "уведомления об изменениях"],
      },
    ],
    table: {
      caption: "Сравнение со своей командой",
      own: "Своя команда",
      us: "Работа с нами",
      rows: [
        {
          label: "Путь до первых данных",
          own: "Найм, потом инфраструктура, потом первый парсер",
          us: "Сначала пример на ваших источниках, затем регулярная поставка",
        },
        {
          label: "Постоянные расходы",
          own: "Зарплаты, серверы, прокси-инфраструктура, дежурства",
          us: "Одна строка в месяц, зафиксированная при подписании",
        },
        {
          label: "Когда источник меняет вёрстку",
          own: "Задача, конкурирующая с вашей продуктовой дорожной картой",
          us: "Наша проблема, внутри той же суммы",
        },
        {
          label: "Правовая позиция по сбору",
          own: "Ваши юристы, по каждому источнику, с нуля",
          us: "Проверено до старта, письменно — по запросу",
        },
        {
          label: "Когда уходит человек, который это построил",
          own: "Экспертиза уходит вместе с ним",
          us: "На договоре компания, а не физическое лицо",
        },
      ],
    },
  },
  en: {
    kicker: "How it works",
    h2: "One email from your side.",
    thin: "The whole technical side is ours.",
    lede: "Of the six steps, only three are yours, and none takes more than half an hour. Everything else — feasibility assessment, legal review, scrapers, cleaning, monitoring, repairs — happens on our side.",
    steps: [
      {
        title: "You name the sources and fields",
        by: "You",
        text: "Write to us: which sites, what data, how often, and what you will do with it. Links are enough — no technical specification needed.",
        out: ["list of sources", "list of fields", "update frequency"],
      },
      {
        title: "Legal review and a fixed quote",
        by: "PROSOX",
        text: "Our lawyers review the jurisdiction of the sources and of your company. In parallel we work out the technical cost: static pages are cheap, pages rendered with JavaScript are not. You get one figure, not a range.",
        out: ["verdict: feasible / not feasible", "fixed quote", "start date"],
      },
      {
        title: "A sample built on your sources",
        by: "PROSOX",
        text: "Not a demo dataset from someone else's project. We build scrapers for your actual sources and send you a real export in an agreed field structure.",
        out: ["sample file", "field specification", "coverage report"],
      },
      {
        title: "You check the sample against reality",
        by: "You",
        text: "Open it next to the source and compare. If a field is wrong, missing or awkwardly structured, this is the cheapest moment to change it.",
        out: ["sign-off", "or revisions"],
      },
      {
        title: "Regular delivery starts",
        by: "PROSOX",
        text: "Collection on a schedule into the channel you choose: a file, an API, writing straight into your database, a cloud export. Every batch is validated before it is sent.",
        out: ["scheduled delivery", "validation log"],
      },
      {
        title: "We watch the sources, you watch the market",
        by: "PROSOX",
        text: "Sites change their layout, fields move, pages start rendering in the browser. We track breakages and fix the scrapers within the same service — and we warn you when a change at the source affects what your numbers mean.",
        out: ["availability monitoring", "scraper repairs", "change notifications"],
      },
    ],
    table: {
      caption: "Compared with an in-house team",
      own: "In-house team",
      us: "Working with us",
      rows: [
        {
          label: "Path to the first data",
          own: "Hiring, then infrastructure, then the first scraper",
          us: "A sample on your sources first, then regular delivery",
        },
        {
          label: "Ongoing costs",
          own: "Salaries, servers, proxy infrastructure, on-call duty",
          us: "One line per month, fixed at signing",
        },
        {
          label: "When a source changes its layout",
          own: "A task competing with your product roadmap",
          us: "Our problem, within the same fee",
        },
        {
          label: "Legal position on collection",
          own: "Your lawyers, source by source, from scratch",
          us: "Reviewed before the start, in writing on request",
        },
        {
          label: "When the person who built it leaves",
          own: "The expertise leaves with them",
          us: "The contract is with a company, not an individual",
        },
      ],
    },
  },
  vi: {
    kicker: "Cách chúng tôi làm việc",
    h2: "Một email từ phía bạn.",
    thin: "Toàn bộ phần kỹ thuật là việc của chúng tôi.",
    lede: "Trong sáu bước, chỉ ba bước thuộc về bạn, và không bước nào mất quá nửa giờ. Mọi việc còn lại — đánh giá khả thi, rà soát pháp lý, trình thu thập, làm sạch dữ liệu, giám sát, sửa lỗi — đều do chúng tôi đảm nhận.",
    steps: [
      {
        title: "Bạn nêu nguồn và các trường dữ liệu",
        by: "Bạn",
        text: "Hãy viết cho chúng tôi: trang nào, dữ liệu gì, tần suất bao lâu và bạn sẽ dùng chúng để làm gì. Chỉ cần gửi đường dẫn, không cần đặc tả kỹ thuật.",
        out: ["danh sách nguồn", "danh sách trường dữ liệu", "tần suất cập nhật"],
      },
      {
        title: "Rà soát pháp lý và báo giá cố định",
        by: "PROSOX",
        text: "Luật sư của chúng tôi kiểm tra thẩm quyền pháp lý của các nguồn và của công ty bạn. Song song, chúng tôi tính chi phí kỹ thuật: trang tĩnh rẻ, còn trang hiển thị bằng JavaScript thì không. Bạn nhận một con số duy nhất, không phải một khoảng giá.",
        out: ["kết luận: làm được / không làm được", "báo giá cố định", "ngày bắt đầu"],
      },
      {
        title: "Bản mẫu được dựng trên chính nguồn của bạn",
        by: "PROSOX",
        text: "Không phải bộ dữ liệu demo lấy từ dự án của người khác. Chúng tôi xây dựng trình thu thập cho đúng các nguồn thực tế của bạn và gửi một bản xuất dữ liệu thật, theo cấu trúc trường đã thống nhất.",
        out: ["tệp mẫu", "đặc tả các trường dữ liệu", "báo cáo độ phủ"],
      },
      {
        title: "Bạn đối chiếu bản mẫu với thực tế",
        by: "Bạn",
        text: "Mở bản mẫu cạnh nguồn và kiểm tra. Nếu có trường sai, thiếu hoặc bố trí khó dùng, đây là thời điểm rẻ nhất để thay đổi.",
        out: ["xác nhận", "hoặc chỉnh sửa"],
      },
      {
        title: "Bàn giao định kỳ bắt đầu",
        by: "PROSOX",
        text: "Thu thập theo lịch và gửi vào kênh bạn chọn: tệp, API, ghi thẳng vào cơ sở dữ liệu của bạn, hoặc xuất lên đám mây. Mỗi lô dữ liệu đều được kiểm định trước khi gửi.",
        out: ["bàn giao theo lịch", "nhật ký kiểm định"],
      },
      {
        title: "Chúng tôi theo dõi các nguồn, bạn theo dõi thị trường",
        by: "PROSOX",
        text: "Các trang web đổi giao diện, trường dữ liệu bị dời chỗ, trang bắt đầu hiển thị ngay trong trình duyệt. Chúng tôi theo dõi sự cố và sửa trình thu thập trong cùng một dịch vụ — đồng thời báo cho bạn khi thay đổi ở nguồn ảnh hưởng đến ý nghĩa của các con số.",
        out: ["giám sát khả năng truy cập", "sửa trình thu thập", "thông báo thay đổi"],
      },
    ],
    table: {
      caption: "So sánh với đội ngũ nội bộ",
      own: "Đội ngũ nội bộ",
      us: "Làm việc với chúng tôi",
      rows: [
        {
          label: "Đường đến những dữ liệu đầu tiên",
          own: "Tuyển người, rồi dựng hạ tầng, rồi mới có trình thu thập đầu tiên",
          us: "Trước tiên là bản xuất mẫu trên nguồn của bạn, sau đó là bàn giao định kỳ",
        },
        {
          label: "Chi phí cố định",
          own: "Lương, máy chủ, hạ tầng proxy, trực vận hành",
          us: "Một khoản mỗi tháng, chốt khi ký hợp đồng",
        },
        {
          label: "Khi nguồn đổi giao diện",
          own: "Một đầu việc tranh chấp với lộ trình sản phẩm của bạn",
          us: "Việc của chúng tôi, nằm trong cùng mức phí",
        },
        {
          label: "Lập trường pháp lý về việc thu thập",
          own: "Luật sư của bạn, từng nguồn một, làm lại từ đầu",
          us: "Rà soát trước khi bắt đầu, có văn bản nếu bạn yêu cầu",
        },
        {
          label: "Khi người xây dựng hệ thống rời đi",
          own: "Chuyên môn rời đi cùng họ",
          us: "Hợp đồng ký với một công ty, không phải với cá nhân",
        },
      ],
    },
  },
});
