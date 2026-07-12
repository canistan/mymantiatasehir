import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "My Mantı Ataşehir — Kişisel verilerin korunması ve gizlilik politikamız.",
};

export default function GizlilikPolitikasi() {
  return (
    <div className="legal-page">
      <div className="container-narrow">
        <h1>Gizlilik Politikası</h1>
        <p><em>Son güncelleme: Temmuz 2026</em></p>

        <h2>1. Genel</h2>
        <p>
          My Mantı Ataşehir ("Biz") olarak, gizliliğinize önem veriyoruz.
          Bu politika, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi
          kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı
          ve koruduğumuzu açıklamaktadır.
        </p>

        <h2>2. Toplanan Bilgiler</h2>
        <p>Sitemiz aracılığıyla aşağıdaki bilgiler toplanabilir:</p>
        <ul>
          <li><strong>Sipariş formu:</strong> Ad, soyad, telefon numarası, adres, sipariş notu</li>
          <li><strong>Otomatik veriler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar (çerezler aracılığıyla)</li>
        </ul>

        <h2>3. Bilgilerin Kullanımı</h2>
        <ul>
          <li>Sipariş ve teklif taleplerinizi işlemek</li>
          <li>Sizinle iletişim kurmak (telefon veya WhatsApp)</li>
          <li>Site deneyimini iyileştirmek</li>
          <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        </ul>

        <h2>4. Bilgilerin Paylaşımı</h2>
        <p>
          Kişisel bilgileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
          Yalnızca yasal zorunluluk durumunda yetkili kurumlara aktarılabilir.
        </p>

        <h2>5. Veri Güvenliği</h2>
        <p>
          Kişisel verilerinizin güvenliği için SSL şifreleme ve güvenli veri
          tabanı sistemleri kullanmaktayız. Ancak internet üzerinden hiçbir
          veri iletim yöntemi %100 güvenli değildir.
        </p>

        <h2>6. İletişim</h2>
        <p>
          Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
          <br />
          <strong>Telefon:</strong> +90 534 978 98 59
        </p>
      </div>
    </div>
  );
}
