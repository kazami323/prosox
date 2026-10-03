import { nav } from "./sections/nav";
import { intro } from "./sections/intro";
import { hero } from "./sections/hero";
import { komu } from "./sections/komu";
import { kak } from "./sections/kak";
import { vid } from "./sections/vid";
import { formaty } from "./sections/formaty";
import { instrumenty } from "./sections/instrumenty";
import { cobi } from "./sections/cobi";
import { zakon } from "./sections/zakon";
import { ceny } from "./sections/ceny";
import { faq } from "./sections/faq";
import { materialy } from "./sections/materialy";
import { zayavka } from "./sections/zayavka";
import { footer } from "./sections/footer";

export const ru = {
  nav: nav.ru,
  intro: intro.ru,
  hero: hero.ru,
  komu: komu.ru,
  kak: kak.ru,
  vid: vid.ru,
  formaty: formaty.ru,
  instrumenty: instrumenty.ru,
  cobi: cobi.ru,
  zakon: zakon.ru,
  ceny: ceny.ru,
  faq: faq.ru,
  materialy: materialy.ru,
  zayavka: zayavka.ru,
  footer: footer.ru,
};

/** Форма словаря выводится из русского: section() уже гарантирует,
 *  что en и vi повторяют её ключ в ключ. */
export type Dictionary = typeof ru;
