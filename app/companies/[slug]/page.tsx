import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import LeadForm from "../../../components/LeadForm";
import { companies, getCompany, productsByCompany } from "../../../data/marketplace";

export function generateStaticParams() { return companies.map((company) => ({ slug: company.slug })); }

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();
  const companyProducts = productsByCompany(company.slug);
  return (
    <main>
      <section className="company-cover" style={{ backgroundImage: `linear-gradient(90deg, rgba(37,49,41,.95), rgba(37,49,41,.5)), url('${company.cover}')` }}>
        <div className="site-wrap company-hero-content">
          <span className="company-logo company-logo-large">{company.initials}</span>
          <div><span className="verified-inline light-text">● Verified SME company</span><h1>{company.name}</h1><p>{company.sector} • {company.location}</p></div>
          <a className="button button-red" href="#contact-company">Contact company →</a>
        </div>
      </section>
      <section className="section section-white">
        <div className="site-wrap">
          <div className="company-profile-layout">
            <div>
              <div className="profile-card"><h2>Company overview</h2><p>{company.description}</p><div className="profile-stats"><div><span>Established</span><strong>{company.established}</strong></div><div><span>Team size</span><strong>{company.employees}</strong></div><div><span>Location</span><strong>{company.location}</strong></div></div></div>
              <div className="profile-card"><h2>Certifications & trust</h2><div className="certificate-list">{company.certifications.map((item) => <span key={item}>✓ {item}</span>)}</div></div>
            </div>
            <aside className="profile-side"><h3>Business profile</h3><p><span>Sector</span><strong>{company.sector}</strong></p><p><span>Business type</span><strong>Manufacturer / Service Provider</strong></p><p><span>Markets served</span><strong>Pan India & Export</strong></p><Link className="button button-outline button-wide" href="/requirements">Post a buyer requirement</Link></aside>
          </div>
          {companyProducts.length > 0 && <div className="company-products"><div className="section-heading"><div><h2>Products from {company.name}</h2><p>Verified marketplace listings from this supplier.</p></div></div><div className="product-grid">{companyProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div></div>}
          <div className="enquiry-layout" id="contact-company"><div><span className="section-label">Start a conversation</span><h2>Contact {company.name}</h2><p>Ask about products, capabilities, pricing, distribution or a custom business requirement.</p></div><LeadForm title="Send company enquiry" button="Contact company" compact /></div>
        </div>
      </section>
    </main>
  );
}
