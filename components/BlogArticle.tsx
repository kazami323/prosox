import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { getDictionary, locales, type Locale } from "@/i18n";
import { getPost } from "@/lib/blog";
import { asset, homePath, postPath } from "@/lib/paths";

export default function BlogArticle({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const post = getPost(slug, locale);
  const home = homePath(locale);
  const langPaths = Object.fromEntries(
    locales.map((l) => [l, postPath(slug, l)]),
  ) as Record<Locale, string>;

  return (
    <>
      <a className="skip" href="#main">
        {dict.nav.skip}
      </a>
      <Nav
        dict={dict.nav}
        locale={locale}
        anchorBase={asset(home === "/" ? "/" : `${home}/`)}
        langPaths={langPaths}
      />
      <main id="main" className="post">
        <div id="top"></div>
        <article className="wrap">
          <Link className="post-back" href={`${home === "/" ? "" : home}/#materialy`}>
            {dict.materialy.backHome}
          </Link>
          <header className="post-head">
            <span className="kicker">{post.rubric}</span>
            <h1>{post.title}</h1>
          </header>
          <div className="post-cover">
            <Image src={post.cover} alt="" priority sizes="(min-width: 860px) 780px, 100vw" />
          </div>
          <div className="prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // ссылки на другие статьи пишутся как /blog/slug — добавляем язык
                a: ({ href = "", children }) =>
                  href.startsWith("/blog/") ? (
                    <Link href={postPath(href.slice("/blog/".length), locale)}>{children}</Link>
                  ) : (
                    <a href={href} rel="noopener">{children}</a>
                  ),
                table: ({ children }) => (
                  <div className="table-scroll">
                    <table>{children}</table>
                  </div>
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
          <aside className="post-cta">
            <p>{dict.materialy.ctaTitle}</p>
            <a className="btn btn--fill" href={asset(home === "/" ? "/#zayavka" : `${home}/#zayavka`)}>
              {dict.materialy.ctaButton}
            </a>
          </aside>
        </article>
      </main>
      <Footer dict={dict.footer} />
      <BackToTop label={dict.nav.toTop} />
    </>
  );
}
