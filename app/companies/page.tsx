import CompanyCard from "../../components/CompanyCard";
import { companies } from "../../data/marketplace";

export default function CompaniesPage() {
  return <main><section className="page-hero"><div className="site-wrap"><span className="breadcrumbs">Home / Companies</span><h1>Verified company directory</h1><p>Explore capabilities, certifications and product catalogues from Indian SMEs.</p></div></section><section className="section section-white"><div className="site-wrap"><div className="directory-toolbar"><div><strong>{companies.length}</strong> verified demo companies</div><div className="directory-search">⌕ Search by company, sector or location</div></div><div className="company-grid company-directory-grid">{companies.map((company) => <CompanyCard key={company.slug} company={company} />)}</div></div></section></main>;
}
