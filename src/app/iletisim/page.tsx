import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - My Manti Ataşehir",
  description: "Bize ulaşın, sipariş verin veya Ataşehir'deki yerimizi ziyaret edin.",
};

export default function Iletisim() {
  return (
    <div className="pt-24 pb-12">
      <section className="section">
        <div className="container">
          <h1 className="section-title">İletişim</h1>
          <p className="section-subtitle">
            Sipariş vermek veya organizasyonlarınız için teklif almak için bizimle doğrudan iletişime geçebilirsiniz.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '40px' }} className="contact-grid">
            {/* İletişim Bilgileri */}
            <div className="contact-info bg-alt" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '24px' }}>Bize Ulaşın</h3>
              
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '8px' }}>Telefon & WhatsApp</h4>
                <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>+90 534 978 98 59</p>
                <a href="https://wa.me/905349789859" className="btn btn-primary" style={{ marginTop: '12px' }} target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Yazın
                </a>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '8px' }}>Adres</h4>
                <p>Atatürk, Sedef Cd, Ata 3/4 blok girişi yanı No:12/53,<br/>34758 Ataşehir/İstanbul</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '8px' }}>Çalışma Saatleri</h4>
                <p>Her Gün: 09:00 - 18:00</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px' }}>* Sipariş üzerine çalıştığımız için toplu alımlar için lütfen önceden sipariş veriniz.</p>
              </div>
            </div>

            {/* Harita */}
            <div className="map-container" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '400px', backgroundColor: '#e5e3df' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650630656754!2d29.123282276550794!3d40.98909187135311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac63e4cd3bbdd%3A0xc6ba6a771960d7f5!2sAtat%C3%BCrk%2C%20Sedef%20Cd.%20Ata%203%2F4%20blok%2C%2034758%20Ata%C3%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stil için küçük eklemeler */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .pt-24 { padding-top: 120px; }
        .pb-12 { padding-bottom: 60px; }
        .mb-6 { margin-bottom: 24px; }
      `}} />
    </div>
  );
}
