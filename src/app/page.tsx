export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-label">Ev Yapımı · Günlük Taze</span>
          <h1>Ataşehir'den Sofranıza El Yapımı Lezzetler</h1>
          <p className="hero-desc">
            Elde açılan yufka, günlük hazırlanan hamur, kilo bazlı taze teslim.
            Mantı, sarma, börek ve daha fazlası — sipariş üzerine hazırlanır.
          </p>
          <div className="hero-actions">
            <a href="#teklif-al" className="btn btn-primary">
              Sipariş Ver
            </a>
            <a href="/urunler" className="btn btn-outline">
              Menüyü İncele
            </a>
          </div>

          <div className="hero-banner">
            <img
              src="/PHOTO-2026-07-11-16-26-11.jpg"
              alt="My Mantı — Kayseri mantısı, yaprak sarma, içli köfte, sigara böreği ve çi börek"
              width={1200}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Lezzetlerimiz</span>
            <h2 className="section-title">Öne Çıkan Ürünler</h2>
            <p className="section-subtitle">
              Sipariş üzerine, tamamen katkısız ve günlük hazırlanan el yapımı tariflerimiz.
            </p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>Kayseri Mantısı</span>
              </div>
              <div className="product-body">
                <h3>Kayseri Mantısı</h3>
                <p>İncecik elde açılmış hamur, bol dana kıymalı iç harç. Sarımsaklı yoğurt ve tereyağlı sos ile servis edilir.</p>
                <a href="#teklif-al?product=Kayseri%20Mantısı" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>Yaprak Sarma</span>
              </div>
              <div className="product-body">
                <h3>Zeytinyağlı Yaprak Sarma</h3>
                <p>Tokat yaprağı, kuş üzümü, çam fıstığı ve bol baharatlı pirinç iç harcıyla elle sarılır.</p>
                <a href="#teklif-al?product=Yaprak%20Sarma" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>İçli Köfte</span>
              </div>
              <div className="product-body">
                <h3>Kızartma İçli Köfte</h3>
                <p>İncecik bulgur dış kabuğu, cevizli ve baharatlı et harcıyla doldurulup çıtır çıtır kızartılır.</p>
                <a href="#teklif-al?product=İçli%20Köfte" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/urunler" className="btn btn-ghost">Tüm ürünleri gör</a>
          </div>
        </div>
      </section>

      {/* Nasıl Sipariş Verilir */}
      <section className="section" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Kolay Sipariş</span>
            <h2 className="section-title">Nasıl Sipariş Verilir?</h2>
            <p className="section-subtitle">
              Üç basit adımda taze lezzetler kapınızda.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <h3>Ürün Seçin</h3>
              <p>Menümüzden istediğiniz ürünleri seçip kilogram belirleyin.</p>
            </div>
            <div className="step-card">
              <h3>Formu Doldurun</h3>
              <p>İsim, telefon ve adres bilgilerinizi girin. Talebiniz anında bize ulaşır.</p>
            </div>
            <div className="step-card">
              <h3>WhatsApp'tan Teyit</h3>
              <p>Size WhatsApp üzerinden ulaşıp siparişinizi onaylıyoruz ve teslim ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizasyon & Catering */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Özel Günler</span>
            <h2 className="section-title">Organizasyon & Catering</h2>
            <p className="section-subtitle">
              Düğün, nişan, doğum günü ve kurumsal etkinlikleriniz için özel menüler hazırlıyoruz.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎂</div>
              <h3>Doğum Günleri</h3>
              <p>Çocuklarınız ve sevdikleriniz için sağlıklı, ev yapımı ikramlıklar.</p>
              <a href="/organizasyonlar" className="btn btn-ghost">Detaylar</a>
            </div>
            <div className="service-card">
              <div className="service-icon">💍</div>
              <h3>Nişan & Söz</h3>
              <p>Misafirlerinize ikram edebileceğiniz zarif ve lezzetli tabaklar.</p>
              <a href="/organizasyonlar" className="btn btn-ghost">Detaylar</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Kurumsal</h3>
              <p>Şirket etkinlikleri, toplantılar ve personel yemekleri için özel menüler.</p>
              <a href="/organizasyonlar" className="btn btn-ghost">Detaylar</a>
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
              Misafir sayınıza ve damak tadınıza uygun tamamen size özel bir menü planlayabiliriz.
            </p>
            <a href="#teklif-al" className="btn btn-primary">
              Hemen İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
