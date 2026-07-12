import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>Sayfa Bulunamadı</h2>
        <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link href="/" className="btn btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
