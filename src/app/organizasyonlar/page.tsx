import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizasyonlar & Catering - My Manti Ataşehir",
  description: "Düğün, nişan, doğum günü ve kurumsal etkinlikleriniz için özel catering ve toplu sipariş hizmetleri.",
};

export default function Organizasyonlar() {
  return (
    <div className="pt-24 pb-12">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Organizasyon & Catering</h1>
          <p className="section-subtitle">
            Özel günlerinizde misafirlerinizi eşsiz lezzetlerle ağırlayın. Düğün, nişan, doğum günü ve kurumsal etkinlikler için toplu sipariş alıyoruz.
          </p>

          <div className="services-grid mt-12">
            <div className="service-card glass">
              <div className="service-icon">🎂</div>
              <h3>Doğum Günleri</h3>
              <p className="mb-6">Çocuklarınız ve sevdikleriniz için sağlıklı, ev yapımı ikramlıklar. Menüyü size özel tasarlıyoruz.</p>
              <a href="https://wa.me/905349789859?text=Merhaba,%20Doğum%20günü%20catering%20hizmeti%20için%20bilgi%20almak%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Bilgi Al</a>
            </div>

            <div className="service-card glass">
              <div className="service-icon">💍</div>
              <h3>Nişan & Söz Törenleri</h3>
              <p className="mb-6">Misafirlerinize ikram edebileceğiniz şık ve lezzetli tabaklar. Zeytinyağlılar ve ara sıcaklarla zengin menüler.</p>
              <a href="https://wa.me/905349789859?text=Merhaba,%20Nişan/Söz%20catering%20hizmeti%20için%20bilgi%20almak%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Bilgi Al</a>
            </div>

            <div className="service-card glass">
              <div className="service-icon">🏢</div>
              <h3>Kurumsal Etkinlikler</h3>
              <p className="mb-6">Şirket etkinlikleri, toplantılar ve özel davetler için porsiyonluk veya açık büfe ev yemekleri.</p>
              <a href="https://wa.me/905349789859?text=Merhaba,%20Kurumsal%20catering%20hizmeti%20için%20bilgi%20almak%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Bilgi Al</a>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon">👰‍♀️</div>
              <h3>Düğün Yemekleri</h3>
              <p className="mb-6">Düğün organizasyonlarınız için geleneksel ve doyurucu ev yapımı özel menüler hazırlıyoruz.</p>
              <a href="https://wa.me/905349789859?text=Merhaba,%20Düğün%20yemeği%20catering%20hizmeti%20için%20bilgi%20almak%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Bilgi Al</a>
            </div>
          </div>

          <div className="mt-12 bg-alt p-8" style={{ borderRadius: 'var(--radius-lg)', textAlign: 'center', padding: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--primary)' }}>Özel Menü Oluşturalım!</h3>
            <p style={{ marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
              İhtiyaçlarınıza, misafir sayınıza ve damak tadınıza uygun tamamen size özel bir menü planlayabiliriz. Detayları görüşmek için hemen WhatsApp üzerinden bize ulaşın.
            </p>
            <a href="https://wa.me/905349789859?text=Merhaba,%20Özel%20bir%20organizasyon%20için%20menü%20planlamak%20istiyorum." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              WhatsApp'tan İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
