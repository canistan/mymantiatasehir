export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content container glass animate-fade-in">
          <span className="hero-badge">El Yapımı & Günlük Üretim</span>
          <h1>Ataşehir'in En Lezzetli<br/>Mantı ve Ev Yemekleri</h1>
          <p>
            Geleneksel tariflerle, katkısız ve taze malzemelerle hazırlanan 
            lezzetlerimiz kapınıza geliyor. Catering, organizasyon veya günlük siparişleriniz için buradayız.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/905349789859" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Hemen Sipariş Ver
            </a>
            <a href="/urunler" className="btn btn-outline">
              Menüyü İncele
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Öne Çıkan Lezzetlerimiz</h2>
          <p className="section-subtitle">
            Tamamen el yapımı, doğal malzemelerle hazırladığımız imza ürünlerimiz
          </p>
          
          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                {/* Placeholder Image */}
                <span>🥟 Kayseri Mantısı</span>
              </div>
              <div className="product-info">
                <h3>Klasik Kayseri Mantısı</h3>
                <p>İncecik hamuru, bol dana kıymalı iç harcıyla geleneksel lezzet. (Kiloluk veya porsiyonluk)</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Kayseri%20Mantısı%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🍃 Zeytinyağlı Yaprak Sarma</span>
              </div>
              <div className="product-info">
                <h3>Zeytinyağlı Yaprak Sarma</h3>
                <p>Tokat yaprağı ile hazırlanmış, kuş üzümlü ve fıstıklı nefis zeytinyağlı sarmamız.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Yaprak%20Sarma%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 İçli Köfte</span>
              </div>
              <div className="product-info">
                <h3>Kızartma İçli Köfte</h3>
                <p>İncecik bulgur dış harcı ve bol cevizli, baharatlı iç harcıyla çıtır çıtır içli köfte.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20İçli%20Köfte%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>
          </div>
          
          <div className="center-btn mt-12">
            <a href="/urunler" className="btn btn-primary">Tüm Ürünleri Gör</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Organizasyon & Catering</h2>
          <p className="section-subtitle">
            Özel günlerinizde misafirlerinizi eşsiz lezzetlerle ağırlayın. Düğün, nişan, doğum günü ve kurumsal etkinlikler için toplu sipariş alıyoruz.
          </p>

          <div className="services-grid">
            <div className="service-card glass">
              <div className="service-icon">🎂</div>
              <h3>Doğum Günleri</h3>
              <p>Çocuklarınız ve sevdikleriniz için sağlıklı, ev yapımı ikramlıklar.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">💍</div>
              <h3>Nişan & Söz</h3>
              <p>Misafirlerinize ikram edebileceğiniz şık ve lezzetli tabaklar.</p>
            </div>
            <div className="service-card glass">
              <div className="service-icon">🏢</div>
              <h3>Kurumsal Catering</h3>
              <p>Şirket etkinlikleri, toplantılar ve personel yemekleri için özel menüler.</p>
            </div>
          </div>
          
          <div className="center-btn mt-12">
            <a href="/organizasyonlar" className="btn btn-outline">Detaylı Bilgi Al</a>
          </div>
        </div>
      </section>
    </>
  );
}
