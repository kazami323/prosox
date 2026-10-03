import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Dictionary, Locale } from "@/i18n";
import type { PostMeta } from "@/lib/blog";
import { postPath } from "@/lib/paths";

export default function Materialy({
  dict,
  posts,
  locale,
}: {
  dict: Dictionary["materialy"];
  posts: PostMeta[];
  locale: Locale;
}) {
  return (
    <section className="sec" id="materialy">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="kicker">{dict.kicker}</span>
          <h2 className="h2">
            {dict.h2}
            <span className="thin">{dict.thin}</span>
          </h2>
          <p className="lede">{dict.lede}</p>
        </Reveal>
        <div className="g-3" style={{ marginTop: 0 }}>
          {posts.map((post) => (
            <Reveal as="article" className="card artcard" key={post.slug}>
              <Link className="art-cover" href={postPath(post.slug, locale)} tabIndex={-1} aria-hidden="true">
                <Image src={post.cover} alt="" sizes="(min-width: 1000px) 360px, 100vw" />
              </Link>
              <span className="tag">{post.rubric}</span>
              <h3>
                <Link className="art-link" href={postPath(post.slug, locale)}>
                  {post.cardTitle}
                </Link>
              </h3>
              <p className="ans">{post.description}</p>
              <Link className="tlink art-more" href={postPath(post.slug, locale)}>
                {dict.readMore}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
