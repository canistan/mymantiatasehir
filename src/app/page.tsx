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
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/kayseri_manti.png" alt="Kayseri Mantısı" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Kayseri Mantısı</h3>
                <p>İncecik elde açılmış hamur, bol dana kıymalı iç harç. Sarımsaklı yoğurt ve tereyağlı sos ile servis edilir.</p>
                <a href="#teklif-al?product=Kayseri%20Mantısı" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/yaprak_sarma.png" alt="Zeytinyağlı Yaprak Sarma" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Zeytinyağlı Yaprak Sarma</h3>
                <p>Tokat yaprağı, kuş üzümü, çam fıstığı ve bol baharatlı pirinç iç harcıyla elle sarılır.</p>
                <a href="#teklif-al?product=Yaprak%20Sarma" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/icli_kofte.png" alt="Kızartma İçli Köfte" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Kızartma İçli Köfte</h3>
                <p>İncecik bulgur dış kabuğu, cevizli ve baharatlı et harcıyla doldurulup çıtır çıtır kızartılır.</p>
                <a href="#teklif-al?product=İçli%20Köfte" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/sinop_mantisi.png" alt="Sinop Mantısı" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Sinop Mantısı</h3>
                <p>Cevizli ve tereyağlı özel sunumuyla, kulak şeklinde bükülen Karadeniz yöresi mantısı.</p>
                <a href="#teklif-al?product=Sinop%20Mantısı" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/ci_borek.png" alt="Çi Börek" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Çi Börek</h3>
                <p>İçindeki sulu kıyması ve incecik kızarmış hamuruyla hazırlanan geleneksel Tatar lezzeti.</p>
                <a href="#teklif-al?product=Çi%20Börek" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img">
                <img src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/sigara_boregi.png" alt="Sigara Böreği" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>Sigara Böreği</h3>
                <p>İnce yufkaya sarılmış peynirli harçla hazırlanan, çıtır dışlı klasik sigara böreği.</p>
                <a href="#teklif-al?product=Sigara%20Böreği" className="btn btn-primary w-full">Teklif Al</a>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <img 
                src="https://oihkz1j4leutrndm.public.blob.vercel-storage.com/mymanti/catering_sofrasi.png" 
                alt="My Mantı Catering Sofrası" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', aspectRatio: '4/3', objectFit: 'cover' }} 
              />
            </div>
            
            <div className="services-grid" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
              <div className="service-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="service-icon" style={{ marginBottom: 0, fontSize: '2.5rem' }}>🎂</div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>Doğum Günleri</h3>
                  <p style={{ marginBottom: '12px' }}>Çocuklarınız ve sevdikleriniz için sağlıklı, ev yapımı ikramlıklar.</p>
                  <a href="/organizasyonlar" className="btn btn-ghost" style={{ padding: 0 }}>Detaylar</a>
                </div>
              </div>

              <div className="service-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="service-icon" style={{ marginBottom: 0, fontSize: '2.5rem' }}>💍</div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>Nişan & Söz</h3>
                  <p style={{ marginBottom: '12px' }}>Misafirlerinize ikram edebileceğiniz zarif ve lezzetli tabaklar.</p>
                  <a href="/organizasyonlar" className="btn btn-ghost" style={{ padding: 0 }}>Detaylar</a>
                </div>
              </div>

              <div className="service-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="service-icon" style={{ marginBottom: 0, fontSize: '2.5rem' }}>🏢</div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>Kurumsal</h3>
                  <p style={{ marginBottom: '12px' }}>Şirket etkinlikleri, toplantılar ve personel yemekleri için özel menüler.</p>
                  <a href="/organizasyonlar" className="btn btn-ghost" style={{ padding: 0 }}>Detaylar</a>
                </div>
              </div>
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
