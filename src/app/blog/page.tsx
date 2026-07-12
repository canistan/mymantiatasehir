import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My Mantı Ataşehir'den yemek tarifleri, mutfak ipuçları ve organizasyon rehberleri.",
};

export default function Blog() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Blog</span>
            <h1 className="section-title">Yazılarımız</h1>
            <p className="section-subtitle">
              Yemek tarifleri, mutfak ipuçları ve organizasyon rehberleri.
            </p>
          </div>

          <div className="blog-grid">
            {/* Blog yazıları Payload CMS'ten gelecek — şimdilik placeholder */}
            <div className="blog-card">
              <div className="blog-card-img placeholder-img">
                <span>📝 Yakında</span>
              </div>
              <div className="blog-card-body">
                <span className="blog-card-date">Çok Yakında</span>
                <h3>İlk blog yazımız yolda!</h3>
                <p>Geleneksel tarifler, mutfak sırları ve organizasyon ipuçları ile çok yakında buradayız.</p>
                <span className="btn btn-ghost">Takipte kalın</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
