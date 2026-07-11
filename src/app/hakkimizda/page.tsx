import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - My Manti Ataşehir",
  description: "My Manti Ataşehir'in hikayesi, kalite politikamız ve ev yapımı lezzetlerimizin sırrı.",
};

export default function Hakkimizda() {
  return (
    <div className="pt-24 pb-12">
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">Hikayemiz</h1>
            <p className="section-subtitle">
              Ataşehir'den sofralarınıza uzanan lezzet yolculuğumuz.
            </p>

            <div className="bg-alt" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>Biz Kimiz?</h3>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                My Manti olarak, geleneksel Türk mutfağının en seçkin lezzetlerini Ataşehir'deki mutfağımızda, anne hassasiyetiyle hazırlıyoruz. Amacımız, seri üretim gıdaların yaygınlaştığı günümüzde, tamamen el yapımı, katkısız ve taze lezzetleri sofralarınızla buluşturmaktır.
              </p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>Üretim Felsefemiz</h3>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Ürünlerimizde hiçbir koruyucu katkı maddesi kullanmıyoruz. Tüm siparişleri günlük olarak, taptaze malzemelerle (gerçek dana eti, birinci sınıf un ve doğal zeytinyağı) hazırlıyoruz. Mantılarımızı dondurmadan, taze taze teslim etmeye özen gösteriyoruz.
              </p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>Hizmetlerimiz</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', color: 'var(--text-color)' }}>
                <li>Günlük, taze kiloluk veya porsiyonluk ev siparişleri</li>
                <li>Doğum günü, nişan ve özel günler için butik catering</li>
                <li>İşyerleri için kurumsal ve toplu yemek çözümleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
