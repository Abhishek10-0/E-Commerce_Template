import { Suspense } from "react";
import ProductExplorer from "../../components/ProductExplorer";

export default function ProductsPage() {
  return <main><section className="page-hero"><div className="site-wrap"><span className="breadcrumbs">Home / Products</span><h1>Product directory</h1><p>Discover products and services from verified Indian SMEs.</p></div></section><section className="section section-white"><div className="site-wrap"><Suspense fallback={<div className="loading-state">Loading marketplace…</div>}><ProductExplorer /></Suspense></div></section></main>;
}
