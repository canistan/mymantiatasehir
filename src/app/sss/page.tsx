"use client";

import type { Metadata } from "next";
import { useState } from "react";

const faqs = [
  {
    question: "Minimum sipariş miktarı nedir?",
    answer:
      "Minimum sipariş miktarı ürüne göre değişiklik gösterebilir. Detaylı bilgi için WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    question: "Siparişler kaç gün önceden verilmeli?",
    answer:
      "Tüm ürünlerimiz sipariş üzerine taze hazırlandığından, özellikle toplu siparişlerde en az 1 gün önceden sipariş vermenizi öneririz. Günlük küçük siparişler için aynı gün teslimat mümkün olabilir.",
  },
  {
    question: "Hangi bölgelere teslimat yapıyorsunuz?",
    answer:
      "Ataşehir ve çevre ilçelere teslimat yapıyoruz. Daha uzak bölgeler için lütfen bizimle iletişime geçin.",
  },
  {
    question: "Teslimat ücreti var mı?",
    answer:
      "Teslimat ücreti, sipariş tutarına ve teslimat mesafesine göre değişiklik gösterebilir. Sipariş sırasında tarafınıza bilgi verilecektir.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer:
      "Nakit veya banka havalesi/EFT ile ödeme kabul ediyoruz. Ödeme detayları sipariş teyidi sırasında WhatsApp üzerinden paylaşılır.",
  },
  {
    question: "Ürünlerinizde katkı maddesi var mı?",
    answer:
      "Hayır. Tüm ürünlerimiz tamamen el yapımı olup hiçbir koruyucu katkı maddesi içermez. Gerçek dana eti, birinci sınıf un ve doğal zeytinyağı kullanıyoruz.",
  },
  {
    question: "Catering / organizasyon hizmeti veriyor musunuz?",
    answer:
      "Evet. Doğum günleri, nişan, söz, düğün ve kurumsal etkinlikler için özel catering menüleri hazırlıyoruz. Misafir sayınıza ve tercihlerinize göre menü oluşturuyoruz.",
  },
  {
    question: "Sipariş sonrası iade yapılıyor mu?",
    answer:
      "Ürünlerimiz gıda niteliğinde olduğundan ve sipariş üzerine taze hazırlandığından, teslimat sonrası iade kabul edilememektedir. Ancak kalite sorunu veya yanlış teslimat durumunda anında çözüm sağlıyoruz.",
  },
];

export default function SSS() {
  return (
    <div className="pt-page">
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-label">Yardım</span>
            <h1 className="section-title">Sıkça Sorulan Sorular</h1>
            <p className="section-subtitle">
              En çok merak edilen soruların cevapları. Başka sorularınız varsa bize ulaşın.
            </p>
          </div>

          <FAQList faqs={faqs} />

          <div className="text-center mt-16">
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
              Sorunuzu bulamadınız mı?
            </p>
            <a
              href="https://wa.me/905349789859?text=Merhaba,%20bir%20sorum%20var."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp'tan Sorun
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

function FAQList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {faq.question}
            <span className="chevron">▼</span>
          </button>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
