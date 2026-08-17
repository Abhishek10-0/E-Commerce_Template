import Link from "next/link";
import type { Product } from "../data/marketplace";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="verified-badge">● VERIFIED</span>
      </Link>
      <div className="product-card-body">
        <span className="eyebrow">{product.category}</span>
        <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
        <p>{product.company} • {product.location}</p>
        <div className="product-card-meta"><strong>{product.price}</strong><span>{product.unit}</span></div>
        <Link className="card-action" href={`/products/${product.slug}`}>View product <span>→</span></Link>
      </div>
    </article>
  );
}
