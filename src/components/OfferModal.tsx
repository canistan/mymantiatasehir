"use client";

import { useEffect, useState } from "react";

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Listen for hash changes to open modal
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#teklif")) {
        setIsOpen(true);
        // Extract product name from hash if exists, e.g., #teklif?product=Kayseri%20Mantısı
        const urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
        const p = urlParams.get("product");
        if (p) setProduct(decodeURIComponent(p));
      } else {
        setIsOpen(false);
      }
    };

    // Listen for custom events if hash is not preferred
    const handleCustomEvent = (e: any) => {
      setIsOpen(true);
      if (e.detail?.product) {
        setProduct(e.detail.product);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("open-offer-modal", handleCustomEvent);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("open-offer-modal", handleCustomEvent);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setStatus("idle");
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Save to Payload CMS API
      const res = await fetch("/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          product: product,
          status: "new"
        })
      });

      if (!res.ok) throw new Error("API Error");

      setStatus("success");

      // 2. Redirect to WhatsApp
      const waText = `Merhaba, ben ${formData.name}. ${product ? product + " için " : ""}Sipariş/Teklif vermek istiyorum.%0A%0A*Telefon:* ${formData.phone}%0A*Adres:* ${formData.address}%0A*Not:* ${formData.message}`;
      const waUrl = `https://wa.me/905349789859?text=${waText}`;
      
      setTimeout(() => {
        window.open(waUrl, "_blank");
        closeModal();
      }, 1500);

    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content glass animate-fade-in">
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary)' }}>
          {product ? `${product} Siparişi` : "Sipariş & Teklif Formu"}
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Lütfen bilgilerinizi girin. Talebiniz bize ulaşacak ve ardından WhatsApp'a yönlendirileceksiniz.
        </p>

        {status === "success" ? (
          <div style={{ padding: '20px', backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', borderRadius: '8px', textAlign: 'center' }}>
            <strong>Talebiniz başarıyla alındı!</strong><br/>
            WhatsApp'a yönlendiriliyorsunuz...
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>İsim Soyisim</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Telefon Numarası</label>
              <input 
                type="tel" 
                required 
                className="form-input" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Teslimat / Etkinlik Adresi</label>
              <textarea 
                required 
                rows={3} 
                className="form-input" 
                value={formData.address} 
                onChange={e => setFormData({...formData, address: e.target.value})} 
              ></textarea>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>Notunuz / Talebiniz (Opsiyonel)</label>
              <textarea 
                rows={2} 
                className="form-input" 
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})} 
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }} disabled={status === "loading"}>
              {status === "loading" ? "Gönderiliyor..." : "Gönder ve WhatsApp'a Geç"}
            </button>
          </form>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }
        .modal-content {
          background: white;
          width: 100%;
          max-width: 500px;
          padding: 32px;
          border-radius: var(--radius-lg);
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          background: none; border: none;
          font-size: 1.5rem; cursor: pointer;
          color: var(--text-light);
        }
        .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 6px;
          font-family: inherit;
          background: rgba(255,255,255,0.8);
        }
        .form-input:focus {
          outline: 2px solid var(--primary);
          border-color: transparent;
        }
      `}} />
    </div>
  );
}
