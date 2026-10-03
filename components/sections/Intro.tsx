import Image from "next/image";
// Статический импорт, а не строковый путь: так Next сам подставляет basePath
// (сайт отдаётся из подкаталога на GitHub Pages) и берёт размеры из файла.
import prosoxMark from "@/public/prosox-mark.webp";
import Reveal from "@/components/Reveal";
import type { Dictionary, Locale } from "@/i18n";
import { asset } from "@/lib/paths";

export default function Intro({
  dict,
  locale,
}: {
  dict: Dictionary["intro"];
  locale: Locale;
}) {
  return (
    <section className="sec intro">
      <div className="wrap g-intro">
        <Reveal>
          <figure className="video video--hero video--real">
            <video
              controls
              preload="none"
              playsInline
              poster={asset(`/video/prosox-${locale}.jpg`)}
              aria-labelledby="intro-video-title"
            >
              <source src={asset(`/video/prosox-${locale}.mp4`)} type="video/mp4" />
            </video>
            <figcaption>
              <h4 id="intro-video-title">{dict.videoTitle}</h4>
              <p>{dict.videoText}</p>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="intro-side">
          <Image
            className="bigmark"
            src={prosoxMark}
            alt={dict.markAlt}
            priority
          />
          <p className="claim">{dict.claim}</p>
          <p className="claim-sub">{dict.claimSub}</p>
        </Reveal>
      </div>
    </section>
  );
}
