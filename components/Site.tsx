import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import MeshBackground from "@/components/MeshBackground";
import Intro from "@/components/sections/Intro";
import Hero from "@/components/sections/Hero";
import Komu from "@/components/sections/Komu";
import Kak from "@/components/sections/Kak";
import Vid from "@/components/sections/Vid";
import Formaty from "@/components/sections/Formaty";
import Instrumenty from "@/components/sections/Instrumenty";
import Cobi from "@/components/sections/Cobi";
import Zakon from "@/components/sections/Zakon";
import Ceny from "@/components/sections/Ceny";
import Faq from "@/components/sections/Faq";
import Materialy from "@/components/sections/Materialy";
import Zayavka from "@/components/sections/Zayavka";
import { getDictionary, type Locale } from "@/i18n";
import { getPosts } from "@/lib/blog";

/** Главная страница на любом языке. Маршруты /, /en, /vi — тонкие обёртки. */
export default function Site({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const posts = getPosts(locale);

  return (
    <>
      <a className="skip" href="#main">
        {dict.nav.skip}
      </a>
      <Nav dict={dict.nav} locale={locale} />
      <main id="main">
        <div id="top"></div>
        <div className="mesh-host">
          <MeshBackground />
          <Intro dict={dict.intro} locale={locale} />
          <Hero dict={dict.hero} />
        </div>
        <Komu dict={dict.komu} />
        <Kak dict={dict.kak} />
        <Vid dict={dict.vid} />
        <Formaty dict={dict.formaty} />
        <Instrumenty dict={dict.instrumenty} />
        <Cobi dict={dict.cobi} />
        <Zakon dict={dict.zakon} />
        <Ceny dict={dict.ceny} />
        <Faq dict={dict.faq} />
        <Materialy dict={dict.materialy} posts={posts} locale={locale} />
        <Zayavka dict={dict.zayavka} />
      </main>
      <Footer dict={dict.footer} />
      <BackToTop label={dict.nav.toTop} />
    </>
  );
}
