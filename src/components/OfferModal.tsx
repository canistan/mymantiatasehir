"use client";

import { useEffect, useState } from "react";

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#teklif-al")) {
        setIsOpen(true);
        const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
        const p = urlParams.get("product");
        if (p) setProduct(decodeURIComponent(p));
        else setProduct("");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setStatus("idle");
    setFormData({ name: "", phone: "", address: "", message: "" });
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          product: product,
          status: "new",
        }),
      });

      if (!res.ok) throw new Error("API Error");

      setStatus("success");

      const waText = `Merhaba, ben ${formData.name}.${product ? ` ${product} için` : ""} sipariş/teklif vermek istiyorum.%0A%0A*Telefon:* ${formData.phone}%0A*Adres:* ${formData.address}${formData.message ? `%0A*Not:* ${formData.message}` : ""}`;
      const waUrl = `https://wa.me/905349789859?text=${waText}`;

      setTimeout(() => {
        window.open(waUrl, "_blank");
        closeModal();
      }, 1500);
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal} aria-label="Kapat">
          ×
        </button>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '4px' }}>
          {product ? `${product} Siparişi` : "Sipariş & Teklif Formu"}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Bilgilerinizi girin — talebiniz bize ulaşacak ve ardından WhatsApp'a yönlendirileceksiniz.
        </p>

        {status === "success" ? (
          <div style={{ padding: '20px', backgroundColor: 'rgba(37, 211, 102, 0.08)', border: '1px solid rgba(37, 211, 102, 0.2)', color: '#1a7a3a', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <strong>Talebiniz alındı!</strong>
            <br />
            WhatsApp'a yönlendiriliyorsunuz…
          </div>
        ) : status === "error" ? (
          <div style={{ padding: '20px', backgroundColor: 'rgba(181, 86, 60, 0.08)', border: '1px solid rgba(181, 86, 60, 0.2)', color: 'var(--cta)', borderRadius: 'var(--radius)', textAlign: 'center', marginBottom: '16px' }}>
            <strong>Bir hata oluştu.</strong> Lütfen tekrar deneyin veya doğrudan WhatsApp'tan yazın.
            <br />
            <a href="https://wa.me/905349789859" className="btn btn-primary mt-4" target="_blank" rel="noopener noreferrer">WhatsApp'a Git</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">İsim Soyisim *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="Adınız Soyadınız"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telefon Numarası *</label>
              <input
                type="tel"
                required
                className="form-input"
                placeholder="0 5XX XXX XX XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Teslimat / Etkinlik Adresi *</label>
              <textarea
                required
                rows={2}
                className="form-input"
                placeholder="Teslimat veya etkinlik adresi"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Notunuz (opsiyonel)</label>
              <textarea
                rows={2}
                className="form-input"
                placeholder="Miktar, tarih veya özel istekleriniz…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4" disabled={status === "loading"}>
              {status === "loading" ? "Gönderiliyor…" : "Gönder & WhatsApp'a Geç"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
