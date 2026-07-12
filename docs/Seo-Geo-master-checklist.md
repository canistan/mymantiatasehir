# 🧭 Master SEO + GEO + Teknik Altyapı Checklist (v2)

> Next.js + PayloadCMS + iyzico + Vercel stack'inde her yeni proje veya mevcut site denetimi için kullanılacak bütünleşik checklist.
> 3 katman: (1) Teknik Altyapı → (2) Entegrasyonlar → (3) Site İçi SEO & GEO
> Her yeni projede bu dosyayı kopyala, proje adını başlığa ekle, ilerledikçe işaretle.

---

# 1️⃣ TEKNİK ALTYAPI

## 1.1 Temel SEO İskeleti (Kritik — olmadan site yayına alınmaz)
- [ ] `app/sitemap.ts` — statik + dinamik sayfalar + hreflang alternatifleri
- [ ] `app/robots.ts` — sitemap referansıyla
- [ ] `metadataBase` layout'ta tanımlı (`new URL('https://...')`)
- [ ] Prod'da `robots: { index: false }` **KAPALI** (sadece staging/dev'de)
- [ ] Her sayfada `canonical` URL
- [ ] Çok dilliyse `alternates.languages` (hreflang) her sayfada
- [ ] Open Graph (title, description, image 1200x630, url, type) tüm sayfalarda
- [ ] Twitter Card metadata (`summary_large_image`)
- [ ] SSL/HTTPS zorunlu, HTTP→HTTPS 301 redirect
- [ ] `www` / `non-www` tek versiyona 301 redirect ile sabit
- [ ] Trailing slash davranışı tutarlı (hep var / hep yok, ikisi birden değil)

## 1.2 Domain, DNS & Hosting
- [ ] DNS kayıtları doğru (A/CNAME → Vercel, MX → mail sağlayıcı, TXT → doğrulamalar)
- [ ] DNSSEC aktif (destekliyorsa domain sağlayıcısı)
- [ ] Vercel'de custom domain + otomatik SSL (Let's Encrypt) doğrulandı
- [ ] Staging ortamı (`*.semsicanalbayrak.com`) prod'dan ayrı, noindex'li
- [ ] Environment variable'lar (API key, iyzico secret vs.) Vercel dashboard'da, repo'da değil

## 1.3 Güvenlik Başlıkları & Sertleştirme
- [ ] `next.config.js` içinde security headers: `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- [ ] Content-Security-Policy tanımlı (en azından temel seviye)
- [ ] Admin panel (PayloadCMS) route'u brute-force / rate-limit koruması altında
- [ ] Form endpoint'lerinde CSRF/rate-limit + honeypot veya reCAPTCHA/Turnstile (spam engelleme)
- [ ] Bağımlılıklar güncel — `npm audit` periyodik kontrol

## 1.4 Yedekleme & Sürüm Kontrolü
- [ ] Veritabanı (Payload/Mongo veya Postgres) otomatik günlük yedek
- [ ] Git repo'da branch stratejisi (main = prod, dev = staging)
- [ ] Vercel deployment rollback'in nasıl yapılacağı biliniyor/dokümante

## 1.5 Görsel & Performans Altyapısı
- [ ] Logo/hero görselleri WebP/AVIF, mümkünse SVG — dosya başı 50-100KB altı
- [ ] Favicon seti tam: 16x16, 32x32 `.ico`, 180x180 apple-touch-icon, 192/512 web manifest ikonları
- [ ] `next/image` kullanılıyor, `priority` sadece above-the-fold görsellerde
- [ ] Font'lar `next/font` ile self-host, layout shift yok
- [ ] `loading.tsx` her route segment'inde var (beyaz ekran yok)
- [ ] `error.tsx` ve `not-found.tsx` markaya uygun tasarlanmış
- [ ] Core Web Vitals hedef aralıkta: LCP < 2.5s, CLS < 0.1, INP < 200ms

## 1.6 Ekip Otomasyonu (Geliştirici Bağımlılığını Azaltma)
- [ ] **Rendering stratejisi dokümanı** — proje başında hangi sayfanın SSR/ISR/statik olacağı yazılı karara bağlanmış (geliştiriciyle "neden yavaş" tartışmasını önler)
- [ ] Payload CMS içinde **no-code redirect modülü** — pazarlama ekibi geliştiriciye ihtiyaç duymadan 301/302 yönlendirmesi yapabiliyor
- [ ] CMS'e yüklenen görseller **otomatik** WebP/AVIF'e çevriliyor ve boyutlandırılıyor (müşterinin ham/büyük dosya yüklemesi sorun olmuyor)
- [ ] CMS'de sayfa bazlı **serbest JSON-LD alanı** — pazarlama ekibi kampanya/blog sayfalarına özel schema enjekte edebiliyor (sabit tiplerin dışında)
- [ ] Lighthouse CI sadece ölçmüyor, **gate olarak çalışıyor** — performansı düşüren kod deploy'dan önce engelleniyor

## 1.7 Blog Altyapısı (SEO'yu güçlendirmek için — teknik kurulum)
- [ ] PayloadCMS'de ayrı `posts` (veya `blog`) collection'ı: title, slug, excerpt, cover image, category, tags, author, publishedAt, updatedAt, SEO alanları (meta title/description özelleştirme)
- [ ] Blog listing sayfası: `/blog` — pagination (`?page=2` gibi) veya infinite scroll
- [ ] Kategori/etiket sayfaları: `/blog/kategori/[slug]`
- [ ] Blog detay sayfası: `/blog/[slug]` — dinamik `generateMetadata()` ile
- [ ] "İlgili yazılar" (related posts) bloğu — internal linking için kritik
- [ ] RSS feed (`/feed.xml` veya `/rss.xml`) — hem kullanıcı hem AI crawler'lar için
- [ ] Blog için ayrı sitemap segmenti (`sitemap-blog.xml`) — sık güncellenen içerik ayrı sinyal versin
- [ ] Yazı içi görsellerde `alt` text zorunlu alan (CMS seviyesinde validasyon)
- [ ] Tahmini okuma süresi (`X dk okuma`) — hem UX hem GEO için içerik uzunluğu sinyali

---

# 2️⃣ ENTEGRASYONLAR

## 2.1 Analitik & Takip
- [ ] Google Analytics 4 (GA4) kurulu — `gtag.js` veya Server-Side GTM ile
- [ ] Google Tag Manager (GTM) container kurulu — ileride tag eklemeyi kolaylaştırır (kod değişikliği gerekmeden)
- [ ] GA4'te temel event'ler: `form_submit`, `cta_click`, `scroll_depth`, e-ticaretse `add_to_cart`/`purchase`
- [ ] GA4 + GTM Consent Mode v2 kurulu (KVKK/GDPR çerez onayı ile entegre)
- [ ] Microsoft Clarity veya Hotjar — ısı haritası ve session recording (ücretsiz, kurulumu 5 dk)
- [ ] Meta Pixel (Instagram/Facebook reklamı planlanıyorsa)

## 2.2 Webmaster Araçları
- [ ] Google Search Console'a site eklendi (domain property, DNS ile doğrulama)
- [ ] Sitemap GSC'ye submit edildi
- [ ] Bing Webmaster Tools'a da eklendi (GSC verisini import edebiliyor, düşük efor)
- [ ] Yandex Webmaster — Türkiye'de hâlâ trafik payı olan bir motor, ek maliyeti yok

## 2.3 SEO Analiz & Rakip Takip Araçları
- [ ] Ahrefs veya Semrush hesabı — backlink profili, keyword ranking takibi, rakip analizi kurulumu
- [ ] Ahrefs Site Audit periyodik tarama (haftalık/aylık) — kırık link, duplicate content, teknik hata takibi
- [ ] Keyword tracking listesi oluşturuldu (hedef kelimeler + rakip kıyası)
- [ ] Backlink kazanım stratejisi not edildi (misafir yazı, dizin kaydı, basın bülteni vs.)

## 2.4 Performans Test Araçları
- [ ] PageSpeed Insights ile mobil + masaüstü skor kaydı (baseline olarak sakla)
- [ ] Lighthouse CI (opsiyonel) — her deploy'da otomatik skor kontrolü için GitHub Action
- [ ] GTmetrix veya WebPageTest — ikinci kaynak doğrulama için

## 2.5 İş Süreci Entegrasyonları
- [ ] Google Business Profile kaydı (LocalBusiness ise) — NAP (isim/adres/telefon) sitedekiyle birebir aynı
- [ ] WhatsApp Business API veya widget — özellikle Sevinç Dent gibi hizmet sektörü müşterileri için
- [ ] E-posta pazarlama entegrasyonu (Mailchimp/Brevo) — blog/lead magnet abonelik formu bağlı
- [ ] iyzico webhook'ları test edildi (e-ticaret siteleri için ödeme sonrası event'ler)
- [ ] CRM veya Google Sheets'e form/lead otomatik düşüyor (Zapier/Make veya native webhook)
- [ ] CRM verisi ayrıca **raporlama dashboard'una** (Power BI / Looker Studio) besleniyor — sadece CRM'e düşmesi yetmiyor, üst yönetim raporlanabilir görmeli

## 2.6 Doğrulama & Onay Araçları
- [ ] Google Rich Results Test — tüm schema tipleri tek tek test edildi
- [ ] Mobile-Friendly Test'ten geçti
- [ ] Screaming Frog (veya Sitebulb) ile tam site taraması — kırık link, duplicate title/meta, orphan sayfa kontrolü

---

# 3️⃣ SİTE İÇİ SEO & GEO (AI Görünürlüğü)

## 3.1 Çoklu Dil & Metadata Doğruluğu
- [ ] `generateMetadata()` kullanılıyor (statik `export const metadata` değil) — locale'e göre title/description değişiyor
- [ ] Tüm form label/placeholder/buton metinleri `useTranslations` ile çevrili
- [ ] FAQ verisi her dilde ayrı — schema da locale'e duyarlı
- [ ] Yasal sayfalar (KVKK, Gizlilik, Çerez, Kullanım Şartları) her dilde mevcut
- [ ] Menü/footer'daki her link gerçek bir sayfaya gidiyor (404 taraması yapıldı)

## 3.2 Yapısal Veri (Schema.org / JSON-LD)
- [ ] `Organization` — anasayfa/kurumsal
- [ ] `LocalBusiness` — iletişim sayfası (adres, telefon, çalışma saatleri)
- [ ] `Product` — ürün detay sayfaları (e-ticaret)
- [ ] `BreadcrumbList` — tüm alt sayfalar
- [ ] `WebSite` + `SearchAction` — anasayfa
- [ ] `FAQPage` — SSS sayfası
- [ ] `Article` / `BlogPosting` — her blog yazısı (author, datePublished, dateModified zorunlu)
- [ ] Schema'lar Rich Results Test ile doğrulandı

## 3.3 GEO — AI Arama Motorlarına Görünürlük (ChatGPT, Perplexity, Claude, Gemini)
- [ ] `robots.txt`'te GPTBot, ClaudeBot, PerplexityBot, Google-Extended engellenmiyor (bilinçli engelleme yoksa)
- [ ] `llms.txt` dosyası var — siteyi ve ana sayfaları AI'lara özetleyen metin dosyası
- [ ] İçerik alıntılanabilir formatta: net H1-H3, kısa paragraf, doğrudan cevap veren cümleler
- [ ] Her önemli sayfada yazar/kaynak/organizasyon bilgisi doğrulanabilir
- [ ] Güncellik sinyali görünür: "son güncelleme tarihi" + `dateModified` schema
- [ ] Kurumsal bilgiler (adres, telefon, marka/temsilcilik isimleri) site + Google Business + LinkedIn arasında birebir tutarlı
- [ ] Uzun sayfalarda özet kutusu / TL;DR bulunuyor
- [ ] Statik/SSR render — içerik client-side JS olmadan da HTML'de mevcut
- [ ] **Semantik HTML hiyerarşi disiplini** — H1-H3 sadece görsel büyüklük için değil, sayfanın gerçek bilgi hiyerarşisini (içindekiler gibi) yansıtacak şekilde kullanılıyor
- [ ] **Entity (varlık) optimizasyonu** — metinlerde sektör terimleri, lokasyonlar ve marka isimleri sadece anahtar kelime değil, birbiriyle anlamsal bütünlük içinde doğal dille geçiyor (AI modellerinin varlık ilişkilendirmesini güçlendirir)

## 3.4 İçerik Stratejisi & Blog SEO
- [ ] Her blog yazısı tek bir ana anahtar kelime + 2-3 yan kelime etrafında kurgulanmış
- [ ] Topic cluster mantığı: bir "pillar" sayfa + onu destekleyen alt yazılar internal link ile bağlı
- [ ] Yazı içinde en az 2-3 internal link (diğer blog yazıları veya hizmet sayfaları)
- [ ] Başlıkta ve ilk paragrafta ana anahtar kelime geçiyor
- [ ] Görsellerde açıklayıcı `alt` text (anahtar kelime doğal şekilde geçiyor, spam değil)
- [ ] Her yazının altında **yazar biyografisi** bloğu — unvan, uzmanlık alanı, varsa sertifika/referans (E-E-A-T sinyali, AI botların okuyabileceği net metin)
- [ ] Yayın takvimi var (ayda min. 2-4 yazı, düzenlilik crawl sıklığını artırır)

## 3.5 Footer Link Standardı (her projede olmalı)
- [ ] Anasayfa
- [ ] Hakkımızda
- [ ] Hizmetler/Ürünler (alt sayfalarına link)
- [ ] Blog
- [ ] SSS
- [ ] İletişim
- [ ] KVKK Aydınlatma Metni
- [ ] Gizlilik Politikası
- [ ] Çerez Politikası
- [ ] Kullanım Şartları
- [ ] E-ticaretse: İade & Teslimat Koşulları, Mesafeli Satış Sözleşmesi
- [ ] Sosyal medya ikonları → **kurumsal** hesaplara gidiyor (kişisel profil değil)
- [ ] Adres + telefon + e-posta (NAP) — Google Business ile birebir aynı
- [ ] Varsa temsilcilik/marka logoları (ör. Özensan için Cedima/DUSS/Ticab/Victor/GCE logoları)
- [ ] Sitemap linki (opsiyonel ama GEO için faydalı — AI crawler kolay bulur)

## 3.6 UX / Dönüşüm Sinyalleri (SEO'yu dolaylı etkiler)
- [ ] Breadcrumb navigasyonu alt sayfalarda mevcut
- [ ] Mobil hamburger menü çalışıyor (masaüstü `hidden lg:flex` ise mobil karşılığı test edilmeli)
- [ ] Footer öncesi CTA bandı ("İletişime Geçin" / "Teklif Alın")
- [ ] 404 sayfası markaya uygun, anasayfaya dönüş linki var
- [ ] İletişim formu gönderim sonrası açık başarı/hata mesajı veriyor

## 3.7 Yayın Öncesi Son Doğrulama
- [ ] robots.txt ve sitemap.xml canlıda gerçekten erişilebilir (`/robots.txt`, `/sitemap.xml`)
- [ ] GSC + Bing + Yandex'e sitemap submit edildi
- [ ] Rich Results Test + Mobile-Friendly Test'ten geçti
- [ ] Screaming Frog taramasında kırık link / duplicate meta yok
- [ ] PageSpeed baseline skoru kaydedildi (ileride karşılaştırma için)

---

## 📌 Kullanım Notu
Her yeni proje başladığında bu dosyayı kopyala, proje adını başlığa ekle. Sıra önerisi:
1. **Teknik Altyapı** olmadan site yayına alınmaz (özellikle 1.1, 1.3, 1.5).
2. **Entegrasyonlar** yayının ilk haftası içinde tamamlanmalı (özellikle 2.1, 2.2).
3. **Site İçi SEO & GEO** ilk 2-4 hafta içinde + blog ritmiyle sürekli devam eden bir süreç.
