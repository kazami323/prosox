import { ru } from "./ru";
import { en } from "./en";
import { vi } from "./vi";

export const locales = ["ru", "en", "vi"] as const;
export type Locale = (typeof locales)[number];

/** Русский — исходный язык сайта, поэтому он живёт в корне, а не в /ru.
 *  Остальные получают префикс пути. */
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  vi: "VI",
};

/** Язык документа для атрибута lang и подбора шрифтов. */
export const htmlLang: Record<Locale, string> = {
  ru: "ru",
  en: "en",
  vi: "vi",
};

const dictionaries = { ru, en, vi };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

/** Путь к той же странице на другом языке. */
export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export type { Dictionary } from "./ru";
