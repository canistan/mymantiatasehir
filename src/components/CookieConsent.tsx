"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Küçük bir gecikme ile göster (sayfa yüklenmesini engellemesin)
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar">
      <p>
        Bu site, deneyiminizi iyileştirmek için çerezler kullanmaktadır.
        Siteyi kullanmaya devam ederek{" "}
        <a href="/cerez-politikasi">çerez politikamızı</a> kabul etmiş
        olursunuz.
      </p>
      <button className="btn btn-primary" onClick={accept}>
        Kabul Et
      </button>
    </div>
  );
}
