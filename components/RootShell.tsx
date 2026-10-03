import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "@/app/globals.css";
import type { Locale } from "@/i18n";
import { htmlLang } from "@/i18n";

const manrope = Manrope({
  subsets: ["latin", "cyrillic", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
  display: "swap",
});

/** Оболочка документа. Вынесена из layout, потому что каждый язык живёт в
 *  своей группе маршрутов со своим корневым layout — только так на <html>
 *  попадает правильный lang, а он нужен и скринридерам, и поисковикам. */
export default function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: инлайн-скрипт ниже дописывает класс "js" до
    // гидратации, поэтому className на <html> заведомо расходится с серверным.
    <html
      lang={htmlLang[locale]}
      className={`${manrope.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      {/* Правило рассчитано на Pages Router и не узнаёт корневую оболочку App
          Router, вынесенную из app/: здесь <head> — штатный способ поставить
          скрипт до первой отрисовки. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
