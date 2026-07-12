import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import OfferModal from "@/components/OfferModal";
import CookieConsent from "@/components/CookieConsent";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "My Mantı Ataşehir — Ev Yapımı, Günlük Taze",
    template: "%s — My Mantı Ataşehir",
  },
  description:
    "Ataşehir'de el yapımı mantı, yaprak sarma, içli köfte ve daha fazlası. Sipariş üzerine günlük taze üretim. Catering ve organizasyonlar için toplu sipariş.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Navbar */}
        <header className="navbar">
          <div className="container nav-container">
            <a href="/" className="logo">
              <span className="logo-text">my mantı</span>
            </a>

            <nav className="desktop-nav">
              <a href="/" className="nav-link">Ana Sayfa</a>
              <a href="/urunler" className="nav-link">Ürünler</a>
              <a href="/organizasyonlar" className="nav-link">Catering</a>
              <a href="/hakkimizda" className="nav-link">Hakkımızda</a>
              <a href="/iletisim" className="nav-link">İletişim</a>
            </nav>

            <a
              href="#teklif-al"
              className="btn btn-primary nav-cta"
            >
              Sipariş Ver
            </a>

            <button className="mobile-toggle" aria-label="Menüyü aç" id="mobile-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        <nav className="mobile-nav" id="mobile-nav">
          <a href="/" className="nav-link">Ana Sayfa</a>
          <a href="/urunler" className="nav-link">Ürünler</a>
          <a href="/organizasyonlar" className="nav-link">Catering</a>
          <a href="/hakkimizda" className="nav-link">Hakkımızda</a>
          <a href="/iletisim" className="nav-link">İletişim</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="#teklif-al" className="btn btn-primary w-full">Sipariş Ver</a>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3>my mantı</h3>
                <p>
                  Ataşehir'de sipariş üzerine, günlük taze ve el yapımı
                  lezzetler. Kilo bazlı teslimat, catering ve organizasyon
                  hizmetleri.
                </p>
              </div>

              <div className="footer-col">
                <h4>Menü</h4>
                <a href="/urunler">Ürünlerimiz</a>
                <a href="/organizasyonlar">Catering</a>
                <a href="/blog">Blog</a>
                <a href="/iletisim">İletişim</a>
              </div>

              <div className="footer-col">
                <h4>Bilgi</h4>
                <a href="/hakkimizda">Hakkımızda</a>
                <a href="/sss">SSS</a>
                <a href="/teslimat-ve-iade">Teslimat & İade</a>
              </div>

              <div className="footer-col">
                <h4>Yasal</h4>
                <a href="/kvkk">KVKK Aydınlatma</a>
                <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
                <a href="/cerez-politikasi">Çerez Politikası</a>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} My Mantı Ataşehir. Tüm hakları saklıdır. — Atatürk, Sedef Cd, Ata 3/4 blok girişi yanı No:12/53, Ataşehir/İstanbul — +90 534 978 98 59</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/905349789859"
          className="floating-wa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        <OfferModal />
        <CookieConsent />

        {/* Mobile menu toggle script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                var toggle = document.getElementById('mobile-toggle');
                var nav = document.getElementById('mobile-nav');
                if (toggle && nav) {
                  toggle.addEventListener('click', function() {
                    nav.classList.toggle('active');
                  });
                  nav.querySelectorAll('a').forEach(function(link) {
                    link.addEventListener('click', function() {
                      nav.classList.remove('active');
                    });
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
