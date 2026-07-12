import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "My Mantı Ataşehir ile iletişime geçin. Sipariş, teklif veya bilgi almak için bize ulaşın.",
};

export default function Iletisim() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Bize Ulaşın</span>
            <h1 className="section-title">İletişim</h1>
            <p className="section-subtitle">
              Sipariş vermek veya organizasyonlarınız için teklif almak için bizimle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>İletişim Bilgileri</h3>

              <div className="contact-item">
                <h4>Telefon & WhatsApp</h4>
                <p>+90 534 978 98 59</p>
                <a
                  href="https://wa.me/905349789859"
                  className="btn btn-primary mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp'tan Yazın
                </a>
              </div>

              <div className="contact-item">
                <h4>Adres</h4>
                <p>
                  Atatürk, Sedef Cd, Ata 3/4 blok girişi yanı No:12/53,
                  <br />
                  34758 Ataşehir/İstanbul
                </p>
              </div>

              <div className="contact-item">
                <h4>Çalışma Saatleri</h4>
                <p>Her Gün: 09:00 – 18:00</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  Toplu siparişler için lütfen en az 1 gün önceden sipariş veriniz.
                </p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650630656754!2d29.123282276550794!3d40.98909187135311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac63e4cd3bbdd%3A0xc6ba6a771960d7f5!2sAtat%C3%BCrk%2C%20Sedef%20Cd.%20Ata%203%2F4%20blok%2C%2034758%20Ata%C3%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Mantı Ataşehir konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
