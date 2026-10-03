import { section } from "../section";

export const faq = section({
  ru: {
    kicker: "Вопросы, которые задают чаще всего",
    h2: "Отвечаем здесь,",
    thin: "чтобы вы не тратили на это время.",
    items: [
      {
        q: "Это законно?",
        a: "Сбор данных, которые сайт публикует любому посетителю без авторизации, законен в тех юрисдикциях, где мы работаем. Но опираемся мы не на этот общий ответ: каждый проект проверяет кибер-юридическое бюро — по правовому режиму страны источника, страны вашей компании и по тому, как вы собираетесь использовать результат. Если заключение отрицательное, мы говорим об этом прямо и предлагаем другой источник.",
      },
      {
        q: "Что с персональными данными и GDPR?",
        a: "Большая часть того, что мы поставляем — цены, карточки, наличие, структура каталога — вообще не содержит персональных данных. Если проект затрагивает сведения о компаниях или контакты из открытых реестров, юридическая проверка охватывает правовое основание, вопрос сроков хранения и ваши обязанности как оператора. Мы прямо скажем, если запрос нельзя выполнить в том виде, в котором он сформулирован.",
      },
      {
        q: "Как быстро начнём и как часто будут приходить данные?",
        a: "Периодичность задаёте вы: раз в час, ежедневно, еженедельно или разовый срез. Сначала собираем пример на ваших источниках и согласуем состав полей, после этого запускаем регулярную поставку. Источники, которые целиком отрисовываются в браузере, дольше в разработке и дороже в расчёте на страницу — мы говорим, какие из ваших попадают в эту категорию, до того как назвать цену.",
      },
      {
        q: "Что будет, когда источник переделает сайт?",
        a: "Это происходит постоянно и это главная причина, по которой большинство внутренних проектов по сбору данных тихо умирают. Мы отслеживаем поломки, чиним парсеры в рамках ежемесячной суммы и отдельно предупреждаем, когда изменение меняет не расположение поля на странице, а его смысл.",
      },
      {
        q: "Кому принадлежат данные и подпишете ли вы NDA?",
        a: "Результат принадлежит вам: можете использовать его, хранить и продавать производную аналитику в пределах, которые описаны в правовой проверке проекта. NDA подписываем как юридическое лицо. Ваши структуры полей, списки источников и сопоставления артикулов не используем ни для кого другого.",
      },
      {
        q: "Можно проверить вас до долгого контракта?",
        a: "Это как раз тот путь, который мы рекомендуем. Возьмите пилот: один источник, ваши реальные артикулы, фиксированная сумма. Вы получаете настоящую выгрузку, которую можно сверить с живыми страницами, и отчёт о покрытии — что удалось собрать, а что нет. Если качество не устроит, на этом всё и закончится.",
      },
      {
        q: "Сколько это стоит?",
        a: "Количество источников, сложность отрисовки страниц и частота. Эти три вещи определяют всё остальное — поэтому мы считаем по вашей задаче, а не публикуем прайс, который для вашего случая всё равно будет неверным. Оценка приходит фиксированным числом, внутри которого уже сидят починка парсеров и юридическая проверка.",
      },
      {
        q: "Как вы избегаете перегрузки сайтов, с которых собираете?",
        a: "Инфраструктура спроектирована вести себя предсказуемо: разумная частота обращений, распределённые по времени запросы, повторные попытки при сбое вместо долбёжки. Мы не выдаём себя за авторизованного пользователя и не создаём нагрузку, которая мешала бы сайту обслуживать собственных посетителей. Это конструктивное ограничение, а не любезность.",
      },
    ],
  },
  en: {
    kicker: "The questions we hear most often",
    h2: "We answer them here,",
    thin: "so you do not have to spend time on them.",
    items: [
      {
        q: "Is this legal?",
        a: "Collecting data that a website publishes to any visitor without a login is lawful in the jurisdictions where we work. But we do not rely on that general answer: every project is reviewed by a cyber-law firm, covering the legal regime of the source's country, of your company's country, and how you intend to use the result. If the opinion is negative, we say so plainly and propose a different source.",
      },
      {
        q: "What about personal data and GDPR?",
        a: "Most of what we deliver — prices, listings, stock, catalogue structure — contains no personal data at all. If a project touches company information or contacts from open registries, the legal review covers the legal basis, retention periods and your obligations as the data controller. We will tell you plainly if a request cannot be fulfilled as it is worded.",
      },
      {
        q: "How fast can we start, and how often will the data arrive?",
        a: "You set the frequency: hourly, daily, weekly, or a one-off snapshot. We first build a sample on your sources and agree the set of fields, then start regular delivery. Sources that render entirely in the browser take longer to build and cost more per page — we tell you which of yours fall into that category before we name a price.",
      },
      {
        q: "What happens when a source redesigns its site?",
        a: "It happens constantly, and it is the main reason most in-house data collection projects quietly die. We monitor for breakage, fix the scrapers within the monthly fee, and warn you separately when a change alters not where a field sits on the page but what it means.",
      },
      {
        q: "Who owns the data, and will you sign an NDA?",
        a: "The result belongs to you: you can use it, store it and sell derived analytics within the limits set out in the project's legal review. We sign NDAs as a legal entity. Your field structures, source lists and SKU mappings are never used for anyone else.",
      },
      {
        q: "Can we test you before a long contract?",
        a: "That is exactly the route we recommend. Take a pilot: one source, your real SKUs, a fixed price. You receive a genuine data export that you can check against the live pages, plus a coverage report — what we managed to collect and what we did not. If the quality does not suit you, that is where it ends.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the number of sources, how complex the pages are to render, and the frequency. These three things determine everything else — which is why we price against your task rather than publish a price list that would be wrong for your case anyway. The estimate comes as a fixed figure that already includes scraper fixes and legal review.",
      },
      {
        q: "How do you avoid overloading the sites you collect from?",
        a: "The infrastructure is designed to behave predictably: a reasonable request rate, requests spread out over time, and retries after a failure instead of hammering. We do not pose as an authorised user and we do not create load that would stop a site from serving its own visitors. This is a design constraint, not a courtesy.",
      },
    ],
  },
  vi: {
    kicker: "Những câu hỏi chúng tôi gặp nhiều nhất",
    h2: "Chúng tôi trả lời ngay tại đây,",
    thin: "để bạn không phải mất thời gian cho việc này.",
    items: [
      {
        q: "Việc này có hợp pháp không?",
        a: "Thu thập dữ liệu mà một website công bố cho mọi khách truy cập không cần đăng nhập là hợp pháp tại các khu vực pháp lý nơi chúng tôi hoạt động. Tuy nhiên, chúng tôi không dựa vào câu trả lời chung đó: mỗi dự án đều được một văn phòng luật chuyên về pháp lý không gian mạng rà soát, theo chế độ pháp lý của quốc gia chứa nguồn, của quốc gia đặt công ty bạn và theo cách bạn dự định sử dụng kết quả. Nếu ý kiến là không khả thi, chúng tôi nói thẳng và đề xuất một nguồn khác.",
      },
      {
        q: "Còn dữ liệu cá nhân và GDPR thì sao?",
        a: "Phần lớn những gì chúng tôi cung cấp — giá, thông tin sản phẩm, tồn kho, cấu trúc danh mục — hoàn toàn không chứa dữ liệu cá nhân. Nếu dự án liên quan đến thông tin doanh nghiệp hoặc liên hệ lấy từ các hồ sơ công khai, việc rà soát pháp lý sẽ xem xét cơ sở pháp lý, thời hạn lưu trữ và nghĩa vụ của bạn với tư cách bên kiểm soát dữ liệu. Chúng tôi sẽ nói thẳng nếu một yêu cầu không thể thực hiện đúng như cách nó được đặt ra.",
      },
      {
        q: "Bao lâu thì bắt đầu và dữ liệu được gửi với tần suất nào?",
        a: "Tần suất do bạn quyết định: mỗi giờ, hằng ngày, hằng tuần hoặc một lần duy nhất. Trước tiên chúng tôi tạo bản mẫu trên các nguồn của bạn và thống nhất danh sách trường dữ liệu, sau đó mới bắt đầu bàn giao định kỳ. Những nguồn hiển thị hoàn toàn trên trình duyệt thì mất nhiều thời gian xây dựng hơn và chi phí trên mỗi trang cao hơn — chúng tôi sẽ cho bạn biết nguồn nào của bạn thuộc nhóm này trước khi báo giá.",
      },
      {
        q: "Điều gì xảy ra khi nguồn thiết kế lại website?",
        a: "Việc này xảy ra liên tục, và đó là lý do chính khiến phần lớn các dự án thu thập dữ liệu nội bộ lặng lẽ chết yểu. Chúng tôi theo dõi các sự cố, sửa trình thu thập trong phạm vi khoản phí hằng tháng, và cảnh báo riêng khi một thay đổi không chỉ đổi vị trí của trường dữ liệu trên trang mà đổi cả ý nghĩa của nó.",
      },
      {
        q: "Dữ liệu thuộc về ai và các bạn có ký NDA không?",
        a: "Kết quả thuộc về bạn: bạn có thể sử dụng, lưu trữ và bán các phân tích phái sinh trong phạm vi được nêu trong rà soát pháp lý của dự án. Chúng tôi ký NDA với tư cách pháp nhân. Cấu trúc trường dữ liệu, danh sách nguồn và bảng đối chiếu SKU của bạn sẽ không bao giờ được dùng cho bất kỳ ai khác.",
      },
      {
        q: "Có thể thử các bạn trước khi ký hợp đồng dài hạn không?",
        a: "Đó chính là cách chúng tôi khuyến nghị. Hãy bắt đầu bằng một dự án thử nghiệm: một nguồn, các SKU thực tế của bạn, mức phí cố định. Bạn nhận được một bản xuất dữ liệu thật để đối chiếu với các trang đang hoạt động, cùng báo cáo mức độ bao phủ — những gì thu thập được và những gì chưa. Nếu chất lượng không đáp ứng, mọi thứ sẽ dừng lại ở đó.",
      },
      {
        q: "Chi phí là bao nhiêu?",
        a: "Chi phí phụ thuộc vào số lượng nguồn, độ phức tạp khi hiển thị trang và tần suất. Ba yếu tố này quyết định mọi thứ còn lại — vì vậy chúng tôi tính theo yêu cầu của bạn thay vì công bố bảng giá mà dù sao cũng sẽ không đúng với trường hợp của bạn. Bản ước tính được đưa ra dưới dạng một con số cố định, đã bao gồm việc sửa trình thu thập và rà soát pháp lý.",
      },
      {
        q: "Các bạn tránh làm quá tải những website mình thu thập như thế nào?",
        a: "Hạ tầng được thiết kế để hoạt động có thể dự đoán được: tần suất truy cập hợp lý, các yêu cầu được phân bổ theo thời gian, thử lại khi gặp lỗi thay vì dồn dập gửi liên tục. Chúng tôi không giả danh người dùng đã xác thực và không tạo tải khiến website không phục vụ được chính khách truy cập của mình. Đây là một giới hạn trong thiết kế, không phải sự nể nang.",
      },
    ],
  },
});
