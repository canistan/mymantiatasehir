import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teslimat ve İade Koşulları",
  description: "My Mantı Ataşehir — Sipariş, teslimat ve iade koşulları hakkında bilgilendirme.",
};

export default function TeslimatVeIade() {
  return (
    <div className="legal-page">
      <div className="container-narrow">
        <h1>Teslimat ve İade Koşulları</h1>
        <p><em>Son güncelleme: Temmuz 2026</em></p>

        <h2>1. Sipariş Süreci</h2>
        <p>
          Siparişler, web sitemiz üzerindeki teklif formu veya WhatsApp
          (+90 534 978 98 59) aracılığıyla alınmaktadır. Siparişiniz
          WhatsApp üzerinden tarafımızca teyit edildikten sonra işleme alınır.
        </p>

        <h2>2. Teslimat Bilgileri</h2>
        <ul>
          <li><strong>Teslimat bölgesi:</strong> Ataşehir ve çevre ilçeler</li>
          <li><strong>Teslimat saatleri:</strong> 09:00 – 18:00 (her gün)</li>
          <li><strong>Minimum sipariş:</strong> Ürüne göre değişiklik gösterebilir, WhatsApp üzerinden bilgi alınız</li>
          <li><strong>Hazırlık süresi:</strong> Tüm ürünler sipariş üzerine taze hazırlandığından, toplu siparişlerde en az 1 gün önceden sipariş verilmesi önerilir</li>
        </ul>

        <h2>3. Ödeme</h2>
        <p>
          Ödeme, teslimat sırasında nakit veya WhatsApp üzerinden iletilen
          banka hesap bilgilerine havale/EFT ile yapılabilir. Ödeme detayları
          sipariş teyidinde bildirilir.
        </p>

        <h2>4. İade ve İptal</h2>
        <p>
          Ürünlerimiz gıda niteliğinde olduğundan ve sipariş üzerine taze
          hazırlandığından, teslimat sonrası iade kabul edilememektedir. Ancak:
        </p>
        <ul>
          <li>Sipariş onayından önce iptal talebi ücretsiz olarak kabul edilir</li>
          <li>Ürünlerde kalite sorunu tespit edilmesi halinde, teslimat anında bildirilmesi durumunda değişim yapılır</li>
          <li>Yanlış veya eksik teslimat halinde, tarafımızca düzeltme yapılır</li>
        </ul>

        <h2>5. İletişim</h2>
        <p>
          Teslimat ve iade koşulları hakkında sorularınız için{" "}
          <a href="/iletisim" style={{ color: 'var(--cta)' }}>iletişim sayfamızdan</a> veya
          WhatsApp (+90 534 978 98 59) üzerinden bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
