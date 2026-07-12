import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "My Mantı Ataşehir — Web sitemizde kullanılan çerezler hakkında bilgilendirme.",
};

export default function CerezPolitikasi() {
  return (
    <div className="legal-page">
      <div className="container-narrow">
        <h1>Çerez Politikası</h1>
        <p><em>Son güncelleme: Temmuz 2026</em></p>

        <h2>1. Çerez Nedir?</h2>
        <p>
          Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla
          cihazınıza yerleştirilen küçük metin dosyalarıdır. Çerezler, siteyi
          daha verimli çalıştırmak ve site sahiplerine bilgi sağlamak için kullanılır.
        </p>

        <h2>2. Kullanılan Çerez Türleri</h2>

        <h3>Zorunlu Çerezler</h3>
        <p>
          Sitenin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler
          olmadan site düzgün çalışmaz. Örnek: oturum çerezleri, çerez tercih
          kaydı.
        </p>

        <h3>Analitik Çerezler</h3>
        <p>
          Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan
          çerezlerdir (Google Analytics gibi). Bu veriler anonim olarak toplanır.
        </p>

        <h2>3. Çerezleri Yönetme</h2>
        <p>
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilir veya
          silebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak, sitenin
          bazı özelliklerinin düzgün çalışmamasına neden olabilir.
        </p>
        <p>Çerez ayarları tarayıcıya göre değişir:</p>
        <ul>
          <li>Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
          <li>Firefox: Ayarlar → Gizlilik ve güvenlik</li>
          <li>Safari: Tercihler → Gizlilik</li>
          <li>Edge: Ayarlar → Çerezler ve site izinleri</li>
        </ul>

        <h2>4. İletişim</h2>
        <p>
          Çerez politikamız hakkında sorularınız için{" "}
          <a href="/iletisim" style={{ color: 'var(--cta)' }}>iletişim sayfamızdan</a> bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
