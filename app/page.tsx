import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Перейти к содержанию
      </a>
      <Nav />
      <main id="main">
        <div id="top"></div>
        <Intro />
        <Hero />
        <Komu />
        <Kak />
        <Vid />
        <Formaty />
        <Instrumenty />
        <Cobi />
        <Zakon />
        <Ceny />
        <Faq />
        <Materialy />
        <Zayavka />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
