import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import { homePath, postPath } from "@/lib/paths";
import { getPost } from "@/lib/blog";

const SITE = {
  ru: {
    title: "PROSOX Данные — публичные веб-данные для бизнеса",
    description: "Сбор, проверка и поставка публичных веб-данных: цены конкурентов, ассортимент, наличие. Файлом, по API или прямо в вашу базу.",
  },
  en: {
    title: "PROSOX Data — public web data for business",
    description: "Collection, validation and delivery of public web data: competitor prices, assortment, stock. As a file, via API or straight into your database.",
  },
  vi: {
    title: "PROSOX Data — dữ liệu web công khai cho doanh nghiệp",
    description: "Thu thập, kiểm định và bàn giao dữ liệu web công khai: giá đối thủ, danh mục, tồn kho. Dưới dạng tệp, qua API hoặc trực tiếp vào cơ sở dữ liệu của bạn.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

/** Абсолютная база для og:image и canonical. */
const metadataBase = new URL(process.env.SITE_URL ?? "https://kazami323.github.io");

const ogLocale: Record<Locale, string> = { ru: "ru_RU", en: "en_US", vi: "vi_VN" };

/** hreflang-альтернативы: поисковику нужно знать, что /, /en и /vi —
 *  одна страница на разных языках, а не три дубля. */
function alternates(paths: Record<Locale, string>, current: Locale): Metadata["alternates"] {
  return {
    canonical: paths[current],
    languages: { ...paths, "x-default": paths.ru },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const paths = Object.fromEntries(locales.map((l) => [l, homePath(l)])) as Record<Locale, string>;
  return {
    metadataBase,
    title: SITE[locale].title,
    description: SITE[locale].description,
    alternates: alternates(paths, locale),
    openGraph: { title: SITE[locale].title, description: SITE[locale].description, locale: ogLocale[locale], type: "website" },
  };
}

export function postMetadata(slug: string, locale: Locale): Metadata {
  const post = getPost(slug, locale);
  const paths = Object.fromEntries(locales.map((l) => [l, postPath(slug, l)])) as Record<Locale, string>;
  return {
    metadataBase,
    title: `${post.title} — PROSOX`,
    description: post.description,
    alternates: alternates(paths, locale),
    openGraph: { title: post.title, description: post.description, locale: ogLocale[locale], type: "article", images: [post.cover.src] },
  };
}
