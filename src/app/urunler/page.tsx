import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz - My Manti Ataşehir",
  description: "Ataşehir'in en taze, el yapımı mantı ve ev yemekleri menüsü.",
};

export default function Urunler() {
  return (
    <div className="pt-24 pb-12">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Ürünlerimiz</h1>
          <p className="section-subtitle">
            Sipariş üzerine, tamamen katkısız ve günlük hazırlanan el yapımı lezzetlerimiz. 
            İster kiloluk, ister porsiyonluk sipariş verebilirsiniz.
          </p>

          <div className="products-grid">
            {/* Mantı Kategorisi */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Kayseri Mantısı</span>
              </div>
              <div className="product-info">
                <h3>Kayseri Mantısı</h3>
                <p>İncecik hamur, bol dana kıymalı iç harç. Klasik ve vazgeçilmez lezzet.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Kayseri%20Mantısı%20siparişi%20vermek%20istiyorum." className="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Sinop Mantısı</span>
              </div>
              <div className="product-info">
                <h3>Sinop Mantısı</h3>
                <p>Cevizli ve tereyağlı özel sunumuyla, kulak şeklinde bükülen yöresel lezzet.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Sinop%20Mantısı%20siparişi%20vermek%20istiyorum." className="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Çıtır Mantı</span>
              </div>
              <div className="product-info">
                <h3>Çıtır Mantı</h3>
                <p>Kızartılarak hazırlanan, sarımsaklı yoğurtla mükemmel uyum sağlayan çıtır lezzet.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Çıtır%20Mantı%20siparişi%20vermek%20istiyorum." className="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            {/* Ev Yemekleri Kategorisi */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🍃 Yaprak Sarma</span>
              </div>
              <div className="product-info">
                <h3>Zeytinyağlı Yaprak Sarma</h3>
                <p>Özenle seçilmiş Tokat yaprağı, bol baharatlı ve kuş üzümlü iç harcıyla.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Yaprak%20Sarma%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🧆 Mercimek Köftesi</span>
              </div>
              <div className="product-info">
                <h3>Mercimek Köftesi</h3>
                <p>Taze yeşilliklerle hazırlanmış, tam kıvamında anne usulü mercimek köftesi.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Mercimek%20Köftesi%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Çi Börek</span>
              </div>
              <div className="product-info">
                <h3>Çi Börek</h3>
                <p>İçindeki sulu kıyması ve incecik kızarmış hamuruyla efsanevi Tatar lezzeti.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Çi%20Börek%20siparişi%20vermek%20istiyorum." className="btn btn-secondary w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            {/* İçli Köfte & Börek */}
            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Haşlama İçli Köfte</span>
              </div>
              <div className="product-info">
                <h3>Haşlama İçli Köfte</h3>
                <p>Daha hafif bir seçenek arayanlar için incecik bulgur hamuruyla haşlanmış içli köfte.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Haşlama%20İçli%20Köfte%20siparişi%20vermek%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Kızartma İçli Köfte</span>
              </div>
              <div className="product-info">
                <h3>Kızartma İçli Köfte</h3>
                <p>Bol cevizli dış harcıyla çıtır çıtır kızartılmış yöresel içli köftemiz.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Kızartma%20İçli%20Köfte%20siparişi%20vermek%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥐 Paçanga Böreği</span>
              </div>
              <div className="product-info">
                <h3>Paçanga & Sigara Böreği</h3>
                <p>Bol pastırmalı kaşarlı paçanga böreği ve çıtır çıtır peynirli sigara böreği seçenekleri.</p>
                <a href="https://wa.me/905349789859?text=Merhaba,%20Börek%20siparişi%20vermek%20istiyorum." className="btn btn-outline w-full" target="_blank" rel="noopener noreferrer">Teklif Al</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
