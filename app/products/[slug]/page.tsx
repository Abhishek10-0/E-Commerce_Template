import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import ProductDetailInteractive from "../../../components/ProductDetailInteractive";
import LeadForm from "../../../components/LeadForm";
import { getProduct, products } from "../../../data/marketplace";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug && (item.category === product.category || item.companySlug === product.companySlug)).slice(0, 3);
  return <main><section className="detail-breadcrumb"><div className="site-wrap"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><strong>{product.name}</strong></div></section><section className="section section-white detail-section"><div className="site-wrap"><ProductDetailInteractive product={product} /><div className="enquiry-layout" id="enquire"><div><span className="section-label">Direct business enquiry</span><h2>Request pricing from {product.company}</h2><p>Share your quantity, preferred delivery timeline and specifications. The supplier can respond with an accurate commercial quotation.</p><ul className="check-list"><li>Your enquiry goes directly to the verified supplier</li><li>No payment is required to request a quote</li><li>Compare terms before making a purchase decision</li></ul></div><LeadForm title={`Enquire about ${product.name}`} button="Send enquiry" compact /></div>{related.length > 0 && <div className="related-section"><div className="section-heading"><div><h2>Related products</h2><p>More listings you may find useful.</p></div><Link href={`/products?category=${product.category}`}>View category →</Link></div><div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div>}</div></section></main>;
}
