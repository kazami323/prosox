import { rich } from "@/i18n/rich";
import type { Dictionary } from "@/i18n";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          {rich(dict.brand)}
          <br />
          <span>
            {dict.portfolio} <a href="https://prosox.io">prosox.io</a>
          </span>
        </div>
        <div className="fam">
          <span>{dict.proxy}</span>
          <span className="cur">{dict.webData}</span>
          <span>{dict.cobi}</span>
        </div>
      </div>
    </footer>
  );
}
