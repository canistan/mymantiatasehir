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
                <a href="#teklif-al?product=Kayseri%20Mantısı" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Sinop Mantısı</span>
              </div>
              <div className="product-info">
                <h3>Sinop Mantısı</h3>
                <p>Cevizli ve tereyağlı özel sunumuyla, kulak şeklinde bükülen yöresel lezzet.</p>
                <a href="#teklif-al?product=Sinop%20Mantısı" className="btn btn-primary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Çıtır Mantı</span>
              </div>
              <div className="product-info">
                <h3>Çıtır Mantı</h3>
                <p>Kızartılarak hazırlanan, sarımsaklı yoğurtla mükemmel uyum sağlayan çıtır lezzet.</p>
                <a href="#teklif-al?product=Çıtır%20Mantı" className="btn btn-primary w-full">Teklif Al</a>
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
                <a href="#teklif-al?product=Yaprak%20Sarma" className="btn btn-secondary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🧆 Mercimek Köftesi</span>
              </div>
              <div className="product-info">
                <h3>Mercimek Köftesi</h3>
                <p>Taze yeşilliklerle hazırlanmış, tam kıvamında anne usulü mercimek köftesi.</p>
                <a href="#teklif-al?product=Mercimek%20Köftesi" className="btn btn-secondary w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Çi Börek</span>
              </div>
              <div className="product-info">
                <h3>Çi Börek</h3>
                <p>İçindeki sulu kıyması ve incecik kızarmış hamuruyla efsanevi Tatar lezzeti.</p>
                <a href="#teklif-al?product=Çi%20Börek" className="btn btn-secondary w-full">Teklif Al</a>
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
                <a href="#teklif-al?product=Haşlama%20İçli%20Köfte" className="btn btn-outline w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥟 Kızartma İçli Köfte</span>
              </div>
              <div className="product-info">
                <h3>Kızartma İçli Köfte</h3>
                <p>Bol cevizli dış harcıyla çıtır çıtır kızartılmış yöresel içli köftemiz.</p>
                <a href="#teklif-al?product=Kızartma%20İçli%20Köfte" className="btn btn-outline w-full">Teklif Al</a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img placeholder-img">
                <span>🥐 Paçanga Böreği</span>
              </div>
              <div className="product-info">
                <h3>Paçanga & Sigara Böreği</h3>
                <p>Bol pastırmalı kaşarlı paçanga böreği ve çıtır çıtır peynirli sigara böreği seçenekleri.</p>
                <a href="#teklif-al?product=Börek%20Çeşitleri" className="btn btn-outline w-full">Teklif Al</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
