import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";

/** Префикс хостинга (GitHub Pages отдаёт сайт из /<репозиторий>). next/link
 *  и статические импорты картинок подставляют его сами, а для <video src>
 *  и других «сырых» путей приходится делать это вручную. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(p: string) {
  return `${basePath}${p}`;
}

/** Путь внутри сайта для языка — без basePath (его добавит next/link). */
export function homePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function postPath(slug: string, locale: Locale) {
  return locale === defaultLocale ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
}
