import type { Metadata } from "next";
import "./globals.css";
import OfferModal from "@/components/OfferModal";

export const metadata: Metadata = {
  title: "My Manti Ataşehir",
  description: "Ataşehir'in el yapımı, taze mantı ve catering lezzetleri.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <header className="navbar glass">
          <div className="container nav-container">
            <a href="/" className="logo">
              <span className="logo-icon">🥟</span>
              <span className="logo-text">My Manti</span>
            </a>
            <nav className="desktop-nav">
              <a href="/" className="nav-link">Ana Sayfa</a>
              <a href="/urunler" className="nav-link">Ürünlerimiz</a>
              <a href="/organizasyonlar" className="nav-link">Organizasyonlar</a>
              <a href="/iletisim" className="nav-link">İletişim</a>
            </nav>
            <a href="https://wa.me/905349789859" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Sipariş Ver
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-container">
            <div className="footer-brand">
              <span className="logo-icon">🥟</span>
              <h3>My Manti Ataşehir</h3>
              <p>Ataşehir'in el yapımı, katkısız ve taze lezzetleri. Sipariş üzerine günlük üretim yapıyoruz.</p>
            </div>
            <div className="footer-links">
              <h4>Hızlı Menü</h4>
              <a href="/urunler">Tüm Ürünler</a>
              <a href="/organizasyonlar">Catering</a>
              <a href="/iletisim">Bize Ulaşın</a>
            </div>
            <div className="footer-contact">
              <h4>İletişim</h4>
              <p>📍 Atatürk, Sedef Cd, Ata 3/4 blok girişi yanı No:12/53, Ataşehir/İstanbul</p>
              <p>📞 +90 534 978 98 59</p>
              <p>🕒 Her gün: 09:00 - 18:00</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} My Manti Ataşehir. Tüm hakları saklıdır.</p>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/905349789859" className="floating-wa" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        
        <OfferModal />
      </body>
    </html>
  );
}
