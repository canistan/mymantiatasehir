import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "My Mantı Ataşehir'in hikayesi. Elde açılan yufka, günlük hazırlanan hamur, katkısız ve taze ev yapımı lezzetler.",
};

export default function Hakkimizda() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-label">Hikayemiz</span>
            <h1 className="section-title">Hakkımızda</h1>
            <p className="section-subtitle">
              Ataşehir'den sofralarınıza uzanan lezzet yolculuğumuz.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <h2>Biz Kimiz?</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '12px' }}>
                My Mantı olarak, geleneksel Türk mutfağının en seçkin lezzetlerini
                Ataşehir'deki mutfağımızda hazırlıyoruz. Amacımız, seri üretim
                gıdaların yaygınlaştığı günümüzde, tamamen el yapımı, katkısız ve
                taze lezzetleri sofralarınızla buluşturmaktır.
              </p>
            </div>

            <div>
              <h2>Üretim Felsefemiz</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '12px' }}>
                Ürünlerimizde hiçbir koruyucu katkı maddesi kullanmıyoruz. Tüm
                siparişleri günlük olarak, taptaze malzemelerle hazırlıyoruz:
                gerçek dana eti, birinci sınıf un ve doğal zeytinyağı. Mantılarımızı
                dondurmadan, taze taze teslim etmeye özen gösteriyoruz.
              </p>
            </div>

            <div>
              <h2>Hizmetlerimiz</h2>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '2', marginTop: '12px' }}>
                <li>Günlük, taze kiloluk veya porsiyonluk ev siparişleri</li>
                <li>Doğum günü, nişan ve özel günler için butik catering</li>
                <li>İşyerleri için kurumsal ve toplu yemek çözümleri</li>
                <li>Düğün organizasyonları için özel menü hazırlama</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Bizimle Tanışın</h2>
            <p>Sorularınız veya siparişleriniz için bize ulaşın.</p>
            <a href="/iletisim" className="btn btn-primary">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
