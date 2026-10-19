import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span className="site-footer__name">Lisa Vandenhoeck</span>
        <nav aria-label="Footer Navigation">
          <ul className="site-footer__list">
            <li>
              <Link href="/impressum/" className="site-footer__link">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz/" className="site-footer__link">
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
        <p className="site-footer__copy">© 2025 Lisa Vandenhoeck</p>
      </div>
    </footer>
  );
}
