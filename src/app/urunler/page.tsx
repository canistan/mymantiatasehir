import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description:
    "Kayseri mantısı, Sinop mantısı, yaprak sarma, içli köfte, çi börek ve daha fazlası. Sipariş üzerine günlük taze hazırlanır.",
};

const products = [
  {
    name: "Kayseri Mantısı",
    desc: "İncecik elde açılmış hamur, bol dana kıymalı iç harç. Geleneksel tarifle, sarımsaklı yoğurt ve tereyağlı sos ile servis edilir.",
    emoji: "🥟",
  },
  {
    name: "Sinop Mantısı",
    desc: "Cevizli ve tereyağlı özel sunumuyla, kulak şeklinde bükülen Karadeniz yöresi mantısı.",
    emoji: "🥟",
  },
  {
    name: "Çıtır Mantı",
    desc: "Kızartılarak hazırlanan, sarımsaklı yoğurtla mükemmel uyum sağlayan çıtır dışlı mantı.",
    emoji: "🥟",
  },
  {
    name: "Ispanaklı Mantı",
    desc: "Taze ıspanak ile hazırlanan hafif ve besleyici mantı çeşidimiz.",
    emoji: "🥟",
  },
  {
    name: "Patatesli Mantı",
    desc: "Patates püresi iç harcıyla hazırlanan, vejeteryanlar için ideal mantı seçeneği.",
    emoji: "🥟",
  },
  {
    name: "Zeytinyağlı Yaprak Sarma",
    desc: "Özenle seçilmiş Tokat yaprağı, kuş üzümü, çam fıstığı ve bol baharatlı pirinç iç harcıyla elle sarılır.",
    emoji: "🍃",
  },
  {
    name: "Mercimek Köftesi",
    desc: "Taze yeşilliklerle hazırlanmış, tam kıvamında, el ile şekillendirilmiş anne usulü mercimek köftesi.",
    emoji: "🧆",
  },
  {
    name: "Çi Börek",
    desc: "İçindeki sulu kıyması ve incecik kızarmış hamuruyla hazırlanan geleneksel Tatar lezzeti.",
    emoji: "🥟",
  },
  {
    name: "Haşlama İçli Köfte",
    desc: "İncecik bulgur hamuruyla haşlanmış, daha hafif bir alternatif arayanlar için ideal içli köfte.",
    emoji: "🥟",
  },
  {
    name: "Kızartma İçli Köfte",
    desc: "İncecik bulgur dış kabuğu, bol cevizli ve baharatlı et harcıyla doldurulup çıtır çıtır kızartılır.",
    emoji: "🥟",
  },
  {
    name: "Sigara Böreği",
    desc: "İnce yufkaya sarılmış peynirli harçla hazırlanan, çıtır dışlı klasik sigara böreği.",
    emoji: "🥐",
  },
  {
    name: "Paçanga Böreği",
    desc: "Bol pastırmalı ve kaşarlı harçla hazırlanan, kızartılmış nefis paçanga böreği.",
    emoji: "🥐",
  },
];

export default function Urunler() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Menümüz</span>
            <h1 className="section-title">Ürünlerimiz</h1>
            <p className="section-subtitle">
              Sipariş üzerine, tamamen katkısız ve günlük hazırlanan el yapımı lezzetler.
              Kiloluk veya porsiyonluk sipariş verebilirsiniz.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.name} className="product-card">
                <div className="product-img placeholder-img">
                  <span>{product.emoji} {product.name}</span>
                </div>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <a
                    href={`#teklif-al?product=${encodeURIComponent(product.name)}`}
                    className="btn btn-primary w-full"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Toplu Sipariş mi Vermek İstiyorsunuz?</h2>
            <p>
              Organizasyonlarınız için kiloluk özel paketler hazırlıyoruz. Bize ulaşın, menünüzü birlikte oluşturalım.
            </p>
            <a href="#teklif-al" className="btn btn-primary">
              Toplu Sipariş Teklifi Al
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
