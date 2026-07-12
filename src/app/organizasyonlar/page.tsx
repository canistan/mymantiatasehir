import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizasyonlar & Catering",
  description:
    "Düğün, nişan, doğum günü ve kurumsal etkinlikleriniz için özel catering menüleri. Ataşehir'den taze teslimat.",
};

export default function Organizasyonlar() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Özel Günler</span>
            <h1 className="section-title">Organizasyon & Catering</h1>
            <p className="section-subtitle">
              Özel günlerinizde misafirlerinizi eşsiz lezzetlerle ağırlayın.
              Misafir sayınıza ve damak tadınıza göre özel menüler hazırlıyoruz.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎂</div>
              <h3>Doğum Günleri</h3>
              <p>Çocuklarınız ve sevdikleriniz için sağlıklı, ev yapımı ikramlıklar. Menüyü size özel tasarlıyoruz.</p>
              <a href="#teklif-al?product=Doğum%20Günü%20Catering" className="btn btn-outline w-full">Teklif Al</a>
            </div>

            <div className="service-card">
              <div className="service-icon">💍</div>
              <h3>Nişan & Söz Törenleri</h3>
              <p>Misafirlerinize ikram edebileceğiniz zarif ve lezzetli tabaklar. Zeytinyağlılar ve ara sıcaklarla zengin menüler.</p>
              <a href="#teklif-al?product=Nişan%20Catering" className="btn btn-outline w-full">Teklif Al</a>
            </div>

            <div className="service-card">
              <div className="service-icon">👰</div>
              <h3>Düğün Yemekleri</h3>
              <p>Düğün organizasyonlarınız için geleneksel ve doyurucu ev yapımı özel menüler hazırlıyoruz.</p>
              <a href="#teklif-al?product=Düğün%20Catering" className="btn btn-outline w-full">Teklif Al</a>
            </div>

            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Kurumsal Etkinlikler</h3>
              <p>Şirket etkinlikleri, toplantılar ve özel davetler için porsiyonluk veya açık büfe ev yemekleri.</p>
              <a href="#teklif-al?product=Kurumsal%20Catering" className="btn btn-outline w-full">Teklif Al</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Özel Menünüzü Birlikte Oluşturalım</h2>
            <p>
              İhtiyaçlarınıza, misafir sayınıza ve damak tadınıza uygun tamamen size özel bir menü planlayabiliriz.
            </p>
            <a href="#teklif-al?product=Özel%20Organizasyon" className="btn btn-primary">
              WhatsApp'tan İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
