import type { Config } from "tailwindcss";

// My Mantı — Kurumsal Kimlik: "Zarif Sofra"
// Fontları next/font/google ile projenin layout.tsx dosyasında yükle:
//
//   import { Fraunces, Inter } from "next/font/google";
//
//   const fraunces = Fraunces({
//     subsets: ["latin", "latin-ext"], // latin-ext: ş, ğ, ı, ö, ü, ç için gerekli
//     variable: "--font-heading",
//     weight: ["500", "600"],
//   });
//
//   const inter = Inter({
//     subsets: ["latin", "latin-ext"],
//     variable: "--font-body",
//     weight: ["400", "500"],
//   });
//
// Sonra <body className={`${fraunces.variable} ${inter.variable}`}> ile sar.

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: "#FAF7F2",   // Ana zemin
          ink: "#1C1B19",     // Ana metin / kontur
          brass: "#B08D57",   // Vurgu 1 — slogan, ince detaylar, hover
          terracotta: "#B5563C", // Vurgu 2 — CTA, fiyat etiketleri, rozetler
          neutral: "#E6DFD2", // Kart kenarlıkları, ayraç çizgileri
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em", // "EV YAPIMI · GÜNLÜK TAZE" gibi etiketler için
      },
      borderRadius: {
        brand: "4px", // logo/kart köşeleri için tutarlı yarıçap
      },
    },
  },
  plugins: [],
};

export default config;
