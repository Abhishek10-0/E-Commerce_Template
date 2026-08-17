import Link from "next/link";
import type { Company } from "../data/marketplace";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="company-card">
      <div className="company-card-top">
        <span className="company-logo">{company.initials}</span>
        <span className="verified-inline">● Verified company</span>
      </div>
      <h3>{company.name}</h3>
      <p>{company.sector}</p>
      <div className="company-location">⌖ {company.location}</div>
      <Link href={`/companies/${company.slug}`}>View company profile →</Link>
    </article>
  );
}
