import { section } from "../section";

export const formaty = section({
  ru: {
    kicker: "Что вы получите",
    h2: "Одна и та же запись",
    thin: "в том виде, в котором работает ваша команда.",
    lede: "Структуру полей согласуем до начала сбора, поэтому на приёмке ничего не надо переделывать. Канал выбирайте по тому, кто будет этим пользоваться: аналитик, разработчик, дата-команда или руководитель.",
    tablistLabel: "Форматы поставки",
    tabs: [
      { label: "CSV / Excel", sub: "Аналитикам и категорийным менеджерам" },
      { label: "JSON / API", sub: "Разработчикам — встроить в свой сервис" },
      { label: "Прямо в базу данных", sub: "Дата-командам — PostgreSQL, ClickHouse" },
      { label: "BI, облако и алерты", sub: "Руководителям — нужен ответ, а не файл" },
    ],
    // Static, developer-authored code samples rendered via dangerouslySetInnerHTML
    // rather than JSX: these are copied verbatim from the prototype and their
    // indentation inside <pre> is significant — JSX would collapse it.
    csvHtml: `<span class="c">источник,артикул,название,цена,валюта,дельта_24ч,остаток,проверено</span>
Маркетплейс А,SKU-40118,Модель X 500 мл,14900,RUB,0.000,312,2026-09-09T06:00:04Z
Маркетплейс Б,SKU-40118,Модель X 500 мл,12150,RUB,-0.185,47,2026-09-09T06:00:06Z
Ритейлер В,SKU-40118,Модель X 500 мл,15290,RUB,0.019,128,2026-09-09T06:00:09Z`,
    jsonHtml: `{
  <span class="k">"sku"</span>: "SKU-40118",
  <span class="k">"checked_at"</span>: "2026-09-09T06:00:06Z",
  <span class="k">"offers"</span>: [
    { <span class="k">"source"</span>: "Маркетплейс Б", <span class="k">"price"</span>: 12150,
      <span class="k">"currency"</span>: "RUB", <span class="k">"delta_24h"</span>: -0.185,
      <span class="k">"in_stock"</span>: 47, <span class="k">"url"</span>: "https://…" }
  ]
}`,
    sqlHtml: `<span class="c">-- пишем мы, вы просто делаете запрос. без промежуточного экспорта.</span>
<span class="k">INSERT INTO</span> prices_daily
  (source, sku, price, currency, delta_24h, in_stock, checked_at)
<span class="k">VALUES</span>
  ('Маркетплейс Б','SKU-40118',12150,'RUB',-0.185,47,'2026-09-09 06:00:06');`,
    biHtml: `<span class="c">поставка:</span>
  <span class="k">облако</span>:   s3://ваш-бакет/prices/dt=2026-09-09/
  <span class="k">bi</span>:       power_bi, обновление 06:15
  <span class="k">алерты</span>:
    - <span class="k">правило</span>: цена_конкурента &lt; ваша_минимальная_цена
      <span class="k">канал</span>:   telegram, #ceny-alerts
    - <span class="k">правило</span>: недельная_сводка
      <span class="k">канал</span>:   почта, руководителю категории`,
    panels: [
      {
        head: "ceny_konkurentov.csv — UTF-8, на почту или в SFTP",
        note: "Открывается сразу в Excel или Google Таблицах. Отдельный файл на каждую выгрузку или один накопительный с историей — как вам удобнее.",
      },
      {
        head: "GET /v1/prices?sku=SKU-40118 — авторизация по токену, постранично",
        note: "Забираете по своему расписанию — или мы сами отправляем на ваш webhook, как только партия прошла валидацию.",
      },
      {
        head: "Запись прямо в ваш инстанс — ваша схема, ваши названия полей",
        note: "PostgreSQL, ClickHouse, MySQL, BigQuery. Подстраиваемся под вашу структуру таблиц, а не просим подстроиться под нашу.",
      },
      {
        head: "S3 / Google Таблицы / Power BI / Looker — плюс маршруты алертов",
        note: "Данные приходят туда, где решения уже принимаются. Никому не нужно помнить, что надо открыть файл.",
      },
    ],
    tblCap: "Спецификация полей — согласуется и фиксируется до начала сбора",
    thField: "Поле",
    thType: "Тип",
    thMeaning: "Что означает",
    rows: [
      { field: "источник", type: "строка", meaning: "С какого сайта или маркетплейса прочитана строка" },
      { field: "артикул", type: "строка", meaning: "Ваш идентификатор, сопоставленный с карточкой источника при настройке" },
      { field: "цена", type: "число", meaning: "Цена, которую видит покупатель в указанном вами регионе" },
      { field: "дельта_24ч", type: "число", meaning: "Изменение к предыдущей выгрузке, считаем на нашей стороне" },
      { field: "остаток", type: "целое", meaning: "Наличие в том виде, в каком его публикует источник" },
      { field: "проверено", type: "дата и время", meaning: "Когда страница была реально прочитана, а не когда отправлен файл" },
    ],
    btnSample: "Запросить пример выгрузки",
    btnSampleReq: "Пример выгрузки",
    btnCatalog: "Прислать полный каталог полей",
    btnCatalogReq: "Полный каталог полей",
  },
  en: {
    kicker: "What you receive",
    h2: "The same record",
    thin: "in the form your team actually works with.",
    lede: "We agree the field structure before collection starts, so nothing has to be reworked at acceptance. Choose the channel by who will use it: an analyst, a developer, a data team or a manager.",
    tablistLabel: "Delivery formats",
    tabs: [
      { label: "CSV / Excel", sub: "For analysts and category managers" },
      { label: "JSON / API", sub: "For developers — build it into your own service" },
      { label: "Straight into your database", sub: "For data teams — PostgreSQL, ClickHouse" },
      { label: "BI, cloud and alerts", sub: "For managers — who need an answer, not a file" },
    ],
    csvHtml: `<span class="c">source,sku,name,price,currency,delta_24h,stock,checked_at</span>
Marketplace A,SKU-40118,Model X 500 ml,14900,RUB,0.000,312,2026-09-09T06:00:04Z
Marketplace B,SKU-40118,Model X 500 ml,12150,RUB,-0.185,47,2026-09-09T06:00:06Z
Retailer C,SKU-40118,Model X 500 ml,15290,RUB,0.019,128,2026-09-09T06:00:09Z`,
    jsonHtml: `{
  <span class="k">"sku"</span>: "SKU-40118",
  <span class="k">"checked_at"</span>: "2026-09-09T06:00:06Z",
  <span class="k">"offers"</span>: [
    { <span class="k">"source"</span>: "Marketplace B", <span class="k">"price"</span>: 12150,
      <span class="k">"currency"</span>: "RUB", <span class="k">"delta_24h"</span>: -0.185,
      <span class="k">"in_stock"</span>: 47, <span class="k">"url"</span>: "https://…" }
  ]
}`,
    sqlHtml: `<span class="c">-- we write, you just query. no intermediate export.</span>
<span class="k">INSERT INTO</span> prices_daily
  (source, sku, price, currency, delta_24h, in_stock, checked_at)
<span class="k">VALUES</span>
  ('Marketplace B','SKU-40118',12150,'RUB',-0.185,47,'2026-09-09 06:00:06');`,
    biHtml: `<span class="c">delivery:</span>
  <span class="k">cloud</span>:    s3://your-bucket/prices/dt=2026-09-09/
  <span class="k">bi</span>:       power_bi, refresh 06:15
  <span class="k">alerts</span>:
    - <span class="k">rule</span>:    competitor_price &lt; your_floor_price
      <span class="k">channel</span>: telegram, #price-alerts
    - <span class="k">rule</span>:    weekly_summary
      <span class="k">channel</span>: email, category manager`,
    panels: [
      {
        head: "competitor_prices.csv — UTF-8, by email or SFTP",
        note: "Opens straight in Excel or Google Sheets. A separate file for each export or one cumulative file with history — whichever suits you.",
      },
      {
        head: "GET /v1/prices?sku=SKU-40118 — token authorization, paginated",
        note: "Pull it on your own schedule — or we push it to your webhook as soon as a batch has passed validation.",
      },
      {
        head: "Written straight into your instance — your schema, your field names",
        note: "PostgreSQL, ClickHouse, MySQL, BigQuery. We adapt to your table structure instead of asking you to adapt to ours.",
      },
      {
        head: "S3 / Google Sheets / Power BI / Looker — plus alert routing",
        note: "The data arrives where decisions are already made. Nobody has to remember to open a file.",
      },
    ],
    tblCap: "Field specification — agreed and fixed before collection starts",
    thField: "Field",
    thType: "Type",
    thMeaning: "What it means",
    rows: [
      { field: "source", type: "string", meaning: "Which site or marketplace the row was read from" },
      { field: "sku", type: "string", meaning: "Your identifier, matched to the source listing during setup" },
      { field: "price", type: "number", meaning: "The price a buyer sees in the region you specify" },
      { field: "delta_24h", type: "number", meaning: "Change since the previous export, calculated on our side" },
      { field: "stock", type: "integer", meaning: "Availability exactly as the source publishes it" },
      { field: "checked_at", type: "date and time", meaning: "When the page was actually read, not when the file was sent" },
    ],
    btnSample: "Request a sample export",
    btnSampleReq: "Sample export",
    btnCatalog: "Send me the full field catalogue",
    btnCatalogReq: "Full field catalogue",
  },
  vi: {
    kicker: "Bạn sẽ nhận được gì",
    h2: "Cùng một bản ghi",
    thin: "ở đúng dạng mà đội ngũ của bạn đang làm việc.",
    lede: "Chúng tôi thống nhất cấu trúc trường dữ liệu trước khi bắt đầu thu thập, nên khi nghiệm thu bạn không phải chỉnh sửa lại gì. Hãy chọn kênh theo người sẽ sử dụng: chuyên viên phân tích, lập trình viên, đội dữ liệu hoặc cấp quản lý.",
    tablistLabel: "Định dạng bàn giao",
    tabs: [
      { label: "CSV / Excel", sub: "Dành cho chuyên viên phân tích và quản lý ngành hàng" },
      { label: "JSON / API", sub: "Dành cho lập trình viên — tích hợp vào dịch vụ của bạn" },
      { label: "Ghi thẳng vào cơ sở dữ liệu", sub: "Dành cho đội dữ liệu — PostgreSQL, ClickHouse" },
      { label: "BI, đám mây và cảnh báo", sub: "Dành cho cấp quản lý — cần câu trả lời, không phải tệp" },
    ],
    csvHtml: `<span class="c">nguồn,sku,tên,giá,tiền_tệ,thay_đổi_24h,tồn_kho,thời_điểm_kiểm_tra</span>
Sàn A,SKU-40118,Model X 500 ml,14900,RUB,0.000,312,2026-09-09T06:00:04Z
Sàn B,SKU-40118,Model X 500 ml,12150,RUB,-0.185,47,2026-09-09T06:00:06Z
Nhà bán lẻ C,SKU-40118,Model X 500 ml,15290,RUB,0.019,128,2026-09-09T06:00:09Z`,
    jsonHtml: `{
  <span class="k">"sku"</span>: "SKU-40118",
  <span class="k">"checked_at"</span>: "2026-09-09T06:00:06Z",
  <span class="k">"offers"</span>: [
    { <span class="k">"source"</span>: "Sàn B", <span class="k">"price"</span>: 12150,
      <span class="k">"currency"</span>: "RUB", <span class="k">"delta_24h"</span>: -0.185,
      <span class="k">"in_stock"</span>: 47, <span class="k">"url"</span>: "https://…" }
  ]
}`,
    sqlHtml: `<span class="c">-- chúng tôi ghi dữ liệu, bạn chỉ cần truy vấn. không cần xuất tệp trung gian.</span>
<span class="k">INSERT INTO</span> prices_daily
  (source, sku, price, currency, delta_24h, in_stock, checked_at)
<span class="k">VALUES</span>
  ('Sàn B','SKU-40118',12150,'RUB',-0.185,47,'2026-09-09 06:00:06');`,
    biHtml: `<span class="c">bàn_giao:</span>
  <span class="k">đám_mây</span>:  s3://bucket-cua-ban/prices/dt=2026-09-09/
  <span class="k">bi</span>:       power_bi, cập nhật 06:15
  <span class="k">cảnh_báo</span>:
    - <span class="k">quy_tắc</span>: giá_đối_thủ &lt; giá_sàn_của_bạn
      <span class="k">kênh</span>:    telegram, #canh-bao-gia
    - <span class="k">quy_tắc</span>: tổng_hợp_hằng_tuần
      <span class="k">kênh</span>:    email, quản lý ngành hàng`,
    panels: [
      {
        head: "gia_doi_thu.csv — UTF-8, gửi qua email hoặc SFTP",
        note: "Mở được ngay trong Excel hoặc Google Sheets. Mỗi lần xuất một tệp riêng, hoặc một tệp lũy kế có kèm lịch sử — tùy bạn chọn.",
      },
      {
        head: "GET /v1/prices?sku=SKU-40118 — xác thực bằng token, phân trang",
        note: "Bạn tự lấy dữ liệu theo lịch của mình — hoặc chúng tôi gửi thẳng tới webhook của bạn ngay khi lô dữ liệu vượt qua bước kiểm định.",
      },
      {
        head: "Ghi thẳng vào hệ thống của bạn — theo lược đồ và tên trường của bạn",
        note: "PostgreSQL, ClickHouse, MySQL, BigQuery. Chúng tôi điều chỉnh theo cấu trúc bảng của bạn, thay vì yêu cầu bạn điều chỉnh theo chúng tôi.",
      },
      {
        head: "S3 / Google Sheets / Power BI / Looker — kèm định tuyến cảnh báo",
        note: "Dữ liệu đến đúng nơi các quyết định đang được đưa ra. Không ai phải nhớ mở tệp.",
      },
    ],
    tblCap: "Đặc tả trường dữ liệu — được thống nhất và chốt trước khi bắt đầu thu thập",
    thField: "Trường",
    thType: "Kiểu",
    thMeaning: "Ý nghĩa",
    rows: [
      { field: "nguồn", type: "chuỗi", meaning: "Dòng dữ liệu được đọc từ trang web hoặc sàn thương mại điện tử nào" },
      { field: "sku", type: "chuỗi", meaning: "Mã định danh của bạn, được đối chiếu với trang sản phẩm của nguồn khi thiết lập" },
      { field: "giá", type: "số", meaning: "Mức giá người mua nhìn thấy tại khu vực bạn chỉ định" },
      { field: "thay_đổi_24h", type: "số", meaning: "Mức thay đổi so với lần xuất trước, do chúng tôi tính toán" },
      { field: "tồn_kho", type: "số nguyên", meaning: "Tình trạng hàng đúng như nguồn công bố" },
      { field: "thời_điểm_kiểm_tra", type: "ngày và giờ", meaning: "Thời điểm trang thực sự được đọc, không phải lúc tệp được gửi đi" },
    ],
    btnSample: "Yêu cầu bản xuất mẫu",
    btnSampleReq: "Bản xuất mẫu",
    btnCatalog: "Gửi cho tôi danh mục đầy đủ các trường",
    btnCatalogReq: "Danh mục đầy đủ các trường",
  },
});
