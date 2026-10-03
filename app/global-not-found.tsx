import RootShell from "@/components/RootShell";
import { asset } from "@/lib/paths";

export const metadata = { title: "404 — PROSOX" };

/** 404 со своим <html>: у приложения несколько корневых layout, поэтому
 *  обычный not-found.tsx здесь не сработал бы. */
export default function GlobalNotFound() {
  return (
    <RootShell locale="ru">
      <main className="wrap nf">
        <div>
          <a className="mark" href={asset("/")}>
            <b>PROSOX</b>
          </a>
          <span className="kicker">404</span>
          <h1>Страница не найдена</h1>
          <p className="lede">Такой страницы нет или она переехала.</p>
          <div className="nf-links">
            <a className="btn btn--fill" href={asset("/")}>На главную</a>
            <a className="btn btn--wire" href={asset("/en/")}>Home (English)</a>
            <a className="btn btn--wire" href={asset("/vi/")}>Trang chủ (Tiếng Việt)</a>
          </div>
        </div>
      </main>
    </RootShell>
  );
}
