// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

import Link from "next/link";
import ProductCard from "../components/ProductCard";
import CompanyCard from "../components/CompanyCard";
import { categories, companies, products } from "../data/marketplace";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="site-wrap hero-grid">
          <div className="hero-copy">
            <span className="kicker"><i /> India&apos;s verified SME network</span>
            <h1>Find the business <span>behind the product.</span></h1>
            <p>Search trusted manufacturers, compare capabilities and connect directly with Indian SMEs ready for business.</p>
            <form className="hero-search" action="/products">
              <label className="sr-only" htmlFor="hero-query">Search products and suppliers</label>
              <input id="hero-query" name="q" placeholder="What product or service are you looking for?" />
              <select name="location" aria-label="Supplier location"><option value="">All India</option><option>Maharashtra</option><option>Gujarat</option><option>Karnataka</option><option>Delhi NCR</option></select>
              <button>Find suppliers →</button>
            </form>
            <div className="popular-links"><span>Popular searches:</span><Link href="/products?category=machinery">Machinery</Link><Link href="/products?category=technology">IT services</Link><Link href="/products?category=packaging">Packaging</Link></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo" />
            <div className="floating-stat floating-stat-one"><span className="verified-inline">● Verified network</span><strong>12,500+</strong><small>registered companies</small></div>
            <div className="floating-stat floating-stat-two"><small>New buyer enquiries</small><strong>2,840</strong><small>this week</small></div>
          </div>
        </div>
      </section>
      <section className="stats-band"><div className="site-wrap stats-grid"><div><strong>45K+</strong><span>Products & services</span></div><div><strong>48</strong><span>Industry categories</span></div><div><strong>500+</strong><span>Indian cities</span></div><div><strong>24/7</strong><span>Business discovery</span></div></div></section>
      <section className="section"><div className="site-wrap"><div className="section-heading"><div><span className="section-label">Browse the network</span><h2>Explore business categories</h2><p>Jump directly into the sector you need.</p></div><Link href="/products">View all products →</Link></div><div className="category-grid">{categories.map((category, index) => <Link key={category.slug} className={`category-card ${index === 1 || index === 6 ? "featured" : ""}`} href={`/products?category=${category.slug}`}><span className="category-icon">{category.icon}</span><strong>{category.name}</strong><small>{category.count} listings</small></Link>)}</div></div></section>
      <section className="section section-white"><div className="site-wrap"><div className="section-heading"><div><span className="section-label">Verified listings</span><h2>Marketplace picks</h2><p>Popular products from active SME suppliers.</p></div><Link href="/products">Browse marketplace →</Link></div><div className="product-grid home-products">{products.filter((product) => product.featured).map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>
      <section className="section section-tint"><div className="site-wrap"><div className="split-feature"><div className="split-photo" /><div className="split-copy"><span className="section-label light">For suppliers</span><h2>Turn your company profile into a growth channel.</h2><p>Showcase products, certifications and manufacturing capabilities where active buyers are already searching.</p><div className="benefit-grid"><span>✓ Verified business badge</span><span>✓ Product catalogue</span><span>✓ Buyer enquiries</span><span>✓ Performance insights</span></div><Link className="button button-red" href="/register">List your business →</Link></div></div></div></section>
      <section className="section section-white"><div className="site-wrap"><div className="section-heading"><div><span className="section-label">Trusted network</span><h2>Featured companies</h2><p>Recently active verified businesses.</p></div><Link href="/companies">Company directory →</Link></div><div className="company-grid">{companies.slice(0, 4).map((company) => <CompanyCard key={company.slug} company={company} />)}</div><div className="rfq-banner"><div><h2>Have a specific requirement?</h2><p>Tell us what you need and let verified suppliers contact you.</p></div><Link className="button button-light" href="/requirements#post">Post requirement →</Link></div></div></section>
    </main>
  );
}
