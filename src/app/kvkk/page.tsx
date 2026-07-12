import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "My Mantı Ataşehir — 6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
};

export default function KVKK() {
  return (
    <div className="legal-page">
      <div className="container-narrow">
        <h1>KVKK Aydınlatma Metni</h1>
        <p><em>Son güncelleme: Temmuz 2026</em></p>

        <h2>1. Veri Sorumlusu</h2>
        <p>
          My Mantı Ataşehir ("İşletme") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan
          amaçlar doğrultusunda işlemekteyiz.
        </p>
        <p>
          <strong>İletişim:</strong> Atatürk, Sedef Cd, Ata 3/4 blok girişi yanı No:12/53, 34758 Ataşehir/İstanbul
          <br />
          <strong>Telefon:</strong> +90 534 978 98 59
        </p>

        <h2>2. İşlenen Kişisel Veriler</h2>
        <p>Sitemiz üzerinden aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
        <ul>
          <li>Ad ve soyadı</li>
          <li>Telefon numarası</li>
          <li>Teslimat / etkinlik adresi</li>
          <li>Sipariş ve teklif içeriği (ürün tercihi, miktar, özel notlar)</li>
          <li>İnternet sitesi ziyaret verileri (çerezler aracılığıyla toplanan veriler)</li>
        </ul>

        <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul>
          <li>Sipariş ve teklif taleplerinin alınması ve işlenmesi</li>
          <li>Müşteri ile iletişim kurulması</li>
          <li>Ürün ve hizmetlerin sunulması, teslimat sürecinin yönetimi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Site performansının iyileştirilmesi</li>
        </ul>

        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <p>
          Kişisel verileriniz, yasal zorunluluklar ve yukarıda belirtilen amaçlar dışında
          üçüncü kişilerle paylaşılmamaktadır. WhatsApp üzerinden iletişim kurduğunuzda,
          mesajlarınız Meta Platforms, Inc. tarafından işlenmektedir.
        </p>

        <h2>5. Haklarınız</h2>
        <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          <li>KVKK'nın 7. maddesinde öngörülen koşullar çerçevesinde silinmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
        </ul>
        <p>
          Haklarınızı kullanmak için yukarıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
