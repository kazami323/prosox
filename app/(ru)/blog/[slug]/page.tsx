import BlogArticle from "@/components/BlogArticle";
import { postSlugs } from "@/lib/blog";
import { postMetadata } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return postMetadata(slug, "ru");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogArticle slug={slug} locale="ru" />;
}
