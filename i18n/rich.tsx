import { Fragment, type ReactNode } from "react";

/** Часть строк в словаре содержит выделение <b>…</b> — оно несёт смысл
 *  (это акцент в продающем тексте), поэтому не выносится в отдельные ключи.
 *  Разбираем только <b>, и только в текстах, которые пишем сами: никакого
 *  пользовательского ввода сюда не попадает, поэтому dangerouslySetInnerHTML
 *  не нужен. */
export function rich(text: string): ReactNode {
  if (!text.includes("<b>")) return text;

  return text.split(/(<b>.*?<\/b>)/g).map((part, i) => {
    const match = part.match(/^<b>(.*?)<\/b>$/);
    return match ? (
      <b key={i}>{match[1]}</b>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}
