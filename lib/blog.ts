import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n";
import coverPrice from "@/assets/blog/kakuyu-cenu-sobirat.jpg";
import coverLegal from "@/assets/blog/zakonno-li-sobirat-dannye.jpg";
import coverUzum from "@/assets/blog/uzum-market.jpg";

/** Порядок здесь — порядок карточек на главной. Обложки подключаются
 *  статическим импортом, чтобы Next сам подставил basePath. */
const POSTS: { slug: string; cover: StaticImageData }[] = [
  { slug: "kakuyu-cenu-sobirat", cover: coverPrice },
  { slug: "zakonno-li-sobirat-dannye", cover: coverLegal },
  { slug: "uzum-market", cover: coverUzum },
];

export type PostMeta = {
  slug: string;
  cover: StaticImageData;
  rubric: string;
  cardTitle: string;
  description: string;
  title: string;
};

export type Post = PostMeta & { body: string };

const ROOT = path.join(process.cwd(), "content", "blog");

function read(slug: string, locale: Locale): Post {
  const entry = POSTS.find((p) => p.slug === slug);
  if (!entry) throw new Error(`Неизвестная статья: ${slug}`);
  const file = path.join(ROOT, slug, `${locale}.md`);
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    cover: entry.cover,
    rubric: String(data.rubric),
    cardTitle: String(data.cardTitle),
    description: String(data.description),
    title: String(data.title),
    body: content,
  };
}

export const postSlugs = POSTS.map((p) => p.slug);

export function getPosts(locale: Locale): PostMeta[] {
  return POSTS.map(({ slug }) => {
    const post = read(slug, locale);
    return {
      slug: post.slug,
      cover: post.cover,
      rubric: post.rubric,
      cardTitle: post.cardTitle,
      description: post.description,
      title: post.title,
    };
  });
}

export function getPost(slug: string, locale: Locale): Post {
  return read(slug, locale);
}
